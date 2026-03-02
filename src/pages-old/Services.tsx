import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Globe, Code, ShoppingCart, Search, Building2, Smartphone, Palette, Wrench } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Design Singapore",
      description: "Professional, modern website design that captures your brand and converts visitors into customers.",
      features: [
        "Custom design tailored to your brand",
        "User-friendly interface",
        "Modern, clean aesthetics",
        "Mobile-first approach"
      ],
      link: "/web-design-singapore",
      color: "blue"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web development using modern technologies. No WordPress - we build with Vercel, PostgreSQL, and Payload CMS.",
      features: [
        "Custom functionality",
        "API integrations",
        "Database architecture",
        "Scalable solutions"
      ],
      link: "/web-development-singapore",
      color: "purple"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Websites",
      description: "Powerful online stores with secure payment processing, inventory management, and order tracking.",
      features: [
        "PayNow & credit card payments",
        "Product catalog management",
        "Shopping cart & checkout",
        "Order & inventory tracking"
      ],
      link: "/ecommerce-website-singapore",
      color: "green"
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Get found on Google with technical SEO optimization, keyword research, and content strategy.",
      features: [
        "Technical SEO audit",
        "Keyword research",
        "Local SEO for Singapore",
        "Monthly reporting"
      ],
      link: "/seo-services-singapore",
      color: "orange"
    },
    {
      icon: Building2,
      title: "Corporate Websites",
      description: "Professional corporate websites for enterprises and SMEs that establish credibility and attract clients.",
      features: [
        "Multi-page structure",
        "Team profiles",
        "Case studies showcase",
        "Professional branding"
      ],
      link: "/corporate-website-singapore",
      color: "slate"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Websites that work perfectly on all devices - desktop, tablet, and mobile. Essential for Singapore's mobile-first market.",
      features: [
        "Mobile optimization",
        "Cross-device compatibility",
        "Touch-friendly interface",
        "Adaptive layouts"
      ],
      link: "/responsive-web-design",
      color: "teal"
    },
    {
      icon: Palette,
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, high-performance site that drives results.",
      features: [
        "Modern design refresh",
        "Performance optimization",
        "Content migration",
        "SEO improvement"
      ],
      link: "/contact",
      color: "pink"
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website secure and performing optimally.",
      features: [
        "Security updates",
        "Content updates",
        "Performance monitoring",
        "Technical support"
      ],
      link: "/contact",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      slate: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive web design and development services for Singapore businesses. 
              From simple websites to complex e-commerce platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} flex-shrink-0`}></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className={`inline-block px-6 py-3 ${colors.bg} ${colors.text} font-semibold rounded-lg hover:opacity-80 transition-colors`}
                  >
                    Learn More →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose the package that's right for your business
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Package</h3>
                <div className="text-5xl font-bold text-blue-600 mb-2">$499</div>
                <p className="text-gray-600 mb-6">Complete website solution</p>
                <a
                  href="/#pricing"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                LIMITED
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$99 Special</h3>
                <div className="text-5xl font-bold text-green-600 mb-2">$99</div>
                <p className="text-gray-600 mb-6">First 5 Singapore businesses only</p>
                <a
                  href="/free-offer"
                  className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and find the perfect solution for your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}