import CustomButton from "./CustomButton";


export default function ContactSection() {
    return (
        <div className='host_section pt-28 text-white'>
            <h3 className="text-center text-white text-[65px] font-bold font-raleway pb-8">Contact Us</h3>
            <div className='flex flex-col gap-3 items-center'>
                <input className="w-[947px] bg-zinc-500 bg-opacity-40 rounded-[15px] border-2 border-black backdrop-blur-[20px] text-[25px] text-white text-opacity-30 fornt-medium font-raleway leading-normal px-6 py-8" placeholder='Your name' />
                <input className="w-[947px] bg-zinc-500 bg-opacity-40 rounded-[15px] border-2 border-black backdrop-blur-[20px] text-[25px] text-white text-opacity-30 fornt-medium font-raleway leading-normal px-6 py-8" placeholder='Your email' />
                <textarea className="w-[947px] bg-zinc-500 bg-opacity-40 rounded-[15px] border-2 border-black backdrop-blur-[20px] text-[25px] text-white text-opacity-30 fornt-medium font-raleway leading-normal px-6 py-8 mb-7" placeholder='Your message' rows={4} />
                <CustomButton children={'Submit'} />
            </div>
        </div>
    )
}
