
import CustomButton2 from '@/components/CustomButton2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import EpisodesJourneySection from '@/components/episodes/EpisodesJourneySection';
import EpisodesList from '@/components/episodes/Trending';
import Trending from '@/components/episodes/Trending';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative backdrop-blur-[25px]">
            <div className="container flex flex-col items-center justify-between bg-[url('/background.png')] bg-no-repeat max-w-[1440px] px-24 pb-12 backdrop-blur-sm overflow-hidden relative">
                <div className="w-[2038px] h-[2812px] absolute">
                    <img className="w-[1467px] h-[1735px] left-[299px] top-[101px] absolute" src="/background.png" />
                    <div className="w-[2038px] h-[3949px] left-[62px] top-[44px] absolute bg-gradient-to-t from-stone-900 to-transparent backdrop-blur-sm" />
                </div>
                <Header shownav={true} className='z-10 mt-12' />
                <div className='z-10 mt-24 mx-10'>
                    <div className='flex gap-6'>
                        <div className='flex flex-col flex-1'>
                            <div className=" text-white text-[45px] font-bold font-raleway">This, This, and That</div>
                            <div className=" text-white text-[25px] font-medium font-raleway">THE JOURNEY OF THIS PERSON</div>
                            <div className=" text-white text-[25px] font-normal font-raleway mt-6">Ea enim aliqua dolor pariatur proident cillum in consequat do laboris incididunt proident ullamco ut. Tempor laboris nulla fugiat dolore irure qui occaecat ex tempor.</div>
                            <div className='w-full h-[9px] rounded-full bg-white relative mt-12'>
                                <div className='w-[75px] h-[75px] rounded-full bg-[#77815C] absolute  left-0 top-1/2 -translate-y-1/2'>
                                    <img className='absolute top-5 left-5' src='/Vector.svg' alt='Play button' />
                                </div>
                            </div>
                        </div>
                        <div className="w-[642px] h-[362px] bg-zinc-500 bg-opacity-60 rounded-[30px]" />
                    </div>
                    <div className='flex gap-6 justify-between items-center px-10 py-7 mt-12 bg-zinc-500 bg-opacity-80 rounded-[30px]'>
                        <div className='px-6 min-w-[439px] flex flex-col gap-5'>
                            <CustomButton2 text={"Watch now on YouTube"} />
                            <CustomButton2 text={"Listen now on Spotify"} />
                            <CustomButton2 text={"Read the episode transcript"} />
                        </div>
                        <div className='flex gap-10 text-white items-center'>
                            <div className='text-end'>
                                <h6 className='text-[40px] font-bold font-raleway'>About the Guest</h6>
                                <p className='text-xl font-normal font-raleway'>Ea enim aliqua dolor pariatur proident cillum in consequat do laboris incididunt proident ullamco ut</p>
                                <p className='text-xl font-normal font-raleway mt-2'>You can view guest’s website at example.com</p>
                            </div>
                            <div className="w-[177px] h-[243px] flex-shrink-0 bg-zinc-500 bg-opacity-80 rounded-[30px]" />
                        </div>
                    </div>
                </div>
                <Footer className='z-10'/>
            </div>


        </main>
    )
}
