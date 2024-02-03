import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HostSection from '@/components/HostSection';
import JourneySection from '@/components/JourneySection';
import StorySection from '@/components/StorySection';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <div className="container flex flex-col items-center justify-between bg-[url('/background.png')] bg-[rgb(31,26,32)] bg-no-repeat max-w-[1440px] px-24 py-12 backdrop-blur-sm">
                <Header />
                <div className='mt-[74px]'>
                    {/* Journey section */}
                    <JourneySection />
                    {/* Story section */}
                    <StorySection />
                    {/* Hosts section */}
                    <HostSection />
                </div>
                <Footer />
            </div>

        </main>
    )
}