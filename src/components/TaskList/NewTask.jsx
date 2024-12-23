import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full w-[300px] bg-yellow-400 rounded-md flex-shrink-0 px-5 py-6">
      <div className="flex justify-between items-center">
        <h6 className="bg-red-500 font-semibold px-4 py-1 rounded text-sm">
          {data.category}
        </h6>
        <h6 className="text-sm">{data.date}</h6>
      </div>
      <h6 className="mt-7 text-xl font-semibold">{data.title}</h6>
      <p className="mt-3 text-sm">{data.description}</p>
      <div className="flex justify-center items-center mt-10">
        <button className="bg-green-400 font-semibold px-6 py-2 rounded text-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default NewTask