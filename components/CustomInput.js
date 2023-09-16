
import React from 'react';

const CustomInput = ({ name, id, maxLength, value, onChange }) => {
    return (
        <input
            type="number"
            name={name}
            id={id}
            maxLength={maxLength}
            className="false focus:ring-app focus:border-app block w-full h-12 pr-12 sm:text-sm border-slate-200 rounded-lg focus:shadow-app/75 border"
            placeholder="0"
            aria-describedby="price-currency"
            min="0"
            max="10000000"
            //value={value}
            onChange={onChange}
        />
    );
};

export default CustomInput;
