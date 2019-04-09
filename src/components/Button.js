import React from 'react';

const Button = ({ 
    type,
    onClick,
    children, 
    className = '', 
  }) =>
    <div>
      <button 
        type={type} 
        className={className} 
        onClick={onClick}
      >
        { children }
      </button>
    </div>

export default Button;