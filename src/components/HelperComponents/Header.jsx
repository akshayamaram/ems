import React, { useState } from 'react'

const Header = (props) => {

  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h3 className='text-2xl'>Hello , <br /> <span className='font-bold text-3xl'>username 👋</span></h3>
      <button className='px-8 py-2 bg-red-400 rounded-sm custom-shadow-logout font-medium cursor-pointer' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Header 