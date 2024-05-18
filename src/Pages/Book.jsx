import React, { useContext } from 'react'
import { BookContext } from '../App';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const notify = (msg, type) => type == 0 ? toast.success(msg): type == 2? toast.error(msg):  toast.warn(msg);

function BookItem({book}){
  const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  console.log(image)
  const {readinglistHandler,wishlistHandler} = useContext(BookContext);

  function readBtn(){
    if(readinglistHandler(bookId)){notify(`${bookName} added to readlist`,0);}
    else{notify(`${bookName} already added to readlist`,2);}
  }

  function wishBtn(){
    if(wishlistHandler(bookId) == 0){
      notify(`${bookName} added to wishlist`,0)
    }else if(wishlistHandler(bookId) == 1){
      notify(`${bookName} has been read`,1)
    }else{
      notify(`${bookName} already added to wishlist`,2)
    }
  }

  return(
    <div className='text-center flex flex-col items-center'>    
        <div className="lg:w-1/2 justify-center flex flex-col items-center border-gray-200 rounded-lg md:flex-row  dark:border-gray-700">
            <img className="object-cover hover:scale-150 duration-700 ease-in-out  rounded-t-lg md:h-auto lg:w-72 xl:w-96 md:w-48 md:rounded-none md:rounded-s-lg mr-8" src = {image} alt=""/>
            <div className="flex flex-col p-4 leading-normal">
                <h5 className="mb-8 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{bookName}</h5>
                 <div className='flex flex-col items-start'>
                    <p className="mb-1 flex gap-2 font-bold text-red-500 dark:text-gray-400"><img width = {20} src="/All assets/pen-to-square-regular.svg" alt="" />{author}</p>
                    <p className="mb-1 flex gap-2 font-bold text-violet-500 dark:text-gray-400"><img width = {20} src="/All assets/font-awesome-regular.svg" alt="" /> {category}</p>
                    <p className="my-1 flex items-start justify-center gap-2 font-bold text-gray-500 dark:text-gray-400"><img width = {20} src="/All assets/message-regular.svg" alt="" /> <span className='text-left'>{review}</span></p>
                 </div>
                 <p className='flex items-center gap-2'>
                  <p className='font-bold text-lg flex gap-1'><img src="/All assets/tags-solid.svg" width={20} alt="" /></p>
                  <div className='flex gap-1'>                  
                  {
                    tags.map(tagName => <p className='px-3 py-1 bg-green-400 text-white font-semibold rounded-full text-xs'> {tagName}</p>)
                  }
                  </div>
                </p>
                <div className='flex flex-col justify-start items-start my-2 font-bold text-gray-500 gap-1'>    
                    <p className='flex gap-2'><img src="/All assets/file-lines-regular.svg"       width={20} alt="" />Number of Pages: <span className='text-black'>{totalPages}</span></p>
                    <p className='flex gap-2'><img src="/All assets/print-solid.svg"   width={20}/>Publisher: <span className='text-black'>{publisher}</span></p>
                    <p className='flex gap-2'><img src="/All assets/clock-regular.svg" width={20}/>Year of Publishing: <span className='text-black'>{yearOfPublishing}</span></p>
                    <p className='flex gap-2'><img src="/All assets/star-regular.svg"  width={20}/>Rating: <span className='text-blue-600'>{rating}</span></p>
                </div>
                <div className='text-base flex gap-4'>
                    <button onClick={readBtn} className='flex items-center hover:bg-gray-300  font-bold  gap-2 bg-yellow-200 px-4 py-2  duration-500  rounded-full my-4' to = "/"><img width={15} src='/book-solid.svg' alt="he" />Reading List</button>
                    <button onClick={wishBtn} className='flex items-center hover:bg-gray-300  font-bold  gap-2 bg-emerald-300 px-4 py-2 duration-500  rounded-full my-4' to = "/"><img width={15} src='/All assets/heart-regular.svg'  alt="" /> Wish List</button>
                </div>
                
            </div>
        </div>
        <button className='mt-8'><Link className='btn2 text-sm  my-4' to = "/">Return Home</Link></button>
    </div>
  )
}

function Book() {
  let {id} = useParams();
  id = parseInt(id);
  const AllBooks = useLoaderData();

  const Book = AllBooks.find(item => item.bookId == id)

  return (
    <div className='mt-16  flex justify-center'>
      <BookItem key={Book.bookId} book = {Book}></BookItem>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Book