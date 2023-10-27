import React from "react";

const ExpenceFillter = ({ onChange }) => {
    return (
        <select
            className='form-control'
            name='category'
            id='category'
            onChange={(evt) => onChange(evt.target.value)}>
            <option value=''>All categories</option>
            <option value='groceries'>Groceries</option>
            <option value='utilities'>Utilities</option>
            <option value='entertainment'>Entertainment</option>
        </select>
    );
};

export default ExpenceFillter;
