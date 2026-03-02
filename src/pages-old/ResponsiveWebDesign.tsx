import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Smartphone, Monitor, Tablet, Layout } from 'lucide-react';

const faqItems = [
  {
    question: "What is responsive web design?",
    answer: "Responsive web design means your website automatically adapts to different screen sizes - desktop, laptop, tablet, and mobile. The layout, images, and content resize and reorganize for optimal viewing on any device."
  },
  {
    question: "Why is mobile responsiveness important in Singapore?",
    answer: "Over 60% of web traffic in Singapore comes from mobile devices. If your website doesn't work well on mobile, you're losing more than half your potential customers. Plus, Google prioritizes mobile-friendly sites in search rankings."
  },
  {
    question: "How do you test responsive design?",
    answer: "We test on real devices (iPhone, Samsung, iPad, various screen sizes) and browser tools. We check functionality, readability, button sizes, forms, navigation, and loading speed on each device type."
  },
  {
    question: "Will my existing website look the same on mobile as on desktop?",
    answer: "The design will be consistent, but the layout adapts. On mobile, navigation becomes a hamburger menu, content stacks vertically, images resize, and buttons are larger for touch. The goal is optimal usability on each device."
  },
  {
    question: "Does responsive design cost extra?",
    answer: "No! All our websites are responsive by default. It's an essential standard in modern web design. Building separate mobile and desktop sites would actually cost much more and be harder to maintain."
  },
  {
    question: "Can you make my existing non-responsive website responsive?",
    answer: "Yes! We can rebuild your website with responsive design. This often means redesigning and recoding from scratch using modern techniques, but we can migrate all your existing content."
  },
  {
    question: "How does responsive design affect SEO?",
    answer: "Very positively! Google uses mobile-first indexing, meaning they rank based on your mobile site. Non-responsive sites rank lower. Fast mobile loading speeds also boost SEO rankings significantly."
  },
  {
    question: "What about tablets - are they included in responsive design?",
    answer: "Yes! Responsive design covers all screen sizes including tablets (iPad, Android tablets). The website adapts whether someone is viewing on a small phone, large tablet, laptop, or desktop monitor."
  }
];

export function ResponsiveWebDesign() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Responsive Web Design Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Perfect on all devices - desktop, tablet, and mobile. 60% of Singapore web traffic 
              comes from mobile devices.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get Mobile-Friendly Website
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            One Website, All Devices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Monitor className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desktop</h3>
              <p className="text-gray-600">
                Full-featured experience on large screens with optimal layout.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Tablet className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tablet</h3>
              <p className="text-gray-600">
                Perfectly adapted for iPad and tablet users with touch-friendly interface.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Smartphone className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile</h3>
              <p className="text-gray-600">
                Optimized for smartphones with fast loading and easy navigation.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Layout className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible</h3>
              <p className="text-gray-600">
                Adapts seamlessly to any screen size, now and in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Responsive Design Matters
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Mobile Traffic in Singapore</h3>
              <p className="text-gray-600">
                Over 60% of website visitors in Singapore browse on mobile devices. If your site 
                isn't mobile-friendly, you're losing more than half your potential customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 Google Mobile-First Indexing</h3>
              <p className="text-gray-600">
                Google now uses the mobile version of your site for ranking. Non-responsive websites 
                rank lower in search results, reducing your visibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Better Conversion Rates</h3>
              <p className="text-gray-600">
                Mobile-optimized websites convert up to 3x better than non-responsive sites. 
                Don't lose sales because of poor mobile experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Faster Loading Times</h3>
              <p className="text-gray-600">
                Our responsive designs are optimized for mobile networks. Fast loading keeps 
                visitors engaged and reduces bounce rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Is Your Website Mobile-Friendly?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            All our websites are fully responsive and tested on real devices. Start reaching mobile customers.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Responsive Website
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}