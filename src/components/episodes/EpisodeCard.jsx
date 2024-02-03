export default function EpisodeCard({text}){
    return (
        <div className="flex flex-col gap-7">
            <div className="bg-zinc-500 bg-opacity-40 rounded-[30px] background-blur-[20px] w-[354px] h-[199px]"></div>
            <p className="text-center text-[25px] font-bold font-raleway px-7">{text}</p>
        </div>
    )
}