import { FaChevronRight } from "react-icons/fa6";

export default function JourneySection() {
    return (
        <div className="w-[992px] h-[530px] bg-stone-900 bg-opacity-30 rounded-[15px] gradient-border backdrop-blur-[25px] flex px-[60px] items-center gap-9 m-auto" >
            <div className="w-[262px] h-[359px] bg-zinc-500 bg-opacity-60 rounded-[15px]" />
            <div className='flex-1'>
                <div className=" text-white text-[45px] font-bold font-raleway">This, This, and That</div>
                <div className=" text-white text-[25px] font-medium font-raleway">THE JOURNEY OF THIS PERSON</div>
                <div className=" text-white text-[25px] font-normal font-raleway mt-6">Ea enim aliqua dolor pariatur proident cillum in consequat do laboris incididunt proident ullamco ut. Tempor laboris nulla fugiat dolore irure qui occaecat ex tempor.</div>
                <div className='flex gap-7 mt-6'>
                    <button className="w-32 h-12 rounded-2xl bg-white text-center justify-center text-black text-xl font-semibold font-raleway flex items-center">
                        Watch <FaChevronRight />
                    </button>
                    <button className="w-32 h-12 rounded-2xl bg-white text-center justify-center text-black text-xl font-semibold font-raleway flex items-center">
                        Listen <FaChevronRight />
                    </button>
                </div>

            </div>
        </div>
    )
  }
