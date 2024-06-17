import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputForm } from '@global';
import useAddCitizen from '@services/Metamask/useAddCitizen';
import { citizenDto } from '@/models/dto';

const AddCitizen = (props) => {
    const { web3, account, actionCompleate = ()=>{} } = props;

    const [error, setError] = useState('');

    const [citizen, setCitizen] = useState({
        name: '',
        age: '',
        city: '',
        someNote: ''
    });

    const citizenForm =  [
        {type : 'text', key: 'name' , required: true , placeholder: '', label: 'Name' },
        {type : 'number' , key: 'age', required: true, placeholder: '', label: 'Age' },
        {type : 'text' , key: 'city', required: true, placeholder: '', label: 'City' },
        {type : 'textarea' , key: 'someNote', required: false , placeholder: '', label: 'Notes' }
    ]

    const { loading, addCitizen } = useAddCitizen({ web3, account });

    const handleAddCitizen = async () => {
        if (loading) return null ; 
        setError('')
        try {
            const createCitizen = citizenDto({ id: '1', ...citizen });
            const {error} = await addCitizen(createCitizen);
            if ( !error ) actionCompleate()
        } catch (error) {
            setError(error.message)
        }
    };

    const handleChange = (e, name) => {
        setCitizen({ ...citizen, [name]: e });
    };

    const getErrorMsg =  (key)=>{
        if (error && error.includes(`"${key}"`)) return error
        return ''
    }

    return (
        <div>
            {
                (citizenForm.map(item=><InputForm
                    key={item.label}
                           name={item.label}
                           isRequired = {item.required}
                           value={citizen[item.key]}
                           onChange={(e) => handleChange(e, item.key)}
                           error={getErrorMsg(item.key)}
                           type = {item.type}
                           placeholder = {item.placeholder}
                       />))
            }
           
            <div>
                <button onClick={handleAddCitizen}> {loading ?'... Loading ' :'Add Citizen' } </button>
            </div>
        </div>
    );
};

AddCitizen.propTypes = {
    web3: PropTypes.object.isRequired,
    account: PropTypes.string.isRequired,
    actionCompleate : PropTypes.func
};

export default AddCitizen;
