import { useState } from 'react';
import PropTypes from 'prop-types';
import { voidFunction } from '../../utils/constans';

import './inputform.scss';
import Input from '../Input/Input';

const InputForm = (props) => {
    const {
        name = 'name',
        type = 'text',
        lineForm = false,
        onChange = voidFunction,
        value,
        isRequired,
        error = ''
    } = props;

    const [inputValue, setInputValue] = useState(value);

    const getClassName = () => {
        return `input-form-container ${lineForm ? 'line-form' : ''}`;
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className={getClassName()}>
            <label htmlFor={name}>
                {name}
                {isRequired && <span className="required">*</span>} :
            </label>
            <Input
                id={name}
                type={type}
                name={name}
                value={inputValue}
                onChange={handleChange}
            />
            {error && <p className="error-message"> {error} </p>}
        </div>
    );
};

InputForm.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'textarea']),
    lineForm: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    isRequired: PropTypes.bool,
    error: PropTypes.string
};

export default InputForm;
