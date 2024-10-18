import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className=''>
        <form className='flex flex-col items-center justify-center gap-4'>
          <input className='border-2 border-green-600 rounded-lg px-8 py-3 outline-none text-lg custom-shadow-input focus:outline-none' type="email" placeholder='Enter your email... ' />
          <input className='border-2 border-green-600 rounded-lg px-8 py-3 outline-none text-lg custom-shadow-input focus:outline-none' type="password" placeholder='Enter your password...' />
          <button className='bg-green-700 rounded-sm px-7 py-2 outline-none mt-3'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login