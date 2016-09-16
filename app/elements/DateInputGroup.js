import React, { PropTypes } from 'react';

const DateInputGroup = ({ label, value, onChange}) => (
    <div className="field">
        <label>{label}</label>
        <input
            type="date"
            placeholder={label}
            value={value}
            onChange={onChange}/>
    </div>
);

DateInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DateInputGroup;