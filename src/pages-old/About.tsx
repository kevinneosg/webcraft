import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Users, Target, Award, Heart } from 'lucide-react';

const faqItems = [
  {
    question: "How long have you been in business?",
    answer: "We've been creating exceptional websites for Singapore businesses since 2020. Our team has over 15 years of combined experience in web design and development."
  },
  {
    question: "Where is your team located?",
    answer: "We're based in Singapore and work with clients across the island. Our local presence means we understand the Singapore market, business culture, and can meet in person when needed."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses across all industries including healthcare, recruitment, F&B, professional services, e-commerce, technology, finance, and more. Our portfolio includes OneMed Healthcare, Rapid Recruitment Asia, and Panda Bar Singapore."
  },
  {
    question: "Do you work with startups or just established companies?",
    answer: "We work with both! From startups needing their first website to established enterprises requiring complex solutions. Our free website offer is perfect for startups, while our premium packages suit growing businesses."
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Singapore Best Web Design 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We're a Singapore-based web design agency passionate about helping local businesses 
              succeed online with modern, high-performance websites.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Founded in 2020, Singapore Best Web Design was born from a simple observation: too many 
              Singapore businesses were stuck with slow, outdated WordPress websites that hurt their 
              online presence instead of helping it.
            </p>
            <p>
              We knew there was a better way. By leveraging modern technologies like Vercel, PostgreSQL, 
              and Payload CMS, we could build websites that are faster, more secure, and more effective 
              than anything WordPress could offer.
            </p>
            <p>
              Today, we're proud to have helped dozens of Singapore businesses transform their online 
              presence. From healthcare providers to recruitment agencies, from design studios to F&B 
              establishments - we've built websites that don't just look good, they perform.
            </p>
            <p>
              Our mission is simple: help every Singapore business succeed online with websites that 
              are fast, secure, and built for results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We focus on what matters - websites that drive traffic, generate leads, and grow your business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every website is hand-crafted with attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We're not just vendors - we're partners in your success. Your growth is our success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Singapore Pride</h3>
              <p className="text-gray-600">
                We're proud to serve Singapore businesses and contribute to our local digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Modern Technology</h3>
              <p className="text-gray-600">
                We use the latest tech stack - no outdated WordPress. Your website will be fast, 
                secure, and built with technologies used by companies like Netflix and Airbnb.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Local Expertise</h3>
              <p className="text-gray-600">
                Based in Singapore, we understand the local market, business landscape, and what 
                Singapore customers expect. We speak your language - literally and figuratively.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📈 Proven Results</h3>
              <p className="text-gray-600">
                Our portfolio speaks for itself. We've built successful websites for OneMed Healthcare, 
                Rapid Recruitment Asia, Hatchery Design Studio, and Panda Bar Singapore.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🤝 Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. Our $499 premium package includes everything you need. 
                Plus, we have a limited free offer for qualified Singapore businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Trusted by leading Singapore businesses across healthcare, recruitment, design, and F&B industries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">OneMed Healthcare</h3>
              <p className="text-sm text-gray-600 mb-3">Healthcare provider website with appointment booking</p>
              <a href="https://onemed.com.sg" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                onemed.com.sg →
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Rapid Recruitment Asia</h3>
              <p className="text-sm text-gray-600 mb-3">Recruitment agency with job portal integration</p>
              <a href="https://rapidrecruitmentasia.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                rapidrecruitmentasia.com →
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Hatchery Design Studio</h3>
              <p className="text-sm text-gray-600 mb-3">Creative agency portfolio and case studies</p>
              <a href="https://hatchery.design" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                hatchery.design →
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Panda Bar Singapore</h3>
              <p className="text-sm text-gray-600 mb-3">F&B website with menu and online reservations</p>
              <a href="https://pandabar.com.sg" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                pandabar.com.sg →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build something amazing for your Singapore business. Get started today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/#pricing"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
