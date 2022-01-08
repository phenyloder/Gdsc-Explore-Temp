import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch, AiOutlineArrowDown} from 'react-icons/ai'
import { useState } from 'react'
import LogoSvg from '../public/images/logo.svg'
import Image from 'next/image'


export default function Navbar(){
    const [toggle, setToggle] =useState(false);
    const [toggleCarousel, setToggle2] =useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    const handleToggleCarousel = ()=>{
        setToggle2(!toggleCarousel);
    }

    return (
        <>
        <div className="container-fluid">
            <div id="navbar" className='h-[6.8125rem] shadow-[0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.12),0px_1px_3px_rgba(0,0,0,0.2)]'>
                <nav className="flex justify-between items-center bg-[#3C64B1] bg-opacity-[0.06] h-[5.5rem] px-[5%] md:px-[8%] ">
                    <div className="flex flex-row">
                        <div className="hidden md:flex w-[400px] h-[100px] flex-row justify-between" id="lp-view">
                            <div className='pt-[8px]'>
                                <a>
                                    <Image src={LogoSvg} height={80} width={80}/>
                                </a>
                            </div>
                            <div className='flex items-center active:text-blue'>
                                <a href='#header-section'>Home</a>
                            </div>
                            <div className='flex items-center'>
                                <a href='#events-section'>Events</a>
                            </div>
                            <div className='flex items-center'>
                                <a href='#team-secion'>Teams</a>
                            </div>
                            <div className='flex items-center'>
                                <a href='#Our-Sponsors'>Sponsors</a>
                            </div>
                            <div className='flex items-center'>
                                <a href='#faq'>FAQ</a>
                            </div>
                            
                        </div>
                        <div className="md:hidden flex" id="mb-view">
                            <button className="text-black p-2 mr-[15px]" onClick={()=>{handleToggle()}}><GiHamburgerMenu/></button>
                            <a href='' className='pt-[4px] text-[#373F41]'>GDSC Explore</a>
                        </div>
                    </div>


                    <div className="flex">
                        <div id="lp-view " className='hidden md:flex'>
                            <div id='carousel' className='flex items-center mr-[15px]'>
                                <div className='mr-[10px]'>
                                    Asia Pacific
                                </div>
                                <button onClick={()=>{handleToggleCarousel()}}>
                                    <AiOutlineArrowDown/>
                                </button>
                                

                            </div>

                            <AiOutlineSearch className='text-[#737B7D] mt-[7px] text-[27px]'/>
                            <button className="bg-[#3C64B1] text-white px-[14px] py-[7px] ml-[20px] rounded">Log in</button>
                        </div>
                        <div id="mb-view" className="flex md:hidden">
                            <AiOutlineSearch className='text-[#737B7D] mt-[7px] text-[27px]'/>
                            <button className="bg-[#3C64B1] text-white px-[14px] py-[7px] ml-[20px] rounded">Log in</button>
                        </div>
                    </div>
                </nav>
                




                {/* side bar */}
                <div className={toggle?'bg-black bg-opacity-30 absolute inset-0 z-10 ':'bg-black bg-opacity-30 absolute inset-0 z-10 hidden'} onClick={()=>{handleToggle()}}>

                <div id="sidebar" className='z-20 bg-white h-full w-[66%] px-[2.2rem] py-[1.5rem]'>
                    <div id="logo" className='flex justify-start'>
                        <Image src={LogoSvg} height={80} width={80}/>
                    </div>





                    <div className='p-3' id="nav-links">
                        <div className='flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]'>
                            <a href='#header-section'>Home</a>
                        </div>
                        <div className='flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]'>
                            <a href='#events-section'>Events</a>
                        </div>
                        <div className='flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]'>
                            <a href='#team-secion'>Teams</a>
                        </div>
                        <div className='flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]'>
                            <a href='#Our-Sponsors'>Sponsors</a>
                        </div>
                        <div className='flex items-center px-[8px] h-[58px] border-b-2 border-[rgba(115, 123, 125, 0.29)]'>
                            <a href='#faq'>FAQ</a>
                        </div>
                    </div>

                    <div className='absolute bottom-0 h-[58px] w-[54%] border-t-2 border-t-[rgba(115, 123, 125, 0.29)]' id='sidebar-footer'>
                        Asia Pacific
                    </div>
                </div>

                </div>
                {/* side bar */}




                {/* Location carousel */}
                <div className={toggleCarousel?'absolute bg-white h-[100px] w-[100px] right-[19%]':'hidden'}  onClick={()=>{handleToggleCarousel()}}>
                    <ul>
                        <li>
                        Asia Pacific
                        </li>
                        <li>
                        Asia Pacific
                        </li>
                        <li>
                        Asia Pacific
                        </li>
                        <li>
                        Asia Pacific
                        </li>
                    </ul>

                </div>


                {/* Location carousel */}

            </div>
        </div>
        </>
    )
}