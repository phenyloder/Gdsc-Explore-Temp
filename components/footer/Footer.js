import Image from 'next/image';
import LogoSvg from '../../public/logo.svg'
import Link from 'next/link';

export default function Footer() {
    return(
        <>
            <div className="py-14">
                <div className="flex flex-row justify-center">
                    <p>email us at </p>
                    <Link href={"/"}><p className="mr-1 px-1 text-indigo-600">example@gmail.com</p></Link>
                </div>
                <div className="flex flex-wrap justify-center mx-[4rem] md:mx-[19%] lg:mx-[15%] mt-[35px]">
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%] mb-[7px] py-8'>
                        <Image src={LogoSvg} className="w-8 h-8"/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%] mb-[7px] py-8'>
                        <Image src={LogoSvg} className="w-8 h-8"/> 
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%] mb-[7px] py-8'>
                        <Image src={LogoSvg} className="w-8 h-8"/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                    <div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[25%] mb-[7px] py-8'>
                        <Image src={LogoSvg} className="w-8 h-8"/>
                        <div className='text-[#737B7D] text-[14.5px] text-center mt-[10px]'>Google Developer Student Clubs</div>
                        <div className='text-[#737B7D] text-[9.39px] text-center'>National Institute Of Technology Silchar</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-center mr-1 pb-2">Developers</p>
                    <hr className="w-[2%]"></hr>
                    <Link href={"/"} >
                        <a className="pt-2">
                            <p className="text-[#737B7D] mr-1">Website Developers</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}