import { IoIosArrowDroprightCircle } from "react-icons/io"
import EpisodeCard from "./EpisodeCard"
import { FaChevronRight } from "react-icons/fa6"

export default function EpisodesList({title, showFullListOption=false}) {
    return (

        <div className='w-full z-10 text-white font-raleway mb-32'>
            {showFullListOption ? 
                <div className="flex justify-between mr-60 items-center">
                    <h4 className="text-[45px] font-bold font-raleway pb-7">{title}</h4>
                    <p className="flex gap-1 items-center text-[25px] font-bold">View Full Playlist <FaChevronRight /></p>
                </div>
            : <h4 className="text-[45px] font-bold font-raleway pb-7">{title}</h4> }
            
            <div className="flex gap-7 relative w-full overflow-hidden">
                <EpisodeCard text={"This, this, and that: The Journey of This Person"} />
                <EpisodeCard text={"This, this, and that: The Journey of This Person"} />
                <EpisodeCard text={"This, this, and that: The Journey of This Person"} />
                <EpisodeCard text={"This, this, and that: The Journey of This Person"} />
                <div className="bg-gradient-to-r from-transparent to-stone-900 w-44 h-96 absolute right-20 top-1/2 -translate-y-60 flex items-center">
                    <IoIosArrowDroprightCircle className="text-[76px] cursor-pointer"/>
                </div>
            </div>
        </div>      

    )
  }
