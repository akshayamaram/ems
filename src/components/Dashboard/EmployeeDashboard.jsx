import React from 'react'
import Header from '../HelperComponents/Header'
import TaskListMetrics from '../HelperComponents/TaskListMetrics'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#242424] h-screen'>
      <Header/>
      <TaskListMetrics/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard