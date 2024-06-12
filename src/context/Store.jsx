import { createContext, useEffect } from 'react';

import PropTypes from 'prop-types';

import useConnectWallet from '@services/Metamask/useConnectWallet';
import useGetBalance from '@services/Metamask/useGetBalance';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const StoreContext = createContext();

function StoreProvider({ children }) {
    const { isConnected, connectWallet, disconnectWallet, web3, account } =
        useConnectWallet();

    const { getBalance } = useGetBalance();

    useEffect(() => {
        if (isConnected && web3) {
            console.log('Is Connected');
        } else {
            console.log('Is Disconnected');
        }
    }, [isConnected, web3]);

    return (
        <StoreContext.Provider
            value={{
                web3,
                isConnected,
                account,
                getBalance,
                connectWallet,
                disconnectWallet
            }}
        >
            {children}
            <ToastContainer />
        </StoreContext.Provider>
    );
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default StoreProvider;
