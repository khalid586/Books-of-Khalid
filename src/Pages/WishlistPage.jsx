import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../App'
import { useLoaderData } from 'react-router-dom'
import SigleItem from '../Components/SingleItem';


function WishlistPage() {
    const AllBooks = useLoaderData();
    
    const [wishListBooks,setWishListBooks] = useState([]);

    useEffect(() =>{
      if(localStorage.getItem('wishlist')){
        const wishlistIds = JSON.parse(localStorage.getItem('wishlist'));
        const currBooks = AllBooks.filter(book => wishlistIds.includes(book.bookId))
        setWishListBooks(currBooks);
      }
    },[])
    
    
    return (
    <div className='flex justify-center'>
      <p className='mx-4 lg:w-4/5 xl:w-1/2'>        
          { wishListBooks.length > 0 ? 
            wishListBooks.map(book => <SigleItem className = 'bg-red-500' Book = {book}></SigleItem>):
            <p className='text-center mt-8 text-2xl font-bold'>Wishlist is currently empty</p>
          }
      </p>
    </div>
  )
}

export default WishlistPage