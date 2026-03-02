'use client';

import { Code2, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceLinks = [
    { name: "All Services", href: "/services" },
    { name: "Web Design Singapore", href: "/web-design-singapore" },
    { name: "Web Development", href: "/web-development-singapore" },
    { name: "E-commerce Websites", href: "/ecommerce-website-singapore" },
    { name: "SEO Services", href: "/seo-services-singapore" },
    { name: "Corporate Websites", href: "/corporate-website-singapore" },
    { name: "Responsive Design", href: "/responsive-web-design" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <Code2 className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">
                Singapore Best
              </span>
              <span className="font-bold text-blue-600 text-sm leading-tight">
                Web Design 🇸🇬
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              About
            </a>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#portfolio"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Portfolio
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#pricing"
              className="px-6 py-2.5 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/free-offer"
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Free Offer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1">
              <a
                href="/"
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                About
              </a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {serviceLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/#portfolio"
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/blog"
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Contact
              </a>
              <div className="border-t border-gray-200 mt-2 pt-2">
                <a
                  href="/#pricing"
                  className="block px-4 py-3 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="/free-offer"
                  className="block px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  $99 Offer
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}