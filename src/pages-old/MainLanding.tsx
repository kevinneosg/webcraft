import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { TechDifference } from '../components/TechDifference';
import { Features } from '../components/Features';
import { Portfolio } from '../components/Portfolio';
import { Pricing } from '../components/Pricing';
import { CTA } from '../components/CTA';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

const faqItems = [
  {
    question: "What makes your websites different from WordPress sites?",
    answer: "We build with modern technology (Vercel, PostgreSQL, Payload CMS) instead of outdated WordPress. This means your website is 10x faster, more secure, and has better SEO performance. No vulnerable plugins or bloated code."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Our premium $499 package typically takes 7-14 days from start to launch. This includes design, development, content integration, and testing. Rush delivery available for an additional fee."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We offer maintenance packages starting from $99/month which include updates, security monitoring, content changes, and technical support. You can also contact us for one-off changes anytime."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Absolutely! We include a user-friendly Payload CMS where you can easily update text, images, and other content without any coding knowledge. We'll provide training on how to use it."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Yes! All our websites are fully responsive and optimized for mobile, tablet, and desktop. With 60% of Singapore traffic coming from mobile, this is essential for your success."
  },
  {
    question: "Do you help with domain and hosting setup?",
    answer: "Yes, we can help you register a domain and set up hosting. We recommend Vercel for hosting (included in our service) and can guide you through domain registration with providers like GoDaddy or Unstoppable Domains."
  },
  {
    question: "Is SEO included in the package?",
    answer: "Yes! We implement technical SEO best practices including fast loading speeds, proper meta tags, structured data, mobile optimization, and clean URLs. This gives you a strong foundation for ranking on Google."
  },
  {
    question: "Can you integrate payment systems for my business?",
    answer: "Yes! We can integrate popular payment gateways including Stripe, PayPal, PayNow, and other Singapore payment providers. Perfect for e-commerce or service-based businesses."
  }
];

export function MainLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Partners />
      <TechDifference />
      <Features />
      <Portfolio />
      <Pricing />
      <FAQ items={faqItems} />
      <CTA />
      <Footer />
    </div>
  );
}