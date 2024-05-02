import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import ScannerHead from '../components/scanner/ScannerHead'
import ScannerBody from '../components/scanner/ScannerBody'
import DashboardNav from '../components/dashboard/DashboardNav'

const Scanner = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <Sidebar toggled={toggled} setToggled={setToggled} />
      <div className={`${toggled ? '' : "md:ml-[280px]"} gap-5 flex flex-col px-5`}>
        <DashboardNav toggled={toggled} setToggled={setToggled} />
        <ScannerHead />
        {/* <DashboardBody /> */}
        <ScannerBody />
      </div>
    </div>
  )
}

export default Scanner