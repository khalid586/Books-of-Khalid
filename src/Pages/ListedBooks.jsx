import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BookContext } from '../App';

const notify = (msg) => toast.success(msg);

export const ListContext = createContext();


function ListedBooks() {
  const AllBooks = useLoaderData();
  let [readBookIds,setReadBookIds] = useState([]); 
  let [wishlistIds,setWishlistIds] = useState([]); 

  const [tab,setTab] = useState(1);

  useEffect(()=>{
    if(localStorage.getItem('readinglist')){
      setReadBookIds(JSON.parse(localStorage.getItem('readinglist')));
    }
    if(localStorage.getItem('wishlist')){
      setWishlistIds(JSON.parse(localStorage.getItem('wishlist')));
    }
  },[]);

  
  const readBooks = AllBooks.filter(book => readBookIds.includes(book.bookId))
  const wishlistBooks = AllBooks.filter(book => wishlistIds.includes(book.bookId))
  const [sortingAttribute,setSortingAttribute] = useState('');
    
  return (
    <>    
        <div id = "navigation" className='p-2 flex justify-center gap-5'>
              <NavLink to= '' className={()=>tab == 1?'text-green-600 duration-500 font-bold rounded-xl p-2 bg-green-50 ':'text-black p-2'}>Read Books</NavLink>
              <NavLink to= 'wishlist' className={()=>tab == 2?'text-green-600 duration-500 font-bold rounded-xl p-2 bg-green-50 ':'text-black p-2'}>Wishlist</NavLink>
        </div>

        {
          tab == 1 && readBooks.length > 0 &&
          <div className='text-center'>
            <details className="dropdown w-full text-center">
              <summary className="m-1 btn "><p className='flex gap-2 items-center'>Sort By <img src="/All assets/arrow-down.svg" width={20} alt="" /></p> </summary>
              <ul className=" w-full  p-2  menu dropdown-content z-[1] bg-base-100 rounded-box">
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('rating');notify('Sorted according to rating')}}>Rating</button></li>
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('page'); notify('Sorted according to pages')}}>Number of pages</button></li>
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('year'); notify('Sorted according to year of publication')}}>Year of publication</button></li>
              </ul>
            </details>
          </div>
        }

        {
          tab == 2 && wishlistBooks.length > 0 &&
          <div className='text-center'>
            <details className="dropdown w-full text-center">
            <summary className="m-1 btn">Sort by</summary>
              <ul className=" w-full  p-2  menu dropdown-content z-[1] bg-base-100 rounded-box">
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('rating');notify('Sorted according to rating')}}>Rating</button></li>
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('page'); notify('Sorted according to pages')}}>Number of pages</button></li>
                <li className='rounded-full p-2  hover:text-green-500 font-bold'><button onClick={()=>{setSortingAttribute('year'); notify('Sorted according to year of publication')}}>Year of publication</button></li>
              </ul>
            </details>
          </div>
        }

        <div className='w-full md:flex justify-evenly'>
            <ListContext.Provider value={{readBooks,wishlistBooks,setTab,sortingAttribute}}>
              <Outlet></Outlet>
            </ListContext.Provider>
        </div>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default ListedBooks