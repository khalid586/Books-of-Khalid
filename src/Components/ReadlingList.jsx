import React, { useContext } from 'react'
import { ListContext } from '../Pages/ListedBooks'
import SigleItem from './SingleItem';
import { sortingHandler } from '../Handlers/sortingHandler';

function ReadlingList() {
      let {readBooks,setTab,sortingAttribute} = useContext(ListContext);
      setTab(1);

      if(sortingAttribute != ''){
        readBooks = sortingHandler(readBooks,sortingAttribute);
      }
      return (
      <div className='text-center m-4 flex justify-center'>
          <div className='md:w-2/3'>
            {
              readBooks.length ? readBooks.map(book => <SigleItem Book={book}></SigleItem>): <p>No books in the reading list</p>
            }
          </div>
      </div>
  )
}

export default ReadlingList