import React from 'react'
import { Link } from 'react-router-dom'

function Developer() {
  return (
    <div className='text-center text-4xl font-bold my-16'>
        <p className='text-gray-500 text-xl'>Developed By</p>
        <p className='mt-4'> Khalid Abdullah</p>
        <p><a href = "mailto:iamkhalidabd@gmail.com" className='text-blue-600 underline text-sm mt-4'>iamkhalidabd@gmail.com</a></p>
        <a href = 'https://github.com/khalid586' className='text-blue-600 underline text-sm mt-4'>github.com/khalid586</a>
    </div>
  )
}

export default Developer