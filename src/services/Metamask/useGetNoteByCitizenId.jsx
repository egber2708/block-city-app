import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ABI_CITIZEN_CONTRACT } from '../../utils/abiContracts';
import { CONTRACT_ADDRESS } from '../../utils/constans';

const useGetNoteByCitizenId = (props) => {
    const { web3, id } = props;

    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState('');
    const [error, setError] = useState(null);

    const getNoteByCitizenId = useCallback(
        async (isMounted) => {
            try {
                isMounted && setLoading(true);
                const citizenContractInstance = new web3.eth.Contract(
                    ABI_CITIZEN_CONTRACT,
                    CONTRACT_ADDRESS
                );
                const note = await citizenContractInstance.methods
                    .getNoteByCitizenId(id)
                    .call();
                isMounted && setNote(note);
            } catch (error) {
                isMounted && setError(error.message);
            } finally {
                isMounted && setLoading(false);
            }
        },
        [id, web3]
    );

    useEffect(() => {
        let isMounted = true;
        getNoteByCitizenId(isMounted);

        return () => {
            isMounted = false;
        };
    }, [getNoteByCitizenId]);

    return { loading, note, error };
};

useGetNoteByCitizenId.propTypes = {
    web3: PropTypes.object.isRequired
};

export default useGetNoteByCitizenId;
