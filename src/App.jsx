import { useState, createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import readinglistHandler from './Handlers/readinglistHandler';
import wishlistHandler from './Handlers/wishlistHandler';
import Footer from './Components/Footer';

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
                <Footer></Footer>
      </div>
  );
}

export default App;
