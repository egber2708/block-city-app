import { useState } from 'react';
import Web3 from 'web3';
import { CHAIN_ID, NET_RPC } from '@utils/constans';

const useConnectWallet = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);

    const [isConnected, setIsConnected] = useState(false);

    const windowReload = (chaingId) => {
        if (chaingId !== CHAIN_ID) return window.location.reload();
    };

    const setAccountConfiguration = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
        if (!accounts?.length)
            return { error: 'No accounts found', account: null };
        setAccount(accounts[0]);
        return { error: null, account: accounts[0] };
    };

    const setWalletConfiguration = async (web3Instance) => {
        const { error, account } = setAccountConfiguration();
        setWeb3(web3Instance);
        setIsConnected(true);
        return { error, data: { web3: web3Instance, account } };
    };

    const connectWallet = async () => {
        if (!window.ethereum) return { error: 'No Wallet found' };
        try {
            const web3Instance = new Web3(window.ethereum ?? NET_RPC);
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CHAIN_ID }]
            });
            const {
                error,
                data: { web3, account }
            } = await setWalletConfiguration(web3Instance);
            window.ethereum.on('accountsChanged', setAccountConfiguration);
            window.ethereum.on('chainChanged', windowReload);
            return { error, data: { web3, account } };
        } catch (error) {
            return { error: error.message };
        }
    };

    const disconnectWallet = async () => {
        if (!isConnected) return { error: 'Wallet already disconected' };
        setWeb3(null);
        setAccount(null);
        setIsConnected(false);
    };

    return { isConnected, connectWallet, disconnectWallet, web3, account };
};

export default useConnectWallet;
