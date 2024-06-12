import { toast } from 'react-toastify';
const useSuccessAlert = () => {
    const successDialog = (successMessage, options = {}) => {
        return toast.success(`${successMessage}`, {
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
    return { successDialog };
};

export default useSuccessAlert;
