import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import CustomChart from '../Components/barChart';

function PagesToRead() {
  const AllBooks = useLoaderData();
  let [readBookIds,setReadBookIds] = useState([]); 

  useEffect(()=>{
    if(localStorage.getItem('readinglist')){
      setReadBookIds(JSON.parse(localStorage.getItem('readinglist')));
    }
  },[readBookIds]);



  const readBooks = AllBooks.filter(book => readBookIds.includes(book.bookId));


  return (
    <div className='flex justify-center items-center mt-8 lg:mt-20'>
      {
        readBooks.length > 0 ? <CustomChart readBooks = {readBooks}></CustomChart>:
        <p className='text-2xl font-semibold'>Add books in the reading list to see the chart</p>
      }
    </div>
  )
}

export default PagesToRead