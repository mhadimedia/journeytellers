import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";


export default function HostSection() {
    return (
        <div className='host_section pt-28 text-white'>
            <h3 className="text-center text-white text-[65px] font-bold font-raleway pb-8">Meet the Hosts</h3>
            <div className='flex gap-5 justify-center'>
                <div className="max-w-[450px] bg-zinc-500 bg-opacity-40 rounded-[15px] shadow border-2 border-stone-900 border-opacity-40 backdrop-blur-[20px] flex flex-col items-center text-center py-11 px-5">
                    <img src={'/hadi.png'} width={150} height={150} className='mb-3' />
                    <h6 className="text-center text-white text-[45px] font-bold font-raleway mb-3.5">M Hadi</h6>
                    <p className="text-center text-white text-[25px] font-normal font-raleway mb-9">Aute est ipsum aliquip consequat nulla sunt cillum reprehenderit. Fugiat anim cillum qui cupidatat ex duis sit cillum sit ut adipisicing</p>
                    <div className='flex w-full justify-center gap-4 text-4xl'>
                        <FaYoutube className='h-full text' />
                        <FaInstagram className='h-full' />
                        <FaLinkedin className='h-full' />
                    </div>
                </div>
                <div className="max-w-[450px] bg-zinc-500 bg-opacity-40 rounded-[15px] shadow border-2 border-stone-900 border-opacity-40 backdrop-blur-[20px] flex flex-col items-center text-center py-11 px-5">
                    <img src={'/ali.png'} width={150} height={150} className='mb-3' />
                    <h6 className="text-center text-white text-[45px] font-bold font-raleway mb-3.5">Ali Almathkur</h6>
                    <p className="text-center text-white text-[25px] font-normal font-raleway mb-9">Aute est ipsum aliquip consequat nulla sunt cillum reprehenderit. Fugiat anim cillum qui cupidatat ex duis sit cillum sit ut adipisicing</p>
                    <div className='flex w-full justify-center gap-4 text-4xl'>
                        <FaYoutube className='h-full text' />
                        <FaInstagram className='h-full' />
                        <FaLinkedin className='h-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
