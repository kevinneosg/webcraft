import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Search, BarChart3, Target, Award } from 'lucide-react';

const faqItems = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. You'll typically see initial improvements in 3-4 months, with significant results in 6-12 months. It depends on your industry competition, current website state, and the keywords you're targeting."
  },
  {
    question: "What's the difference between SEO and Google Ads?",
    answer: "SEO is organic (free) traffic that builds over time and provides long-term results. Google Ads is paid traffic that stops when you stop paying. SEO is more cost-effective long-term, while ads give immediate visibility."
  },
  {
    question: "Do you guarantee first page rankings on Google?",
    answer: "No reputable SEO company can guarantee specific rankings - Google's algorithm is complex and constantly changing. However, we follow proven strategies and best practices that significantly improve your chances of ranking well."
  },
  {
    question: "What is local SEO and why does it matter in Singapore?",
    answer: "Local SEO optimizes your website for 'near me' searches and Google Maps. In Singapore, many customers search for local businesses. We optimize your Google Business Profile, local citations, and location-specific content."
  },
  {
    question: "Can you improve my existing website's SEO?",
    answer: "Yes! We perform a comprehensive SEO audit, identify issues (slow loading, poor mobile experience, broken links, missing meta tags), and fix them. We also optimize content and build quality backlinks."
  },
  {
    question: "What's technical SEO?",
    answer: "Technical SEO involves optimizing your website's infrastructure: site speed, mobile responsiveness, secure HTTPS connection, proper URL structure, XML sitemaps, and structured data. Our modern tech stack excels at technical SEO."
  },
  {
    question: "Do I need to keep paying for SEO services?",
    answer: "SEO is ongoing - Google's algorithm changes, competitors improve, and content needs updates. Initial optimization gives you a boost, but ongoing SEO maintains and improves rankings. Many clients start with setup then continue with monthly maintenance."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track keyword rankings, organic traffic growth, conversion rates, bounce rates, and page load speeds. You'll receive monthly reports showing your progress, traffic sources, and which pages are performing best."
  }
];

export function SEOSingapore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SEO Services Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Rank higher on Google and get more customers. Technical SEO, content optimization, 
              and local SEO for Singapore businesses.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Improve Your Rankings
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our SEO Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Search className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical SEO</h3>
              <p className="text-gray-600">
                Optimize site speed, structure, and crawlability for search engines.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Target className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Keyword Research</h3>
              <p className="text-gray-600">
                Find the right keywords your Singapore customers are searching for.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <BarChart3 className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Track rankings, traffic, and conversions with detailed monthly reports.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Award className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local SEO</h3>
              <p className="text-gray-600">
                Optimize for "near me" searches and Google My Business in Singapore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why SEO Matters for Singapore Businesses
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📈 Increase Organic Traffic</h3>
              <p className="text-gray-600">
                97% of people search online before making a purchase. Get found by potential customers 
                actively looking for your services in Singapore.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Cost-Effective Marketing</h3>
              <p className="text-gray-600">
                SEO delivers long-term results without the ongoing costs of paid advertising. 
                Once you rank, you get free traffic month after month.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Target Local Customers</h3>
              <p className="text-gray-600">
                Local SEO helps you appear in "near me" searches and Google Maps. Perfect for 
                Singapore businesses targeting local customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Build Credibility</h3>
              <p className="text-gray-600">
                Ranking on page 1 of Google establishes your business as a trusted authority. 
                75% of users never scroll past the first page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            All our websites come with built-in SEO optimization. Get found by more customers.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get SEO-Optimized Website
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}