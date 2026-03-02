import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const faqItems = [
  {
    question: "How quickly can you respond to inquiries?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent requests, please mention it in your message and we'll prioritize your inquiry."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer free 30-minute consultations to discuss your project requirements, provide recommendations, and answer any questions you have about our services."
  },
  {
    question: "Can we meet in person in Singapore?",
    answer: "Absolutely! We're based in Singapore and happy to meet in person at your office or a convenient location. Video calls via Zoom or Google Meet are also available."
  },
  {
    question: "What information should I include in my inquiry?",
    answer: "Tell us about your business, what type of website you need, any specific features or requirements, your timeline, and budget if possible. The more details you provide, the better we can help."
  }
];

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In Touch 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ready to start your project? Have questions? We'd love to hear from you. 
              Reach out and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Tan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com.sg"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+65 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="seo">SEO Services</option>
                    <option value="corporate">Corporate Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="free-offer">Free Website Offer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help! Reach out through any of these channels and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 text-sm mb-2">For general inquiries and quotes</p>
                    <a href="mailto:hello@sgbestwebdesign.com" className="text-blue-600 font-semibold hover:underline">
                      hello@sgbestwebdesign.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm mb-2">Speak directly with our team</p>
                    <a href="tel:+6512345678" className="text-green-600 font-semibold hover:underline">
                      +65 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-sm mb-2">Based in Singapore 🇸🇬</p>
                    <p className="text-purple-600 font-semibold">
                      Available for in-person meetings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM SGT<br />
                      Saturday: 10:00 AM - 2:00 PM SGT<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/#pricing" className="block text-blue-600 hover:underline font-semibold">
                    → View Pricing & Packages
                  </a>
                  <a href="/free-offer" className="block text-green-600 hover:underline font-semibold">
                    → Apply for Free Offer
                  </a>
                  <a href="/services" className="block text-purple-600 hover:underline font-semibold">
                    → Browse All Services
                  </a>
                  <a href="/#portfolio" className="block text-orange-600 hover:underline font-semibold">
                    → View Our Portfolio
                  </a>
                </div>
              </div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - reach out today and let's bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@sgbestwebdesign.com"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Email Us Now
            </a>
            <a
              href="/free-offer"
              className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Claim $99 Offer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}