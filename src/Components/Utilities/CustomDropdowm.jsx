import React, { useState } from 'react';
import '../../Assets/CSS/Global.css'; // Create this CSS file for styling

// react icons
import { IoMdArrowDropdown } from 'react-icons/io'

const CustomDropdown = ({ options, labelName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col items-start justify-center gap-y-1.5 w-full'>
      <label className='text-md text-normal text-[#000000c7]' htmlFor="">{labelName}</label>
      <div className="custom-dropdown py-0.5 px-1 flex items-center justify-center w-full" style={{ border: '2px solid #0000002e' }}>
        <div className='text-md text-normal outline-none py-0.5 px-1.5 rounded-sm text-[#0000006b] w-full' onClick={toggleDropdown}>
          {selectedOption ? selectedOption.label : `${options[0].label}`}
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option) => (
              <li key={option.value} onClick={() => selectOption(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default CustomDropdown;
