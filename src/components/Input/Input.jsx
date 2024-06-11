import PropTypes from 'prop-types';

const Input = (props) => {
    if (props.type === 'textarea') {
        return <textarea className="input-textarea" rows="5" {...props} />;
    }
    return <input className="input-form" {...props} />;
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'textarea']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    className: PropTypes.string
};

export default Input;
