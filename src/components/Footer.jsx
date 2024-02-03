
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6'

export default function Footer({className=""}) {
    return (
        <footer className={`text-white text-center mt-20 ${className}`}>
            <h4 className="w-[366px] h-[35px] text-center text-white text-xl font-semibold font-raleway">©️ The Journey Tellers Podcast 2023</h4>
            <div className='flex justify-center gap-4'>
                <FaYoutube className='text-3xl' />
                <FaInstagram className='text-3xl' />
                <FaTiktok className='text-3xl' />
                <FaTwitter className='text-3xl' />
            </div>
        </footer>
    )
}
