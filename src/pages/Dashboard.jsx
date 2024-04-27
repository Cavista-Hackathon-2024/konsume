import React, { useContext } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DashboardHead from '../components/dashboard/DashboardHead'
import DashboardBody from '../components/dashboard/DashboardBody'
import SetupContext from '../context/SetupContext'

const Dashboard = () => {
    const {userGoals, userDiseases} = useContext(SetupContext);
  return (
    <div>
        <Sidebar />
        <div className='ml-[280px] mr-[20px] gap-5 flex flex-col'>
            <DashboardHead />
            <DashboardBody />
        </div>
    </div>
  )
}

export default Dashboard