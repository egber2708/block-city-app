import { toast } from 'react-toastify';

const useErrorAlert = () => {
    const errorDialog = (errormessage, errorMessage, options = {}) => {
        if (errorMessage) console.error(errorMessage);

        return toast.error(`${errormessage}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            ...options
        });
    };

    return { errorDialog };
};

export default useErrorAlert;
