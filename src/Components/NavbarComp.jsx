import React, { useContext } from 'react'
import { BookContext } from '../App'
import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar } from 'flowbite-react';
import { AuthContext } from '../Providers/AuthProvider';


function NavbarComp() {

  const style = 'rounded-3xl px-4 py-2 border-2 border-green-400';
  const {user,logOut} = useContext(AuthContext);

  return (
    <Navbar className='font-custom font-bold'>
      <NavLink to = "/" className='flex'>
        <img width={20} src="images/utensils-solid.svg" alt="" />
        <span className="pl-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Books of Khalid</span>
      </NavLink>
      <div className="flex md:order-2">
        {
          user ? <button className='px-4 py-2 btn2 text-white rounded-3xl' onClick={logOut}>Logout</button>:
          <NavLink to = '/login'  className={({isActive})=>isActive?`px-4 py-2 rounded-3xl bg-green-400 text-white `:`${style} `}>login</NavLink>
        }

      </div>
      <Navbar className='md:w-2/3'>
        <NavLink to="/" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50 ':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/building-regular.svg' width={15}/>Home</p></NavLink>
        <NavLink to="/listed_books" className={({isActive})=>isActive?'text-blue-600  duration-500 rounded-full px-4 p-2 bg-blue-50 ':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/book-solid.svg' width={15}/>Listed Books</p></NavLink>
        <NavLink to="/history" className={({isActive})=>isActive?'text-blue-600       duration-500 rounded-full px-4 p-2 bg-blue-50 ':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/vite.svg' width={15}/>History</p></NavLink>
        <NavLink to="/pages_to_read" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50':'text-black p-2'}><p className='flex gap-1'><img src='/All assets/book-open-solid.svg' width={15}/>Read Pages</p></NavLink>
        <NavLink to="/wishlist" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50':'text-black p-2'}>     <p className='flex gap-1'><img src='/All assets/heart-solid.svg' width={15}/>Wishlist</p></NavLink>
        {
          user && <NavLink to="/profile" className={({isActive})=>isActive?'text-blue-600 duration-500 rounded-full px-4 p-2 bg-blue-50':'text-black p-2'}>     <p className='flex gap-1'><img src='/All assets/user-regular.svg' width={15}/>Profile</p></NavLink>
        }
      </Navbar> 
    </Navbar>
  )
}

export default NavbarComp