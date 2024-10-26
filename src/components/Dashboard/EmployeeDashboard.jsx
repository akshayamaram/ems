import React from 'react'
import Header from '../HelperComponents/Header'
import TaskListMetrics from '../HelperComponents/TaskListMetrics'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  // console.log(data) 

  return (
    <div className='p-10 bg-[#242424] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListMetrics data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard