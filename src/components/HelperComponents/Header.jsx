import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h3 className='text-2xl'>Hello , <br /> <span className='font-bold text-3xl'>Stella 👋</span></h3>
      <button className='px-8 py-2 bg-red-400 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header