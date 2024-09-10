import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='w-full h-full bg-black text-white  flex justify-center '>
     <Link to={"/"} className='py-[5px] px-[10px] border-[1px] bg-black text-white m-5'>Home</Link>
    </header>
  )
}

export default Header

