
export default function CustomButton({ children }) {
    return (
        <button className="shadow rounded-full bg-orange-100 text-center text-black text-xl leading-5 font-semibold font-raleway w-[170px] py-3 ">
            {children}
        </button>
    )
}