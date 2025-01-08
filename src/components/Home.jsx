import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-blue-100 min-h-screen'>
   
        <div id="container" className='min-h-[calc(100vh-150px)] flex justify-center items-center'>
            <div id="box" className='border border-red-900 w-96 h-auto py-3 px-4 pb-4'>
              <ol className='mt-2 flex flex-col justify-center items-center gap-2'>
                <Link to='#' className='text-blue-900 font-bold'><li>Policy Documents</li></Link>
                <Link to='#' className='text-blue-900 font-bold'><li>Unviewed Circulars</li></Link >
                <li>Today's Circular ()</li>
                <li>Current Month's Circular ()</li>
                <li>Today's Interest Related Circular ()</li>
                <li>Current Month's Interest Related Circular ()</li>
                <li>Today's Memorandum ()</li>
                <li>Current Month's Memorandum ()</li>
                <Link to='#' className='text-blue-900 font-bold'><li>Document List</li></Link>
                <Link to='/docketlistall' className='text-blue-900 font-bold'><li>Docket List</li></Link>                
                <li className='font-bold'>Current Month's Master Circular ()</li>
                <li className='font-bold'>Today's Master Circular ()</li>
              </ol>
            </div>
        </div>
    </div>
  )
}
