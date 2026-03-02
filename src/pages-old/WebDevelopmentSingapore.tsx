import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Code, Rocket, Users, Globe } from 'lucide-react';

const faqItems = [
  {
    question: "What's the difference between web design and web development?",
    answer: "Web design focuses on the visual appearance and user experience, while web development involves the actual coding and functionality. We provide both - creating beautiful designs and building them with clean, modern code."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use modern technologies: React for frontend, Node.js for backend, PostgreSQL for database, Payload CMS for content management, and Vercel for hosting. This stack is far superior to outdated platforms like WordPress."
  },
  {
    question: "Can you build custom features for my business?",
    answer: "Absolutely! We specialize in custom development. Whether you need booking systems, member portals, API integrations, custom calculators, or unique functionality - we can build it specifically for your needs."
  },
  {
    question: "Do you work with existing systems and APIs?",
    answer: "Yes! We can integrate your website with CRM systems (Salesforce, HubSpot), payment gateways, inventory systems, shipping providers, email marketing tools, and virtually any API or third-party service."
  },
  {
    question: "Is the code you write secure?",
    answer: "Security is our top priority. We follow industry best practices including encrypted connections (SSL), secure authentication, SQL injection prevention, XSS protection, and regular security updates. Much more secure than WordPress."
  },
  {
    question: "Will I own the source code?",
    answer: "Yes! Once the project is complete and paid for, you own 100% of the code. We can provide the source code repository and documentation so you're never locked into working with us (though we hope you will!)."
  },
  {
    question: "Can your websites handle high traffic?",
    answer: "Yes! Our architecture on Vercel with PostgreSQL can easily handle thousands of concurrent visitors. The infrastructure automatically scales up during traffic spikes and scales down to save costs during quiet periods."
  },
  {
    question: "Do you provide documentation and training?",
    answer: "Yes! We provide comprehensive documentation for any custom features, plus training on how to use the CMS to manage your content. We want you to feel confident managing your website."
  }
];

export function WebDevelopmentSingapore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Development Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Custom web development services using modern technologies. No WordPress - we build 
              with Vercel, PostgreSQL, and Payload CMS for superior performance.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Modern Web Development Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Code className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Code</h3>
              <p className="text-gray-600">
                Hand-crafted, optimized code specifically built for your business requirements.
              </p>
            </div>
            <div className="text-center p-6">
              <Rocket className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Deployment</h3>
              <p className="text-gray-600">
                Deployed on Vercel's global CDN for lightning-fast performance worldwide.
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business. Handle thousands of visitors effortlessly.
              </p>
            </div>
            <div className="text-center p-6">
              <Globe className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600">
                Connect to any third-party service. CRM, payments, analytics, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Technologies We Use
          </h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frontend Development</h3>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS - Modern, responsive interfaces</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Backend Development</h3>
                <p className="text-gray-600">Node.js, PostgreSQL, Payload CMS - Robust and secure backend</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hosting & Deployment</h3>
                <p className="text-gray-600">Vercel, AWS - Enterprise-grade infrastructure</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics & SEO</h3>
                <p className="text-gray-600">Google Analytics, Search Console - Track and optimize performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Custom Web Development?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and build something amazing together.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}