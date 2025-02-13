//not in use


import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './filterSearch.scss';

const FilterSearch = ({ icon, label, options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');  // State to hold the selected option
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);  // Update the selected option
    onSelect(option);  // Pass the selected option to the parent component
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="filterContainer">
      <button
        ref={buttonRef}
        className={`filterButton ${isOpen ? 'active' : ''}`}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${label}-dropdown`}
        onKeyDown={handleKeyDown}
      >
        <div className="stateLayer">
          {icon && (
            <img
              src={icon}
              alt=""
              className="buttonIcon"
              aria-hidden="true"
            />
          )}
          <span className="buttonLabel">{selectedOption || label}</span>  {/* Show selected option or label */}
          <img
            src="dropdownArrow.svg"
            alt="Expand/Collapse Dropdown"
            className={`arrowIcon ${isOpen ? 'rotated' : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>

      {isOpen && (
        <ul
          ref={dropdownRef}
          className="dropdown"
          role="listbox"
          id={`${label}-dropdown`}
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              key={index}
              role="option"
              className="option"
              onClick={() => handleOptionSelect(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionSelect(option);
                }
              }}
              tabIndex={0}
              aria-selected={false} // Adjust dynamically if needed
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Define PropTypes
FilterSearch.propTypes = {
  icon: PropTypes.string, // icon should be a string (URL of the icon)
  label: PropTypes.string.isRequired, // label is required and should be a string
  options: PropTypes.arrayOf(PropTypes.string), // options should be an array of strings
  onSelect: PropTypes.func.isRequired, // onSelect is required and should be a function
};

export default FilterSearch;
