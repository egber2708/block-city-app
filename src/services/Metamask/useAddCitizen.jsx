import { useState } from 'react';

import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { CONTRACT_ADDRESS, toastConfig } from '../../utils/constans';
import { ABI_CITIZEN_CONTRACT } from '../../utils/abiContracts';

const useAddCitizen = ({ web3, account }) => {
    const [loading, setLoading] = useState(false);

    const addCitizen = async ({ name, age, city, someNote }) => {
        console.log(
            '🚀 ~ addCitizen ~ name, age, city, someNote:',
            name,
            age,
            city,
            someNote,
            account
        );
        setLoading(true);
        try {
            const citizenContract = new web3.eth.Contract(
                ABI_CITIZEN_CONTRACT,
                CONTRACT_ADDRESS
            );
            console.log('🚀 ~ addCitizen ~ citizenContract:', citizenContract);

            await citizenContract.methods
                .addCitizen(Number(age), city, name, someNote)
                .send({ from: account });

            toast.success('Citizen added', {
                ...toastConfig
            });
        } catch (error) {
            console.error('Error on add citizen', error);
            toast.error('Error on add citizen', {
                ...toastConfig
            });
        }
        setLoading(false);
    };
    console.log('🚀 ~ addCitizen ~ account:', account);
    console.log('🚀 ~ addCitizen ~ account:', account);
    console.log('🚀 ~ addCitizen ~ account:', account);

    return { loading, addCitizen };
};

useAddCitizen.propTypes = {
    web3: propTypes.object.isRequired
};
export default useAddCitizen;
