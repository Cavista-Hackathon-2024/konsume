import React from 'react'
import SetupContext from '../../context/SetupContext';
import {useContext} from "react";

const HealthCheckboxes = ({label}) => {
    const {userDiseases, setUserDiseases} = useContext(SetupContext);
    const handleCheckbox = (e) => {
        const checkboxValue = e.target.value;
        const isChecked = e.target.checked;
    
        // If checkbox is checked, add its value to the selectedCheckboxes array
        if (isChecked) {
          setUserDiseases(prevState => [...prevState, checkboxValue]);
        } else { // If checkbox is unchecked, remove its value from the selectedCheckboxes array
          setUserDiseases(prevState => prevState.filter(item => item !== checkboxValue));
        }
        console.log(userDiseases);
    }
  return (
    <label for="checkbox-in-form" class="flex p-3 cursor-pointer  rounded-md text-sm w-fit items-center">
        <input 
        onChange={handleCheckbox}
        checked={userDiseases.includes(label)}
        type="checkbox" 
        value={label}
        class="w-5 h-5 appearance-none cursor-pointer border border-[#FFC501] rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-[#FFC501] checked:bg-[#FFC501]" id="checkbox-in-form" />
        <span class=" text-lg text-gray-600 ml-2 font-bold font-jakarta ">{label}</span>
      </label>
  )
}

export default HealthCheckboxes;