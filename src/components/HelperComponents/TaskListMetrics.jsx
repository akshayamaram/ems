import React from 'react'

const TaskListMetrics = ({data}) => {
  return (
    <div className='flex mt-10 gap-5 justify-between overflow-hidden'>
      <div className='py-6 px-9 rounded-md w-[45%] bg-yellow-300 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.newtask}</h2>
        <h3 className='text-2xl font-medium'>New Tasks</h3>
      </div>
      <div className='py-6 px-9 rounded-md w-[45%] bg-green-300 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='py-6 px-9 rounded-md w-[45%] bg-blue-300 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-2xl font-medium'>Active Tasks</h3>
      </div>
      <div className='py-6 px-9 rounded-md w-[45%] bg-red-300 cursor-pointer'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default TaskListMetrics