import React, { useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Books from '../Components/Books'
import Banner from '../Components/Banner'
import { BookContext } from '../App'

function HomePage() {
  return (
    <>    
      <Banner></Banner>
      <Books></Books>
    </>
  )
}

export default HomePage