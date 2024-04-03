import React, { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import SigleItem from '../Components/SingleItem';

function HistoryPage() {
  const AllBooks = useLoaderData();
  let [readBookIds,setReadBookIds] = useState([]); 
  let [wishlistIds,setWishlistIds] = useState([]); 

  useEffect(()=>{
    if(localStorage.getItem('readinglist')){
      setReadBookIds(JSON.parse(localStorage.getItem('readinglist')));
    }
    if(localStorage.getItem('wishlist')){
      setWishlistIds(JSON.parse(localStorage.getItem('wishlist')));
    }
  },[]);

  
  function clrReadBtn(){
    setReadBookIds([]);
    localStorage.setItem('readinglist','');
  }
  
  function clrWishBtn(){
    setWishlistIds([]);
    localStorage.setItem('wishlist','');
  }


  const readBooks = AllBooks.filter(book => readBookIds.includes(book.bookId))
  const wishlistBooks = AllBooks.filter(book => wishlistIds.includes(book.bookId))

  return (
    <>    
        <div className='xl:flex justify-between gap-8  m-8'>
            <div className='text-center xl:w-1/2'>
              <p className='text-2xl font-bold'>Read Books</p>
              { readBooks.length > 0 &&                
                <div className='text-center m-8 md:flex justify-evenly'> 
                      <button className='mb-2 btn2 hover:bg-red-700' onClick={clrReadBtn}>Clear History</button>
                </div>
              }
              <p className='min-h-[150px]'>
                {
                  readBooks.length ? readBooks.map(book => <SigleItem Book = {book}></SigleItem>): <p className='my-8'>No books in the reading list</p>
                }
              </p>
            </div>

            <div className='text-center xl:w-1/2'>
              <p className='text-2xl font-bold'>Wish List</p>
              { 
                  wishlistBooks.length > 0 &&
                  <div className='text-center m-8 md:flex justify-evenly'> 
                        <button className='mb-2 btn2 hover:bg-red-700' onClick={clrWishBtn}>Clear History</button>
                  </div>
              }
              <p className='min-h-[150px]'>
                {
                  wishlistBooks.length ? wishlistBooks.map(book => <SigleItem Book={book}></SigleItem>): <p className='my-8'>No books in the wish list</p>
                }
              </p>
            </div>
        </div>
    </>
  )
}

export default HistoryPage