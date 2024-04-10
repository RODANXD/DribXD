import React from 'react'

const Checkbox = ({ checkedOption, handleCheckboxChange, option }) => {
  const isChecked = checkedOption === option;

  const handleChange = () => {
    handleCheckboxChange(isChecked ? null : option);
  };
  return (
    <>
    <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className="rounded-full appearance-none size-6 border border-gray-300 cursor-pointer checked:bg-pink-500 checked:border-transparent"
                style={{ position: "relative" }}
              />
              <style>
                {`
                    input[type="checkbox"]::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 20%;
                    transform: translate(-50%, -50%);
                    width: 0.6rem; /* Adjust the size of the tick mark */
                    height: 1rem; /* Adjust the size of the tick mark */
                    border: solid white;
                    border-width: 0 0.2rem 0.2rem 0;
                    opacity: 0; /* Initially hide the tick mark */
                    transition: opacity 0.2s ease;
                    rotate: 45deg;
                  }

                    input[type="checkbox"]:checked::after {
                    opacity: 1; /* Show the tick mark when the checkbox is checked */
                  }
  `}
              </style>
    </>
  )
}

export default Checkbox