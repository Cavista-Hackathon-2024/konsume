import React from 'react';
import { useContext, useEffect } from 'react';
import SetupContext from '../../context/SetupContext';

const GoalCheckbox = ({ label,data }) => {
  const {userGoal, setUserGoal} = useContext(SetupContext);

  const getValue = (e) => {
    setUserGoal(e.target.value);
  }
  useEffect(() => {
    
  }, [userGoal])
  
  return (
    <div className="">
      <div className="flex items-center me-4">
        <input 
        id="inline-radio" 
        type="radio" 
        onChange={getValue} 
        value={label} 
        name="inline-radio-group" 
        checked={userGoal === label}
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
        <label for="inline-radio" class="text-lg text-gray-600 ml-2 font-bold font-jakarta">{label}</label>
      </div>
    </div>
  )
}

export default GoalCheckbox