import React, { PropTypes } from 'react';

const TextAreaGroup = ({ label, value, onChange}) => (
    <div className="field">
        <label>{label}</label>
        <textarea
            type="text"
            placeholder={label}
            value={value}
            onChange={onChange}/>
    </div>
);

TextAreaGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextAreaGroup;
