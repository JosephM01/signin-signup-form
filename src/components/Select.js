import React from 'react';

const Select = ({ 
  name,
  required,
  options,
  placeholder,
  onChange,
}) =>
  <div>
    <select name={name} required={required} onChange={onChange}>
      <option hidden >{placeholder}</option>
        { options.map((item) => 
          <option key={item.code || item.objectID}>{item.name}</option>
        )}
    </select>
  </div>

export default Select;