import Image from 'next/image'
import Sp from '../../public/sponsors/sponsor.svg'

export default function Faq() {
    return(
        <>
            <div className="py-14">
                <div className="w-full flex flex-col py-14 items-center justify-center bg-[#F9F9F9]">
                    <h1 className="text-start text-[2rem] md:text-[48px] text-[#373F41] mb-5 text-center">Our Sponsors</h1>
                    <div className="h-auto w-[50%] font-thin text-[#737B7D] text-[1.5rem] text-center">
                        <p>Loren ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et et diam.</p>
                        <br/>
                        <Image src={Sp} className="w-8 h-8" />
                        {/* <Image src="{LogoSvg}"/> */}
                    </div>
                </div>
            </div>
        </>
    );
}