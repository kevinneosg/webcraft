import { FreeHeader } from '../components/free/FreeHeader';
import { FreeHero } from '../components/free/FreeHero';
import { Partners } from '../components/Partners';
import { TechDifference } from '../components/TechDifference';
import { FreeFeatures } from '../components/free/FreeFeatures';
import { FreeProcess } from '../components/free/FreeProcess';
import { FreePricing } from '../components/free/FreePricing';
import { FreeCTA } from '../components/free/FreeCTA';
import { FAQ } from '../components/FAQ';
import { FreeFooter } from '../components/free/FreeFooter';

const faqItems = [
  {
    question: "Why only $99? What's the catch?",
    answer: "This is a limited special offer for the first 5 Singapore businesses only. We're building our portfolio and need testimonials. The regular price is $499. You pay $99 for the website build, plus your domain ($15-30/year) and hosting ($20-30/month) paid directly to providers."
  },
  {
    question: "Why are you offering this $99 special?",
    answer: "We're a growing agency building our portfolio with real Singapore businesses. Your success story and testimonial are valuable to us. Plus, we hope you'll refer us to other businesses or upgrade to our premium services later."
  },
  {
    question: "How many spots are left at $99?",
    answer: "Only 3 spots remaining out of 5! This offer is extremely limited and once we reach 5 businesses, the price returns to $499. First come, first served based on application approval."
  },
  {
    question: "What happens after the $99 website is built?",
    answer: "The website is yours to keep! You own it completely. You'll need to continue paying for hosting ($20-30/month) and domain renewal annually to the providers. We offer optional maintenance packages starting at $99/month if you need ongoing support."
  },
  {
    question: "How long does it take to build?",
    answer: "Typically 7-14 days from application approval to launch. We work quickly to get your business online and generating leads as soon as possible."
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor changes during the first month are included. After that, you can either learn to use the CMS to make changes yourself (we'll train you), or purchase our maintenance package starting at $99/month."
  },
  {
    question: "Who qualifies for this $99 special offer?",
    answer: "Singapore-registered businesses only (companies, sole proprietors, or LLPs). We prioritize businesses that can provide a testimonial and allow us to showcase the website in our portfolio."
  },
  {
    question: "Can I upgrade to more features later?",
    answer: "Absolutely! You can always add e-commerce, advanced integrations, additional pages, or custom functionality. We'll provide a custom quote for any upgrades you need."
  }
];

export function FreeLanding() {
  return (
    <div className="min-h-screen bg-white">
      <FreeHeader />
      <FreeHero />
      <Partners />
      <TechDifference />
      <FreeFeatures />
      <FreeProcess />
      <FreePricing />
      <FAQ items={faqItems} title="Free Website Offer - FAQ" />
      <FreeCTA />
      <FreeFooter />
    </div>
  );
}