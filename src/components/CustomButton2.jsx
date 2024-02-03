import { FaChevronRight } from "react-icons/fa6";

export default function CustomButton2({ text }) {
    return (
        <button className="shadow rounded-full bg-white text-center text-black text-xl leading-5 font-semibold font-raleway w-full py-3 pl-7 pr-5 flex justify-between">
            {text} <FaChevronRight/>
        </button>
    )
}