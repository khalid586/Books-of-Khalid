import React, { useContext } from 'react'
import { ListContext } from '../Pages/ListedBooks'
import SigleItem from './SingleItem';
import { sortingHandler } from '../Handlers/sortingHandler';

function Wishlist() {
    let {wishlistBooks,setTab,sortingAttribute} = useContext(ListContext);
    setTab(2);

    if(sortingAttribute != ''){
        wishlistBooks = sortingHandler(wishlistBooks,sortingAttribute);
    }

    return (
        <div className='text-center m-4 flex justify-center'>
            <p className='md:w-2/3'>
                {
                    wishlistBooks.length ? wishlistBooks.map(book => <SigleItem Book={book}></SigleItem>): <p>No books in the wish list</p>
                }
            </p>
        </div>
    )
}

export default Wishlist