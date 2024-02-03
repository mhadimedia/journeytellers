import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function PeopleSaySection() {
    return (
        <div className='host_section pt-28 text-white -mx-48'>
            <h3 className="text-center text-white text-[65px] font-bold font-raleway pb-8">What People Say</h3>
            <div className='flex gap-3 justify-center relative'>
                <div className="flex-1 flex items-center text-center bg-zinc-500 bg-opacity-40 rounded-[30px] p-7 shadow backdrop-blur-[20px] text-white text-[25px] leading-7 font-normal font-['Raleway'] ">
                    What truly sets Journey Tellers apart from other channels is that it’s a platform to learn diverse human experiences.
                </div>
                <div className="flex-1 flex items-center text-center bg-zinc-500 bg-opacity-40 rounded-[30px] p-7 shadow backdrop-blur-[20px] text-white text-[25px] leading-7 font-normal font-['Raleway']">
                    Journey Tellers was the channel for me to learn from new mentors who taught me new life lessons. It has been a beacon to get inspiration and personal growth.
                </div>
                <div className="flex-1 flex items-center text-center bg-zinc-500 bg-opacity-40 rounded-[30px] p-7 shadow backdrop-blur-[20px] text-white text-[25px] leading-7 font-normal font-['Raleway']">
                    The stories (on the podcast) are incredibly inspiring and has given me some ideas of how I can improve myself and what I could actually do despite my limitations.
                </div>
                <div className="flex-1 flex items-center text-center bg-zinc-500 bg-opacity-40 rounded-[30px] p-7 shadow backdrop-blur-[20px] text-white text-[25px] leading-7 font-normal font-['Raleway']">
                    The hosts are charismatic, engaging, and passionate... I am able to connect on a personal level, while obtaining priceless experiences, lessons, and insights.
                </div>
                <div className="flex-1 flex items-center text-center bg-zinc-500 bg-opacity-40 rounded-[30px] p-7 shadow backdrop-blur-[20px] text-white text-[25px] leading-7 font-normal font-['Raleway']">
                    These young men are doing amazing work to spotlight our incredibly diverse and talented community members. i am an avid fan, and look forward to seeing it grow to great heights.
                </div>
                <FaChevronLeft className="absolute left-36 top-1/2 text-2xl font-bold z-10 -translate-y-1/2" />
                <div className="absolute left-0 -top-1/2 w-[452px] h-[599px] bg-gradient-to-r from-stone-900 to-transparent" />
                <FaChevronRight className="absolute right-36 top-1/2 text-2xl font-bold z-10 -translate-y-1/2" />
                <div className="absolute right-0 -top-1/2 w-[452px] h-[599px] bg-gradient-to-l from-stone-900 to-transparent" />
            </div>
        </div>
    )
}
