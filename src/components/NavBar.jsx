import {NavLink} from 'react-router-dom';
import React, { useState } from 'react';

import { FaBars, FaBarsStaggered } from "react-icons/fa6";



const NavBar = () => {

    const [isopen, setIsOpen] = useState(false);

   

    const toggleMenu = () => {
        setIsOpen(!isopen);
        console.log(isopen);
    };

    const navItems = [
        { name: 'Home', href: '/'},
        { name: 'About us', href: '/about'},
        { name: 'Service', href: '/service'},
        { name: 'Contact us', href: '/contact'},
    ];
        

    return(
        <>
            <div className=' md:hidden lg:hidden items-center justify-center text-3xl font-bold '>
                <FaBars onClick={()=>{toggleMenu()}} className='text-orange-500 mx-5 cursor-pointer' />

                {/* OPENED MENU */}
                {isopen && (  <div className='bg-gray-100 h-screen absolute top-0 right-0 w-1/2 z-10 transform ease-linear duration-1000 shadow-lg'>
                    <div className='absolute top-0 right-0 p-4 cursor-pointer'>
                        <FaBarsStaggered onClick={()=>{toggleMenu()}} className='text-orange-500 mx-5 cursor-pointer transform ease-out duration-300 '/>
                    </div>
                        <div className='flex flex-col justify-center items-center text-lg h-screen gap-5 text-orange-500'>
                                 {navItems.map((item, index) =>{
                                    return(
                                            <NavLink key={index} to={item.href} className={({isActive}) =>  `hover:text-orange-400 ${isActive ? "text-orange-700" : ""}`}>{item.name}</NavLink>
                                    )
                            })}
                        </div>
                    </div>)
                }
              
            </div>

            <nav className='hidden sm:hidden md:flex items-center gap-2 text-orange-500 text-lg font-semibold '>
            {navItems.map((item, index) =>{
                return(
                    <NavLink key={index} to={item.href} className={({isActive}) => `${isActive ? "p-2 rounded-md bg-orange-600 text-white " : " "}`}>{item.name}</NavLink>
                )
            })}
            </nav>
        </>
        
      
        
    )
}

export default NavBar;  