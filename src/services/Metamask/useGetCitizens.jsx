import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    CONTRACT_ADDRESS,
    MAX_BLOCK_SIZE,
    TX_INIT_BLOCK
} from '@utils/constans';
import { ABI_CITIZEN_CONTRACT } from '@utils/abiContracts';

import { citizensDto } from '@/models/dto';

const useGetCitizens = ({ web3 }) => {
    const [citizens, setCitizens] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const getPassEventData = async (
        contractInstance,
        eventName,
        citizensDto,
        searchNumer
    ) => {
        const passEvents = await Promise.allSettled(
            Array.from({ length: searchNumer }, (v, i) => i).map(
                async (_, index) => {
                    const events = await contractInstance.getPastEvents(
                        eventName,
                        {
                            fromBlock: TX_INIT_BLOCK + MAX_BLOCK_SIZE * index,
                            toBlock:
                                TX_INIT_BLOCK + MAX_BLOCK_SIZE * (index + 1)
                        }
                    );
                    return citizensDto(events);
                }
            )
        );
        return passEvents
            .filter(
                ({ status, value }) => status === 'fulfilled' && value.length
            )
            .flatMap(({ value }) => value);
    };

    const getGetBlockSearch = async (web3) => {
        const blockNumber = await web3.eth.getBlockNumber();
        return Math.round(
            1 + (Number(blockNumber) - TX_INIT_BLOCK) / MAX_BLOCK_SIZE
        );
    };

    const getCitizensList = async () => {
        if (!web3) return { error: 'Wallet instance account not found' };
        const cityContractInstance = new web3.eth.Contract(
            ABI_CITIZEN_CONTRACT,
            CONTRACT_ADDRESS
        );
        const searchNumer = await getGetBlockSearch(web3);
        const citizensList = await getPassEventData(
            cityContractInstance,
            'Citizen',
            citizensDto,
            searchNumer
        );
        return { data: citizensList };
    };

    const init = async () => {
        console.log('🚀 ~ Initializate Request');
        const { error, data } = await getCitizensList();
        console.log('🚀 ~ init ~ data:', data, error);
        setError(error ?? null);
        setCitizens(data ?? []);
        setLoading(false);
    };

    useEffect(() => {
        if (loading) init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    return { loading, error, citizens };
};

useGetCitizens.propTypes = {
    web3: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired
};

export default useGetCitizens;
