import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import Switcher from './Switcher'
import '../helper/MobileMenu.css'

const MobileMenu = ({ user, signOut }) => {
    return (
        <Menu right>
            <Link to='/'>Home</Link>
            {user?.email && <Link to='/account'>Account</Link>}
            {user?.email ? (<button>Log Out</button>
            ) : (
                <Link to='/signin'>
                    Sign In
                </Link>)}

            
                <Switcher />
            

        </Menu>
    )
}

export default MobileMenu
