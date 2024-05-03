import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ icon, text }) => {
  return (
    <Link to={`/${text}`}>
      <div className='flex gap-5 hover:bg-[#b7aedc] rounded-lg cursor-pointer items-center p-3'>
        <img src={icon} alt={text} />
        <p className=' text-xs font-semibold'>{text}</p>
      </div>
    </Link>
  )
}

export default SidebarItem