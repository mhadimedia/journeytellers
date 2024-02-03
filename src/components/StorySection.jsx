import { FaInstagram, FaPinterest, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SiClubhouse } from "react-icons/si";


export default function StorySection() {
    return (
        <>
            <h2 className="mix-blend-overlay uppercase w-full text-center text-white text-[87px] font-clash-display-bold my-32">
                What's Your Story?
            </h2>
            <div className="flex gap-4 w-full">
                <div className="w-[389px] h-56 bg-zinc-500 bg-opacity-40 text-center rounded-[15px] border-2 border-stone-900 border-opacity-40 backdrop-blur-[20px] p-9 flex flex-col justify-between" >
                    <h4 className="text-white text-4xl font-bold font-raleway">Clips</h4>
                    <div className='flex gap-6 '>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaInstagram className="text-white text-[50px]" />
                        </div>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaTiktok className="text-white text-[50px]" />
                        </div>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaInstagram className="text-white text-[50px]" />
                        </div>
                    </div>
                </div>
                <div className="w-[389px] h-56 bg-zinc-500 bg-opacity-40 text-center rounded-[15px] border-2 border-stone-900 border-opacity-40 backdrop-blur-[20px] p-9 flex flex-col justify-between" >
                    <h4 className="text-white text-4xl font-bold font-raleway">Watch</h4>
                    <div className='flex gap-6 justify-center'>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaYoutube className="text-white text-[50px]" />
                        </div>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaSpotify className="text-white text-[50px]" />
                        </div>
                    </div>
                </div>
                <div className="w-[389px] h-56 bg-zinc-500 bg-opacity-40 text-center rounded-[15px] border-2 border-stone-900 border-opacity-40 backdrop-blur-[20px] p-9 flex flex-col justify-between" >
                    <h4 className="text-white text-4xl font-bold font-raleway">Listen</h4>
                    <div className='flex gap-6 '>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaPinterest className="text-white text-[50px]" />
                        </div>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <FaSpotify className="text-white text-[50px]" />
                        </div>
                        <div className="w-[90px] h-[90px] bg-stone-500 bg-opacity-70 rounded-[15px] shadow flex justify-center items-center">
                            <SiClubhouse className="text-white text-[50px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
