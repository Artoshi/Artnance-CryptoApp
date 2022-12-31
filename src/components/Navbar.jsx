import React from 'react'
import { CgProfile } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"
import Switcher from './Switcher'
import MobileMenu from './MobileMenu'
import {UserAuth} from "../context/AuthContext"
import { toast } from 'react-hot-toast';

function Navbar() {

    const {user, logout} = UserAuth()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
          await logout()
          navigate("/signin")
          toast.success(`Thank you for visiting my website`)
        } catch (error) {
          console.log(error.message);
          toast.error(error)
        }
    }

  return (
    <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
        <Link to="/">
            <h1 className='text-2xl text-binance hover:animate-bounce'>Artnance</h1>
        </Link>
        <div className='hover:scale-150 duration-300 ease-out md:block hidden'>
            <Switcher />
        </div>
        <div className='md:block hidden'>
            {user?.email ?(
            <div className='flex'>
                <Link to="/account">
                    <CgProfile className='mr-4 mt-1 cursor-pointer ' size={26}/>
                    
                </Link>
                <button onClick={handleSignOut}>Log Out</button>
            </div>
            
            ) : (
            <Link to="/signin">
                Sign In
            </Link>)}
        </div>
        <div className='md:hidden block'>
            <MobileMenu signOut= {handleSignOut} user={user}/>
        </div>
        
    </div>
  )
}

export default Navbar