import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import ScannerHead from '../components/scanner/ScannerHead'
import ScannerBody from '../components/scanner/ScannerBody'

const Scanner = () => {
  return (
    <div>
        <Sidebar />
        <div className='ml-[280px] mr-[20px] gap-5 flex flex-col'>
            <ScannerHead />
            {/* <DashboardBody /> */}
            <ScannerBody />
        </div>
    </div>
  )
}

export default Scanner