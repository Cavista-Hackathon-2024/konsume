import React from 'react'
import SidebarItem from './SidebarItem'
import dashboard from "../../assets/dashboard.png"
import profile from "../../assets/profile.png"
import progress from "../../assets/progress.png"
import scanner from "../../assets/scanner.png"
import settings from "../../assets/settings.png"
import konsum from "../../assets/konsume.png"

const Sidebar = ({toggled, setToggled}) => {
  return (
    <div className={`h-full p-8 bg-[#DAFDC9] md:fixed left-0 min-w-[250px] top-0  ${toggled ? 'left-0' : 'md:left-0 left-[-300px]'} absolute z-50 transition-all`}>
        <div className='h-full flex flex-col gap-9 items-start'>
            <h1 className=' font-bold text-3xl mb-4'>Konsume</h1>
            <SidebarItem text="Dashboard" icon={dashboard} />
            <SidebarItem text="Profile" icon={profile} />
            <SidebarItem text="Progress Tracker" icon={progress} />
            <SidebarItem text="Scanner" icon={scanner} />
            <SidebarItem text="Settings" icon={settings} />
            <SidebarItem text="Logout" icon={profile} />
            <img src={konsum} alt="konsume" className='w-[130px]'/>
        </div>
    </div>
  )
}

export default Sidebar