import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

  // console.log(data)

  return (
    <div id='tasklist' className='w-full overflow-x-auto h-[55%] py-5 rounded-md mt-10 flex items-center justify-start gap-5 flex-nowrap'>
      {data.tasks.map((item, i) => {
        if(item.active) {
          return <AcceptedTask key={i} data={item}/>
        }
        if(item.newtask) {
          return <NewTask key={i} data={item} />;
        }
        if(item.completed) {
          return <CompletedTask key={i} data={item} />;
        }
        if(item.failed) {
          return <FailedTask key={i} data={item} />;
        }
      })}
    </div>
  )
}

export default TaskList