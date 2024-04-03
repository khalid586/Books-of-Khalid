import React from 'react'
import { Link } from 'react-router-dom';

function SigleItem({Book}) {
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = Book;
  return (
      <div className="bg-green-50 hover:border-red-500 hover:bg-yellow-100 hover:scale-110 duration-500 ease-in-out  mt-4 px-2 pt-2 md:px-12 justify-center flex flex-col items-center border-gray-200 rounded-3xl md:flex-row  dark:border-gray-700">
          <img className="object-cover w-auto rounded-t-lg md:h-auto md:w-20 md:rounded-none md:rounded-s-lg" width={10} src = {image} alt=""/>
          <div className="mp-4 pl-2 md:pl-4  flex-col flex items-start">
              <h5 className="md:mb-2 text-lg font-bold tracking-tight text-gray-900">{bookName}</h5>
              <p className="md:mb-3 text-sm text-left font-semibold text-gray-500 dark:text-gray-400">{review}</p>
              <p className='md:flex p-2 items-center gap-4'>
                <p className='font-bold text-sm flex gap-1'><img width={20} src="/All assets/tags-solid.svg" alt="" />
                  {
                    tags.map(tagName => <p className='p-2 bg-green-100 text-green-500 font-bold rounded-xl text-xs'> {tagName}</p>)
                  }
                </p>
              </p>
              <div className='md:flex gap-4 text-sm font-bold text-black my-2 mx-2'>
                <p className='hidden md:flex gap-2 items-center'><img width={15} src="/All assets/print-solid.svg" alt="" />  {publisher}</p>
                <div className='flex gap-4'>
                  <p className='flex gap-2 items-center'><img width={15} src="/All assets/file-lines-regular.svg" alt="" />  {totalPages}</p>
                  <p className=' text-sm font-bold text-gray-500 my-1 flex gap-2'> <img width={20} src="/All assets/clock-regular.svg" alt="" /> {yearOfPublishing}</p>
                </div>
              </div>
              <div className=' w-full md:flex-row flex justify-center items-center flex-col gap-1 text-sm md:gap-3 mt-2 mb-2'>
                  <div className='flex gap-2 w-full md:w-auto mb-2'>
                        <p className='p-2 px-4 font-bold bg-blue-200 text-blue-600 rounded-3xl flex gap-1 items-center justify-between'><img className='md:hidden' src="/All assets/font-awesome-regular.svg" width={15} alt="" /><span className='md:block hidden'>Category:</span> {category}</p>
                        <p className='p-2 px-4 font-bold bg-yellow-200 text-yellow-900 rounded-3xl flex gap-1 items-center'><span className=''>Rating</span>{rating}<img className='' src="/All assets/star-regular.svg" width={15} alt="" /></p>
                  </div>
                  <p className='flex justify-center'>
                    <Link to = {`/book/${bookId}`} className='font-bold my-1 mb-3 p-2 px-4 btn rounded-3xl '>View Details</Link>
                  </p>
              </div>
          </div>
      </div>
  )
}

export default SigleItem