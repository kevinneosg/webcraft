import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Briefcase, Building2, Users2, Trophy } from 'lucide-react';

const faqItems = [
  {
    question: "What makes a good corporate website?",
    answer: "A professional corporate website should establish credibility, clearly communicate your services, showcase expertise through case studies, feature team profiles, and make it easy for potential clients to contact you. Clean design and fast loading are essential."
  },
  {
    question: "How is a corporate website different from a regular business website?",
    answer: "Corporate websites are more comprehensive with multiple pages (about, services, team, case studies, insights/blog, careers), professional tone, and features that build trust with B2B clients and stakeholders. They're designed for larger organizations and enterprises."
  },
  {
    question: "Can you help with content writing for our corporate site?",
    answer: "Yes! We offer professional copywriting services. We can craft compelling content that communicates your value proposition, showcases expertise, and speaks to your target corporate audience in Singapore and globally."
  },
  {
    question: "Do corporate websites need special compliance features?",
    answer: "Depending on your industry, yes. We can implement privacy policies, cookie consent, GDPR compliance, accessibility standards (WCAG), and secure client portals. We're familiar with requirements for financial, healthcare, and legal industries."
  },
  {
    question: "Can we update the website ourselves after launch?",
    answer: "Yes! We provide a user-friendly CMS where your team can update content, add news/blog posts, update team profiles, and add case studies. We provide training and documentation for your team."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes! We can integrate with your CRM (Salesforce, HubSpot), marketing automation tools, internal systems, career portals, and other enterprise software. We specialize in custom integrations."
  },
  {
    question: "What about multi-language support for international audiences?",
    answer: "We can build multi-language websites supporting English, Mandarin, Malay, Tamil, and other languages. Content can be easily managed separately for each language version."
  },
  {
    question: "How long does a corporate website project take?",
    answer: "Corporate websites typically take 4-8 weeks depending on complexity, number of pages, and content readiness. Rush timelines available. We work closely with your team throughout the process."
  }
];

export function CorporateWebsiteSingapore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Corporate Website Design Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Professional corporate websites for enterprises and SMEs in Singapore. 
              Establish credibility and attract high-value clients.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Corporate Packages
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Corporate Website Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Briefcase className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Design</h3>
              <p className="text-gray-600">
                Polished, corporate design that reflects your brand values and expertise.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Building2 className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Page Structure</h3>
              <p className="text-gray-600">
                About, Services, Team, Case Studies, Contact - complete site structure.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Users2 className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Profiles</h3>
              <p className="text-gray-600">
                Showcase your leadership team and build trust with potential clients.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Trophy className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
              <p className="text-gray-600">
                Display your successful projects and demonstrate your capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting Firms</h3>
              <p className="text-gray-600 mb-4">
                Management consultants, financial advisors, legal firms, and professional services.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Service portfolio showcase</li>
                <li>• Team expertise display</li>
                <li>• Client testimonials</li>
                <li>• Contact and inquiry forms</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Companies</h3>
              <p className="text-gray-600 mb-4">
                Software companies, IT services, SaaS businesses, and tech startups.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Product demonstrations</li>
                <li>• Integration capabilities</li>
                <li>• API documentation</li>
                <li>• Customer success stories</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Banks, insurance, wealth management, and fintech companies.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Secure client portals</li>
                <li>• Compliance-ready design</li>
                <li>• Financial calculators</li>
                <li>• Secure document upload</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Elevate Your Corporate Image
          </h2>
          <p className="text-xl mb-8 opacity-90">
            A professional website is essential for Singapore businesses. Stand out from competitors.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}