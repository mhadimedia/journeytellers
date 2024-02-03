import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function PartnershipSection() {
    return (
        <div className='host_section pt-28 text-white'>
            <h3 className="text-center text-white text-[65px] font-bold font-raleway pb-8">In Partnership With</h3>
            <div className='flex  justify-between'>
                <img src="/al-kisa.png" alt="Al Kisa" />
                <img src="/Ali-logo.png" alt="Ali" className="ml-[46px]"/>
                <img src="/ReKompile.png" alt="ReKompile" className="-ml-[10px]"/>
            </div>
        </div>
    )
}
