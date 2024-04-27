import React from 'react'

const SidebarItem = ({icon, text}) => {
  return (
    <div className='flex gap-5 hover:bg-[#b7aedc] rounded-lg cursor-pointer items-center p-3'>
        <img src={icon} alt={text} />
        <p className=' text-xs font-semibold'>{text}</p>
    </div>
  )
}

export default SidebarItem