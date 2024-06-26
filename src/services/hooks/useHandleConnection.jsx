import { useState } from 'react';

import useStore from '@/context/useStore';
import useErrorAlert from './useErrorAlert';
import useSuccessAlert from './useSuccessAlert';

const useHandleConnection = () => {
    const [loading, setLoading] = useState(false);

    const { isConnected, connectWallet, disconnectWallet } = useStore();

    const { errorDialog } = useErrorAlert();

    const { successDialog } = useSuccessAlert();

    const handleConnection = async () => {
        if (isConnected) return await disconnectWallet();
        setLoading(true);
        const { error } = await connectWallet();
        setLoading(false);
        if (error) return errorDialog(error, error);
        return successDialog('Wallet Connected');
    };

    return { handleConnection, loading };
};

export default useHandleConnection;
