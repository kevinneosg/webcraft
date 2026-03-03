import { Code2, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function FreeFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Singapore Best Web Design 🇸🇬</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern web design and development services for Singapore businesses. 
              Built with Vercel, PostgreSQL, and Payload CMS.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/web-design-singapore" className="text-gray-400 hover:text-white transition-colors">
                  Web Design Singapore
                </a>
              </li>
              <li>
                <a href="/web-development-singapore" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/ecommerce-website-singapore" className="text-gray-400 hover:text-white transition-colors">
                  E-commerce Websites
                </a>
              </li>
              <li>
                <a href="/corporate-website-singapore" className="text-gray-400 hover:text-white transition-colors">
                  Corporate Websites
                </a>
              </li>
              <li>
                <a href="/responsive-web-design" className="text-gray-400 hover:text-white transition-colors">
                  Responsive Design
                </a>
              </li>
              <li>
                <a href="/seo-services-singapore" className="text-gray-400 hover:text-white transition-colors">
                  SEO Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Premium Package
                </a>
              </li>
              <li>
                <a href="/free-offer" className="text-gray-400 hover:text-white transition-colors">
                  $99 Special Offer
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 hello@sgbestwebdesign.com</li>
              <li>📱 +65 1234 5678</li>
              <li>📍 Singapore 🇸🇬</li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-yellow-400 font-semibold">
                ⚡ Limited: First 5 customers only!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-4 mb-6">
            <div className="text-center">
              <p className="text-emerald-300 font-bold mb-1">
                🎉 Special Offer: $99 Website for First 5 Singapore Businesses
              </p>
              <p className="text-emerald-200 text-sm">
                Don't miss out - only 3 spots remaining!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Singapore Best Web Design. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}