import React from 'react';

const Input = ({ 
  type, 
  id, 
  name, 
  placeholder,
  value,
  onChange, 
  className = '',
}) => 
  <div>
    <input 
      type={type} 
      id={id} 
      name={name} 
      placeholder={placeholder} 
      value={value} 
      className={className}
      onChange={onChange}
    />
  </div>

export default Input;