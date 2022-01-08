import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
import LogoSvg from '../public/images/logo.svg'
import Image from 'next/image'

export default function Navbar(){
    const [toggle, setToggle] =useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle);
    }

    return (
        <>
        <div className="container-fluid">
            <div id="navbar" className='h-[6.8125rem] shadow-[0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.12),0px_1px_3px_rgba(0,0,0,0.2)]'>
                <nav className="flex justify-between bg-[#3C64B1] h-[5.5rem]   px-[12.5%] md:px-[111px]">
                    <div className="flex" >
                        <div id="lp-view" className="hidden md:block">
                            <a>
                                <Image src={LogoSvg}/>
                            </a>
                            <a>Link 1</a>
                            <a>Link 1</a>
                            <a>Link 1</a>
                            <a>Link 1</a>
                        </div>
                        <div className="md:hidden flex" id="mb-view">
                            <button className="text-black p-2" onClick={()=>{handleToggle()}}><GiHamburgerMenu/></button>
                            <a>GDSC Explore</a>
                        </div>
                    </div>
                    <div className="flex">
                        <div id="lp-view " className='hidden md:block'>
                            <a>Link 2</a>
                            <a>Link 2</a>
                            <a>Link 2</a>
                            <a>Link 2</a>
                            <a>Link 2</a>
                        </div>
                        <div id="mb-view" className="flex md:hidden">
                            <AiOutlineSearch/>
                            <button className="bg-indigo-600 p-2">Log in</button>

                        </div>
                    </div>

                </nav>
                


                {/* side bar */}


                <div className={toggle?'bg-black bg-opacity-30 absolute inset-0 z-10 ':'bg-black bg-opacity-30 absolute inset-0 z-10 hidden'} onClick={()=>{handleToggle()}}>

                <div id="sidebar" className='z-20 bg-white h-full w-[66%] '>
                    <div id="logo" className='flex justify-start'>
                        <h1>Logo</h1>
                    </div>





                    <div className='p-3' id="nav-links">
                        <ul>
                            <li>
                                <a>Link 1</a>
                            </li>
                            <li>
                                <a>Link 1</a>
                            </li>
                            <li>
                                <a>Link 1</a>
                            </li>
                            <li>
                                <a>Link 1</a>
                            </li>
                        </ul>
                        
                       

                    </div>
                </div>

                </div>


                

                {/* side bar */}
            </div>
        </div>
        </>
    )
}