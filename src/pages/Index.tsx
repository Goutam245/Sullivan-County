import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CircularTextSection } from '@/components/CircularTextSection';
import { WhyRunningSection } from '@/components/WhyRunningSection';
import { PublicSafetySection } from '@/components/PublicSafetySection';
import { DistrictSection } from '@/components/DistrictSection';
import { QuoteSlider } from '@/components/QuoteSlider';
import { VoteReadySection } from '@/components/VoteReadySection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <HeroSection />
        <CircularTextSection />
        <WhyRunningSection />
        <PublicSafetySection />
        <DistrictSection />
        <QuoteSlider />
        <VoteReadySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
