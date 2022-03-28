import React, { useState } from 'react';
import {MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import Navlink from '../navLink/Navlink';
import './Header.css'

const Header = () => {
    const nav = [
        { name: 'Home', path: '/home', id: 1 },
        { name: 'About', path: '/about', id: 2 },
        { name: 'Contact', path: '/contact', id: 3 },
        { name: 'Service', path: '/service', id: 4 },
    ]

    const [open, setOpen] = useState(false)

    return (
        <header className='bg-slate-500 text-white'>
            <nav className='w-4/5 flex justify-between  items-center m-auto h-[50px]'>
                <div className="logo">
                    <h1 className='text-xl'>Marvel</h1>
                </div>
                <div onClick={() => setOpen(!open)} className='h-10 w-10 md:hidden'>
                    {
                        open ? <XIcon></XIcon> : <MenuAlt2Icon ></MenuAlt2Icon>
                    }
                </div>
                    
                    <ul className={`ul ${open ? 'nav-ul':'ul'}`}>
                        {
                            nav.map(link => <Navlink
                                 key={link.id}
                                 link={link}
                                 ></Navlink>)
                        }
                    </ul>

                {/*  <ul className={`md:flex justify-center absolute duration-500 md:static bg-indigo-200 w-full ease-in ${open ? 'translate-x-[-55px] w-56 top-[50px]' : 'translate-x-[-900px] top-[50px] '}`}>
                    {
                        nav.map(link => <Navlink
                            key={link.id}
                            link={link}
                            open={open}
                        ></Navlink>)
                    }
                </ul> */}
            </nav>
        </header>
    );
};

export default Header;