import Web3 from 'web3';

const useGetBalance = () => {
    const getBalance = async (web3, account) => {
        if (!web3) return;
        const balance = await web3.eth.getBalance(account);
        return Web3.utils.fromWei(balance, 'ether');
    };
    return { getBalance };
};

export default useGetBalance;
