import React, { useContext } from 'react'
import { BookContext } from '../App';
import { Link, useLoaderData } from 'react-router-dom';



export function Book({Book}){
  const {bookName,author,category,tags,rating,bookId,image} = Book; 
  // console.log( tags);
  return(
    <Link to = {`/book/${bookId}`} class="border-b-8 border-l-4 hover:border-red-500 hover:bg-yellow-50 duration-500 ease-in-out hover:shadow-xl hover:scale-110 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p className='w-full h-[200px] lg:h-[300px]  flex justify-center'>
          <img class="rounded-t-lg " src={image} alt="" />
        </p>
        <p className='flex pl-2'>
         {
           tags.map(tagName => <p className='m-1 py-1 px-2 bg-green-400 text-white font-semibold rounded-xl text-xs'> {tagName}</p>)
         }
        </p>

        <div class="p-8 pl-6 pt-4">
            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bookName}</h5>
            <p class="text-red-600 mb-4 font-bold flex gap-2"><img width = {20} src="/All assets/pen-to-square-regular.svg" alt="" /> {author}</p>
           
            <div className='mt-6 font-bold flex justify-between'>
                <p className="text-xs mb-1 flex gap-1 items-center font-bold py-2 px-4 rounded-full bg-violet-200 text-violet-500"><img width = {10} src="/All assets/font-awesome-regular.svg" alt="" /> {category}</p>
                <p className=' flex gap-1 items-center'><span className='text-blue-500'>{rating}</span><img src="/All assets/star-regular.svg"  width={15}/></p>
            </div>
        </div>
    </Link>
  )
}


function Books() {

  const AllBooks = useLoaderData();
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-8 m-4 gap-4  p-2'>
      {
        AllBooks.map(item => <Book key={item.bookId} Book = {item}></Book>)
      }
    </div>
  )
}

export default Books