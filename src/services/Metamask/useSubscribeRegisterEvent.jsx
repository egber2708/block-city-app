import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ABI_CITIZEN_CONTRACT } from '../../utils/abiContracts';
import { CONTRACT_ADDRESS, toastConfig } from '../../utils/constans';
import { toast } from 'react-toastify';

const useSubscribeRegisterEvent = (props) => {
    const { web3 } = props;

    const [transactionsNewEvents, setTransactionsNewEvents] = useState([]);

    const subscribeRegisterEvent = useCallback(async () => {
        const cityContractInstance = new web3.eth.Contract(
            ABI_CITIZEN_CONTRACT,
            CONTRACT_ADDRESS
        );

        cityContractInstance?.events
            ?.Citizen()
            ?.on('data', (event) => {
                console.log('🚀 ~ .on ~ event:', event);
                const newTransaction = {
                    hash: event.transactionHash,
                    id: event.returnValues.id,
                    age: event.returnValues.age,
                    city: event.returnValues.city,
                    name: event.returnValues.name,
                    blockNumber: event.blockNumber
                };
                setTransactionsNewEvents((prevTransactionsNewEvents) => [
                    newTransaction,
                    ...prevTransactionsNewEvents
                ]);
                toast.success('New User Register', {
                    ...toastConfig
                });
            })
            ?.on('error', (error) => {
                console.error('Error on event', error);
                toast.error('Error on event', {
                    ...toastConfig
                });
            });
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
