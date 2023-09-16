'use client'
import { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('2023-2024');

    const options = [
        { value: '2023-2024', label: '2023-2024' },
        { value: '2022-2023', label: '2022-2023' },
        { value: '2021-2022', label: '2021-2022' },
    ];

    const handleOptionClick = (value, label) => {
        setSelectedOption(label);
        setIsOpen(false);
    };

    return (
        <div className="relative mt-4">
            <div className="relative inline-block text-left">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative pr-8 mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white cursor-pointer rounded-lg py-1.5 pl-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    id="headlessui-listbox-button-:R1l56:"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    data-headlessui-state=""
                >
                    <span className="block truncate">{selectedOption}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ml-2 pr-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
            >
              <path
                  fillRule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clipRule="evenodd"
              ></path>
            </svg>
          </span>
                </button>
                {isOpen && (
                    <ul
                        className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="headlessui-listbox-button-:R1l56:"
                        style={{ display: isOpen ? 'block' : 'none' }} // Add this line
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option.value, option.label)}
                                className={`${
                                    selectedOption === option.label ? 'bg-blue-100' : ''
                                } cursor-pointer select-none py-2 pl-3 pr-9`}
                                role="option"
                                tabIndex={index}
                                aria-selected={selectedOption === option.label}

                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default DropdownMenu;


