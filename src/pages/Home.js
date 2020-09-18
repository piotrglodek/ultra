import React from 'react';
import { Section } from '../components';
import MobileMarketingImg from '../assets/mobile_marketing.svg';
import SetupAnalyticsImg from '../assets/setup_analytics.svg';
import ClientImg from '../assets/client.jpg';
import SafeImg from '../assets/safe.svg';

const headerSectionProps = {
  theme: 'dark',
  sectionImgSrc: MobileMarketingImg,
  subtitle: 'Marketing Agency',
  heading: 'Lead Generation Specialist for Online Businesses',
  text:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  isButton: true,
  buttonText: 'Get started',
  isReversed: false,
  altImageText: 'mobile marketing',
};

const secondSectionProps = {
  theme: 'light',
  sectionImgSrc: SetupAnalyticsImg,
  subtitle: 'Instant Setup',
  heading: 'Extremely quick onboarding process',
  text: `Once you've joined, our team of specialist will reach out to you and get you set up in minutes.`,
  isButton: true,
  buttonText: 'Learn more',
  isReversed: true,
  altImageText: 'setup analytics',
};

const opinionSectionProps = {
  theme: 'dark',
  sectionImgSrc: ClientImg,
  subtitle: 'Sarah Jeni',
  heading:
    'Ultra helped me increase my revenue by over 3X in less than 3 months!',
  text: `Their team is wonderful! I can't believe I didn't start working with them earlier.`,
  isButton: false,
  buttonText: '',
  isReversed: false,
  altImageText: 'Photo by Christina Morillo from Pexels',
};

const thirdSectionProps = {
  theme: 'light',
  sectionImgSrc: SafeImg,
  subtitle: 'Secure Database',
  heading: 'All your data is stored on our secure server',
  text:
    'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
  isButton: true,
  buttonText: 'See pricing plan',
  isReversed: true,
  altImageText: 'Safe',
};

function Home() {
  return (
    <>
      <Section sectionProps={headerSectionProps} />
      <Section sectionProps={secondSectionProps} />
      <Section sectionProps={opinionSectionProps} />
      <Section sectionProps={thirdSectionProps} />
    </>
  );
}

export default Home;
