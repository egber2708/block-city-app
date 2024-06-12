import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ABI_CITIZEN_CONTRACT } from '../../utils/abiContracts';
import { CONTRACT_ADDRESS } from '../../utils/constans';
import useErrorAlert from '@services/hooks/useErrorAlert';
import useSuccessAlert from '@services/hooks/useSuccessAlert';
import { citizenDto } from '@/models/dto';

const useSubscribeRegisterEvent = (props) => {
    const { web3 } = props;

    const [transactionsNewEvents, setTransactionsNewEvents] = useState([]);

    const { errorDialog } = useErrorAlert();
    const { successDialog } = useSuccessAlert();

    const subscribeRegisterEvent = useCallback(async () => {
        const cityContractInstance = new web3.eth.Contract(
            ABI_CITIZEN_CONTRACT,
            CONTRACT_ADDRESS
        );

        cityContractInstance?.events
            ?.Citizen()
            ?.on('data', (event) => {
                const newTransaction = {
                    hash: event.transactionHash,
                    id: event.returnValues.id,
                    age: event.returnValues.age,
                    city: event.returnValues.city,
                    name: event.returnValues.name,
                    blockNumber: event.blockNumber
                };
                const citizen = citizenDto(newTransaction);
                setTransactionsNewEvents((prevTransactionsNewEvents) => [
                    citizen,
                    ...prevTransactionsNewEvents
                ]);
                successDialog('New User Register');
            })
            ?.on('error', (error) => {
                errorDialog('Error on event', error?.message);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [web3.eth.Contract]);

    useEffect(() => {
        let isMounted = true;
        let citizenSubscription;
        const subscribe = async () => {
            citizenSubscription = await subscribeRegisterEvent(isMounted);
        };
        subscribe();

        return () => {
            isMounted = false;
            if (citizenSubscription) {
                citizenSubscription.unsubscribe(() => {});
            }
        };
    }, [subscribeRegisterEvent]);

    return { transactionsNewEvents };
};

useSubscribeRegisterEvent.propTypes = {
    web3: PropTypes.object.isRequired
};

export default useSubscribeRegisterEvent;
