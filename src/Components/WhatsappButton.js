// src/Components/WhatsAppButton.js
import React from 'react';
import '../style/WhatsappButton.css';

function WhatsappButton() {
  const handleClick = () => {
    window.open('https://wa.me/256751120022', '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Chat on WhatsApp">
      <span className="whatsapp-icon">💬</span>
    </button>
  );
}

export default WhatsappButton;