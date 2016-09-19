import React, { PropTypes } from 'react';

const TextInputGroup = (props) => {
    const { label, value, onChange, type } = props;

    return (
        <div className="field">
            <label>{label}</label>
            <input
                type={type}
                placeholder={label}
                value={value}
                onChange={onChange}/>
        </div>
    )
};

TextInputGroup.propTypes = {
    type: 'text'
};

TextInputGroup.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
