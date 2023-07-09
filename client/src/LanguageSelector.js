import React, { useState } from 'react';
import './Chat.css';


const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedLanguage(option);
    setIsOpen(false);
  };

  return (
    <div>
    <div>
      <button onClick={toggleDropdown} className='Language-button'>Languages</button>
      </div>
      {selectedLanguage && <p className='Selected-language'>Selected: {selectedLanguage}</p>}
      <div>
      {isOpen && (
        <div className='Language-options'>
          <button onClick={() => handleOptionClick('English')} className='Option-button'>English</button>
          <button onClick={() => handleOptionClick('Spanish')} className='Option-button'>Spanish</button>
          <button onClick={() => handleOptionClick('Chinese')} className='Option-button'>Chinese</button>
          <button onClick={() => handleOptionClick('Japanese')} className='Option-button'>Japanese</button>
          <button onClick={() => handleOptionClick('Indonisean')} className='Option-button'>Indonisean</button>

        </div>
      )}
    </div>
    </div>
  );
};

export default LanguageSelector;
