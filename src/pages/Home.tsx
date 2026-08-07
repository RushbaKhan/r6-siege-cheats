import { HeroSection } from '../components/HeroSection';
import { HomeSeoIntro } from '../components/HomeSeoIntro';
import { SafetySection } from '../components/SafetySection';
import { Testimonials } from '../components/Testimonials';
import { SeoContentSection } from '../components/SeoContentSection';
import { LazySection, lazySection } from '../components/DeferredSection';

const FeaturesGrid = lazySection(() => import('../components/FeaturesGrid'), 'FeaturesGrid');
const HowItWorks = lazySection(() => import('../components/HowItWorks'), 'HowItWorks');
const Integrations = lazySection(() => import('../components/Integrations'), 'Integrations');
const SupportBanner = lazySection(() => import('../components/SupportBanner'), 'SupportBanner');
const PricingFaqSection = lazySection(() => import('../components/PricingFaqSection'), 'PricingFaqSection');
const BlogPreview = lazySection(() => import('../components/BlogPreview'), 'BlogPreview');
const DiscordSupport = lazySection(() => import('../components/DiscordSupport'), 'DiscordSupport');

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SafetySection />
      <LazySection component={FeaturesGrid} fallbackMinHeight="480px" />
      <LazySection component={HowItWorks} fallbackMinHeight="420px" />
      <LazySection component={Integrations} fallbackMinHeight="320px" />
      <LazySection component={SupportBanner} fallbackMinHeight="180px" />
      <LazySection component={PricingFaqSection} fallbackMinHeight="420px" />
      <Testimonials />
      <LazySection component={BlogPreview} fallbackMinHeight="360px" />
      <HomeSeoIntro />
      <SeoContentSection />
      <LazySection component={DiscordSupport} fallbackMinHeight="240px" />
    </>
  );
}
