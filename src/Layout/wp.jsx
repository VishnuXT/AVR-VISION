import React from 'react';
import './Style.css';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <a className='pointer' onClick={handleClick}>
        +91 92079 87475
    </a>
    // <button onClick={handleClick}>
      
    // </button>
  );
};

export default WhatsAppButton;