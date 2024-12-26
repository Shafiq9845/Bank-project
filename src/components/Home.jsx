import React from 'react'
import NavBar from './NavBar'
import Header from './Header'

export default function Home() {
  return (
    <div className='bg-blue-100 min-h-screen'>
        <div className=''>
            <Header/>
        </div>
        <div className='mt-0'>
            <NavBar/>
        </div>

        <div id="container" className='border border-black flex justify-center items-center'>
            <div id="box" className='border border-red-900 w-96 h-96 mt-20'>

            </div>
        </div>
    </div>
  )
}
