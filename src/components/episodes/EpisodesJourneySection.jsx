import { FaChevronRight, FaPinterest, FaSpotify, FaYoutube } from "react-icons/fa6";

export default function EpisodesJourneySection() {
    return (

        <div className='w-full z-10'>
            <div className=" text-white text-[45px] font-bold font-raleway">This, This, and That</div>
            <div className=" text-white text-[25px] font-medium font-raleway">THE JOURNEY OF THIS PERSON</div>
            <div className=" text-white text-[25px] font-normal font-raleway mt-6 w-1/2">Ea enim aliqua dolor pariatur proident cillum in consequat do laboris incididunt proident ullamco ut. Tempor laboris nulla fugiat dolore irure qui occaecat ex tempor.</div>
            <div className='flex gap-2 mt-6'>
                <button className="px-4 h-12 rounded-full bg-white text-center justify-center text-black text-xl font-semibold font-raleway flex items-center">
                    Episode Page <FaChevronRight />
                </button>
                <button className="text-white">
                    <FaYoutube className="text-4xl"/>
                </button>
                <button className="text-white">
                    <FaSpotify className="text-3xl"/>
                </button>
            </div>

        </div>      

    )
  }
