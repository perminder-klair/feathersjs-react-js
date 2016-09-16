import React, { PropTypes } from 'react';

const TextInputGroup = ({ label, value, onChange}) => (
    <div className="field">
        <label>{label}</label>
        <input
            type="text"
            placeholder={label}
            value={value}
            onChange={onChange}/>
    </div>
);

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
