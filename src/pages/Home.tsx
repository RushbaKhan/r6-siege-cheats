import { HeroSection } from '../components/HeroSection';
import { LazySection, lazySection } from '../components/DeferredSection';

const SafetySection = lazySection(() => import('../components/SafetySection'), 'SafetySection');
const FeaturesGrid = lazySection(() => import('../components/FeaturesGrid'), 'FeaturesGrid');
const HowItWorks = lazySection(() => import('../components/HowItWorks'), 'HowItWorks');
const Integrations = lazySection(() => import('../components/Integrations'), 'Integrations');
const SupportBanner = lazySection(() => import('../components/SupportBanner'), 'SupportBanner');
const VideoShowcase = lazySection(() => import('../components/VideoShowcase'), 'VideoShowcase');
const PricingFaqSection = lazySection(() => import('../components/PricingFaqSection'), 'PricingFaqSection');
const BlogPreview = lazySection(() => import('../components/BlogPreview'), 'BlogPreview');
const SeoContentSection = lazySection(() => import('../components/SeoContentSection'), 'SeoContentSection');
const DiscordSupport = lazySection(() => import('../components/DiscordSupport'), 'DiscordSupport');

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LazySection component={SafetySection} fallbackMinHeight="520px" />
      <LazySection component={FeaturesGrid} fallbackMinHeight="480px" />
      <LazySection component={HowItWorks} fallbackMinHeight="420px" />
      <LazySection component={Integrations} fallbackMinHeight="320px" />
      <LazySection component={SupportBanner} fallbackMinHeight="180px" />
      <LazySection component={VideoShowcase} fallbackMinHeight="360px" />
      <LazySection component={PricingFaqSection} fallbackMinHeight="420px" />
      <LazySection component={BlogPreview} fallbackMinHeight="360px" />
      <LazySection component={SeoContentSection} fallbackMinHeight="320px" />
      <LazySection component={DiscordSupport} fallbackMinHeight="240px" />
    </>
  );
}
