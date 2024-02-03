import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HostSection from '@/components/HostSection';
import PartnershipSection from '@/components/PartnershipSection';
import PeopleSaySection from '@/components/PeopleSaySection';
import StorySection from '@/components/StorySection';
import EpisodesJourneySection from '@/components/episodes/EpisodesJourneySection';
import EpisodesList from '@/components/episodes/Trending';
import Trending from '@/components/episodes/Trending';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <div className="container flex flex-col items-center justify-between bg-[url('/background.png')] bg-[rgb(31,26,32)] bg-no-repeat max-w-[1440px] px-24 pb-12 backdrop-blur-sm overflow-x-hidden relative">
                <div className='bg-stone-900 w-full left-0 absolute h-[893px] backdrop-blur-sm after:h-[100px] after:bg-gradient-to-b after:from-stone-900 after:to-transparent'></div>
                <Header shownav={true} className='z-10 mt-12' />
                <h2 className='uppercase text-white text-[65px] font-bold font-raleway my-28 mix-blend-overlay z-10'>auto-playing video</h2>
                <EpisodesJourneySection />
                <div className='mt-[74px]'>
                    {/* Journey section */}
                    <h2 className="mix-blend-overlay uppercase w-full text-center text-white text-[87px] font-clash-display-bold my-32">
                        What's Your Story?
                    </h2>
                    <div className='w-full pl-36'>
                        {/* Trending section */}
                        <EpisodesList title={'Trending Now'} showFullListOption={false} />
                    </div>
                    <h3 className='text-white text-center text-6xl font-bold font-raleway'>All Episodes</h3>
                    <div className='w-full pl-36'>
                        <EpisodesList title={'Season 3'} showFullListOption={true} />

                        <EpisodesList title={'Season 2'} showFullListOption={true} />

                        <EpisodesList title={'Season 1'} showFullListOption={true} />
                    </div>
                </div>
                <Footer />
            </div>

        </main>
    )
}
