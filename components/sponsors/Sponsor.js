
import Image from 'next/image'
import RectangleSvg from '../../public/Rectangle.svg'


export default function Sponsor(){
    return (
        <div className="bg-[#F9F9F9] py-[64px]">
            <div className="text-[48px] font-[400] text-center">
                Our Sponsors
            </div>
            <div id='subheading' className="flex justify-center font-[300] mx-[20%] text-[#737B7D] text-[25px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et et diam.
            </div>
            
            <div className="flex">
                <div id='icon-wrapper' className='border-2 border-[#737B7D] border-opacity-[29%] bg-white mx-auto mt-[24px]'>
                    <Image src={RectangleSvg} height={100} width={100}/>
                </div>
            </div>
        </div>
    )
}