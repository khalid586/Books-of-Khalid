import React, { useContext } from 'react'
import { BookContext } from '../App'
import { Link, useLoaderData } from 'react-router-dom'


function Banner() {
  const AllBooks = useLoaderData();

  // white
  const bookIndx = [0,1,3];
  let randomNumber = Math.floor(Math.random() * 3);
  randomNumber = bookIndx[randomNumber];

  const {bookId,image,bookName} = AllBooks[randomNumber];
        {/* this is banner - {AllBooks.length}
      <Link to = '/listed_books'>Listed Books</Link>
      <Link to = {`/book/${bookId}`}>click</Link> */}

  return (
    <div className='bg-green-100 hover:bg-yellow-100 ease-in-out duration-500 flex justify-between my-4 mx-4 lg:mx-10 rounded-xl p-4'>
      <div className='p-2 flex flex-col justify-center items-center gap-8'>
        <p className='text-sm md:text-2xl lg:text-4xl xl:text-4xl text-center font-extrabold'>Books to freshen up your bookshelf</p>
        <Link to = '/listed_books' className='md:w-1/3 text-center rounded-xl p-2 bg-black text-white font-semibold'>View List</Link>
      </div>
    
      <div className=''>
        <Link to = {`/book/${bookId}`} className='h-[150px] w-[300px]'>
          {/* <img className='' src="/All assets/arrow-pointer-solid.svg" width={20} alt="" /> */}
          <img className = "m-4 hover:scale-150   duration-500 ease-in-out" src={image} width= "300px" height = "150px" alt="" />
          <p></p>
          <p className='text-center font-bold md:text-lg flex gap-2 justify-center'><img src="/All assets/eye-regular.svg" width={20} alt="" /> <span className='text-red-500 '>{bookName}</span></p>
        </Link>
      </div>
    </div>
    
  )
}

export default Banner