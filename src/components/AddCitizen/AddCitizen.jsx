import { useState } from 'react';
import PropTypes from 'prop-types';
import InputForm from '../InputForm/InputForm';
import useAddCitizen from '../../services/Metamask/useAddCitizen';
import Loader from '../Loader/Loader';

const AddCitizen = (props) => {
    const { web3, account } = props;
    console.log('🚀 ~ AddCitizen ~ account:', account);

    const [citizen, setCitizen] = useState({
        name: '',
        age: '',
        city: '',
        someNote: ''
    });

    const { loading, addCitizen } = useAddCitizen({ web3, account });

    const handleAddCitizen = () => {
        console.log('🚀 ~ handleAddCitizen ~ citizen:', {
            ...citizen,
            age: parseInt(citizen.age)
        });
        addCitizen({ ...citizen, age: parseInt(citizen.age) });
    };

    const handleChange = (e, name) => {
        setCitizen({ ...citizen, [name]: e });
    };

    return (
        <div>
            <InputForm
                name="Name"
                isRequired
                value={citizen.name}
                onChange={(e) => handleChange(e, 'name')}
            />
            <InputForm
                name="Age"
                type="number"
                isRequired
                value={citizen.age}
                onChange={(e) => handleChange(e, 'age')}
            />
            <InputForm
                name="City"
                isRequired
                value={citizen.city}
                onChange={(e) => handleChange(e, 'city')}
            />
            <InputForm
                name="Notes"
                type="textarea"
                isRequired
                value={citizen.someNote}
                onChange={(e) => handleChange(e, 'someNote')}
            />
            <div>
                {loading ? (
                    <Loader />
                ) : (
                    <button onClick={handleAddCitizen}>Add Citizen</button>
                )}
            </div>
        </div>
    );
};

AddCitizen.propTypes = {
    web3: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired
};

export default AddCitizen;
