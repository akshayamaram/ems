import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='w-full overflow-x-auto h-[55%] py-5 rounded-md mt-10 flex items-center justify-start gap-5 flex-nowrap'>
      <div className='h-full w-[300px] bg-fuchsia-400 rounded-md flex-shrink-0 px-5 py-6'>
        <div className='flex justify-between items-center'>
          <h6 className='bg-red-500 font-semibold px-4 py-1 rounded text-sm'>High</h6>
          <h6 className='text-sm'>20 Oct 2024</h6>
        </div>
        <h6 className='mt-7 text-xl font-semibold'>Complete the react project</h6>
        <p className='mt-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt dicta at facilis assumenda fuga amet tenetur dolor minima? Similique </p>
      </div>
      <div className='h-full w-[300px] bg-red-400 rounded-md flex-shrink-0 px-5 py-6'>
        <div className='flex justify-between items-center'>
          <h6 className='bg-red-500 font-semibold px-4 py-1 rounded text-sm'>High</h6>
          <h6 className='text-sm'>20 Oct 2024</h6>
        </div>
        <h6 className='mt-7 text-xl font-semibold'>Complete the react project</h6>
        <p className='mt-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt dicta at facilis assumenda fuga amet tenetur dolor minima? Similique </p>
      </div>
      <div className='h-full w-[300px] bg-yellow-400 rounded-md flex-shrink-0 px-5 py-6'>
        <div className='flex justify-between items-center'>
          <h6 className='bg-red-500 font-semibold px-4 py-1 rounded text-sm'>High</h6>
          <h6 className='text-sm'>20 Oct 2024</h6>
        </div>
        <h6 className='mt-7 text-xl font-semibold'>Complete the react project</h6>
        <p className='mt-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt dicta at facilis assumenda fuga amet tenetur dolor minima? Similique </p>
      </div>
      <div className='h-full w-[300px] bg-green-400 rounded-md flex-shrink-0 px-5 py-6'>
        <div className='flex justify-between items-center'>
          <h6 className='bg-red-500 font-semibold px-4 py-1 rounded text-sm'>High</h6>
          <h6 className='text-sm'>20 Oct 2024</h6>
        </div>
        <h6 className='mt-7 text-xl font-semibold'>Complete the react project</h6>
        <p className='mt-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt dicta at facilis assumenda fuga amet tenetur dolor minima? Similique </p>
      </div>
      <div className='h-full w-[300px] bg-blue-400 rounded-md flex-shrink-0 px-5 py-6'>
        <div className='flex justify-between items-center'>
          <h6 className='bg-red-500 font-semibold px-4 py-1 rounded text-sm'>High</h6>
          <h6 className='text-sm'>20 Oct 2024</h6>
        </div>
        <h6 className='mt-7 text-xl font-semibold'>Complete the react project</h6>
        <p className='mt-3 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti incidunt dicta at facilis assumenda fuga amet tenetur dolor minima? Similique </p>
      </div>

    </div>
  )
}

export default TaskList