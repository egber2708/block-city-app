import { useState } from 'react';

import propTypes from 'prop-types';
import { CONTRACT_ADDRESS } from '@utils/constans';
import { ABI_CITIZEN_CONTRACT } from '@utils/abiContracts';
import useErrorAlert from '../hooks/useErrorAlert';
import useSuccessAlert from '../hooks/useSuccessAlert';

const useAddCitizen = ({ web3, account }) => {
    const [loading, setLoading] = useState(false);

    const { errorDialog } = useErrorAlert();
    const { successDialog } = useSuccessAlert();

    const addCitizen = async ({ name, age, city, someNote }) => {
        setLoading(true);
        try {
            const citizenContract = new web3.eth.Contract(
                ABI_CITIZEN_CONTRACT,
                CONTRACT_ADDRESS
            );

            await citizenContract.methods
                .addCitizen(Number(age), city, name, someNote)
                .send({ from: account });

            successDialog('Citizen added');
        } catch (error) {
            errorDialog('Error on add citizen', error?.message);
        }
        setLoading(false);
    };

    return { loading, addCitizen };
};

useAddCitizen.propTypes = {
    web3: propTypes.object.isRequired
};
export default useAddCitizen;
