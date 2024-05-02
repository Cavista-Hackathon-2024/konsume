import React, { useContext, useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashboardHead from '../components/dashboard/DashboardHead'
import DashboardBody from '../components/dashboard/DashboardBody'
import SetupContext from '../context/SetupContext'
import DashboardNav from '../components/dashboard/DashboardNav'

const Dashboard = () => {
    const {userGoals, userDiseases} = useContext(SetupContext);
    const [toggled, setToggled] = useState(false);
  return (
    <div>
        <Sidebar toggled={toggled} setToggled={setToggled} />
        <div className={`${toggled ? '' : "md:ml-[280px]"} gap-5 flex flex-col px-5`}>
          <DashboardNav toggled={toggled} setToggled={setToggled}/>
          <DashboardHead />
          <DashboardBody />
        </div>
    </div>
  )
}

export default Dashboard