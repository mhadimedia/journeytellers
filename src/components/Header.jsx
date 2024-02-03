
import Link from 'next/link'
import CustomButton from './CustomButton'
import { FaChevronDown } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
 
export default function Header({ shownav = false, className="" }) {
    return (
        <header className={`flex justify-between w-full items-center ${className}`}>
            <Link href={"/"} >
                <h1 className="text-white text-6xl font-extrabold font-raleway">Journey Tellers</h1>
                <h3 className="text-center text-white text-xl font-medium font-raleway">REAL PEOPLE. REAL STORIES. REAL INSIGHTS.</h3>
            </Link>
            <div className="flex gap-6 items-center text-white font-raleway">
                {shownav &&
                    <>
                        <FaSearch className=' hover:cursor-pointer'/>
                        <span className='flex items-center gap-1 hover:cursor-pointer'>About <FaChevronDown/></span>
                        <span className='flex items-center gap-1 hover:cursor-pointer'>Episodes <FaChevronDown/></span>
                        <span className='flex items-center gap-1 hover:cursor-pointer'>Subscribe <FaChevronDown/></span>
                    </>
                }
                <CustomButton children={'Support Us'} />
            </div>
        </header>
    )
}
