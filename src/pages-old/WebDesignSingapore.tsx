import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Shield, Zap, TrendingUp, CheckCircle, Star } from 'lucide-react';

const faqItems = [
  {
    question: "What is web design and why does my Singapore business need it?",
    answer: "Web design is the process of creating a professional, functional website that represents your business online. In Singapore's digital-first market, 97% of customers research online before buying. Without a quality website, you're invisible to potential customers."
  },
  {
    question: "How much does web design cost in Singapore?",
    answer: "Professional web design in Singapore typically ranges from $499 to $5,000+ depending on complexity. Our premium package starts at just $499 for a complete, modern website. We also have a limited $99 special offer for the first 5 Singapore businesses."
  },
  {
    question: "Do you only serve Singapore businesses?",
    answer: "While we specialize in Singapore businesses and understand the local market, we can work with companies anywhere. However, our free website offer is exclusively for Singapore-registered businesses."
  },
  {
    question: "What's included in your web design service?",
    answer: "Custom design, responsive layout (mobile/tablet/desktop), content management system, SEO optimization, contact forms, Google Analytics integration, social media links, and 1 month of support. Everything you need to start strong online."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes! We can redesign and modernize your existing website using our modern tech stack. We'll migrate your content, improve performance, and give you a fresh, contemporary design that converts better."
  },
  {
    question: "Will my website rank on Google?",
    answer: "We implement technical SEO best practices which gives you a strong foundation. However, ranking depends on many factors including your industry, competition, content quality, and ongoing SEO efforts. We can help with ongoing SEO services."
  },
  {
    question: "How is your web design better than DIY builders like Wix or Squarespace?",
    answer: "DIY builders limit customization, have slower loading speeds, and you don't own the code. Our custom-built websites are faster, more flexible, rank better on Google, and you have complete ownership. Plus you get professional design, not just templates."
  },
  {
    question: "Do I need to provide content and images?",
    answer: "Ideally yes - you know your business best. However, we can help with copywriting and use professional stock photos if needed. Clear, compelling content is crucial for converting visitors into customers."
  }
];

export function WebDesignSingapore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Design Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Professional web design services for Singapore businesses. Modern, fast, and 
              SEO-optimized websites built with cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#pricing"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Packages
              </a>
              <a
                href="/free-offer"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Free Website Offer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Web Design Services in Singapore
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with Vercel and modern tech stack for superior performance. Your website will load in under 2 seconds.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with PostgreSQL database. No WordPress vulnerabilities to worry about.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO Optimized</h3>
              <p className="text-gray-600">
                Built-in SEO best practices to rank higher on Google. Get found by more customers in Singapore.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Responsive</h3>
              <p className="text-gray-600">
                Perfect on all devices - desktop, tablet, and mobile. 60% of traffic comes from mobile in Singapore.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">
                Unique designs tailored to your brand. No templates, no limitations. Stand out from competitors.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🇸🇬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Singapore-Based</h3>
              <p className="text-gray-600">
                Local team that understands Singapore market. Fast communication and support in your timezone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Web Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Websites</h3>
              <p className="text-gray-600 mb-4">
                Professional corporate websites that establish credibility and attract customers. 
                Perfect for SMEs and enterprises in Singapore.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Custom design matching your brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Content management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Contact forms and integrations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Websites</h3>
              <p className="text-gray-600 mb-4">
                Powerful online stores to sell your products. Secure payment integration with 
                PayNow, Stripe, and popular Singapore payment gateways.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Product catalog management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Secure checkout process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Inventory management system</span>
                </li>
              </ul>
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
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a professional website that drives results. Starting at $499 or claim your free website offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#pricing"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Pricing
            </a>
            <a
              href="/free-offer"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Claim Free Offer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}