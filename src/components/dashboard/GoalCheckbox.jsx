import React from 'react'


const GoalCheckbox = ({ label}) => {
  function toggleCheckbox() {
    var checkbox = document.getElementById("myCheckbox");
    checkbox.checked = !checkbox.checked;
  }
  return (
    <div className="">
      <label for="checkbox-in-form" class="flex p-3 cursor-pointer  rounded-md text-sm w-fit items-center">
        <input type="checkbox" class="w-5 h-5 appearance-none cursor-pointer border border-[#FFC501] rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-[#FFC501] checked:bg-[#FFC501]" id="checkbox-in-form" />
        <span class=" text-lg text-gray-600 ml-2 font-bold font-jakarta ">{label}</span>
      </label>
    </div>
  )
}

export default GoalCheckbox