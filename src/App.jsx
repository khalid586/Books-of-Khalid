import { useState, createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import readinglistHandler from './Handlers/readinglistHandler';
import wishlistHandler from './Handlers/wishlistHandler';

export const BookContext = createContext();

function App() {
  const [readingList,setReadinList] = useState([]);
  const [wishList,setWishList] = useState([]);

  return (
      <div className='font-custom'>
          <BookContext.Provider value={{readinglistHandler,wishlistHandler,readingList,setReadinList,wishList,setWishList}}>
                <NavbarComp></NavbarComp>
                <Outlet />
          </BookContext.Provider>
      </div>
  );
}

export default App;
