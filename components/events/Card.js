import Image from "next/image"
import navigateicon from "../../public/images/navigateicon.png"
import Link from "next/link"


export default function Card({event}){
    return (
        <>
            <div className="bg-offWhite p-4 rounded-[4px] border-[1px] border-borderColor" id="card">
                <div id="card-img">
                    <Image src={event.img}/>
                </div>
                <div id="card-body" className="text-start my-3">
                    <h1 className="text-black text-[24px] font-[300] leading-[22px] tracking-[0.3px]">{event.title}</h1>

                    <p className="text-[16px] font-[300] text-paragraphColor leading-[22px] tracking-[0.3px] my-5">
                        {event.description}
                    </p>
                    <Link href={"/"} >
                        <a className="flex justify-start items-center text-indigo-600">
                            <p className="mr-1">Open</p>
                            <Image src={navigateicon} className="w-8 h-8"/>

                        </a>
                    </Link>
                    
                </div>

            </div>
        </>
    )

}