import { Shield, Zap, TrendingUp, Code2, X, Check } from 'lucide-react';

export function TechDifference() {
  const oldTech = [
    { label: 'WordPress (2003 technology)', icon: X, color: 'text-red-600' },
    { label: 'Slow loading times', icon: X, color: 'text-red-600' },
    { label: 'Frequent security vulnerabilities', icon: X, color: 'text-red-600' },
    { label: 'Heavy, bloated code', icon: X, color: 'text-red-600' },
    { label: 'Limited customization', icon: X, color: 'text-red-600' },
    { label: 'Poor SEO performance', icon: X, color: 'text-red-600' },
  ];

  const ourTech = [
    { label: 'Modern Tech Stack (2024)', icon: Check, color: 'text-green-600' },
    { label: 'Lightning-fast performance', icon: Check, color: 'text-green-600' },
    { label: 'Enterprise-grade security', icon: Check, color: 'text-green-600' },
    { label: 'Clean, optimized code', icon: Check, color: 'text-green-600' },
    { label: 'Fully customizable', icon: Check, color: 'text-green-600' },
    { label: 'Superior SEO optimization', icon: Check, color: 'text-green-600' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Better Security',
      description: 'Modern architecture with built-in security, unlike WordPress\'s vulnerable plugin ecosystem.',
    },
    {
      icon: TrendingUp,
      title: 'Improved SEO',
      description: 'Optimized code and fast loading times mean better search engine rankings for your business.',
    },
    {
      icon: Zap,
      title: 'Superior Performance',
      description: '10x faster than WordPress sites with zero bloat. Your visitors will notice the difference.',
    },
    {
      icon: Code2,
      title: 'Custom Solutions',
      description: 'Built specifically for your needs, not constrained by outdated WordPress limitations.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Why We're Different
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We Don't Build with WordPress
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            While others use outdated 2003 technology, we build with modern tools: 
            <span className="font-bold text-blue-600"> Vercel, PostgreSQL, and Payload CMS</span>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Old Technology */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-red-100 rounded-full p-4 mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                WordPress Websites
              </h3>
              <p className="text-gray-600">20+ year old technology</p>
            </div>
            <div className="space-y-3">
              {oldTech.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Technology */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-green-100 rounded-full p-4 mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Custom Websites
              </h3>
              <p className="text-gray-600">Modern tech stack</p>
            </div>
            <div className="space-y-3">
              {ourTech.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Modern Technology Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Vercel</h4>
              <p className="text-sm text-gray-600">
                Ultra-fast hosting with global CDN for instant page loads
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🗄️</div>
              <h4 className="font-bold text-gray-900 mb-2">PostgreSQL</h4>
              <p className="text-sm text-gray-600">
                Enterprise-grade database for secure, reliable data management
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold text-gray-900 mb-2">Payload CMS</h4>
              <p className="text-sm text-gray-600">
                Modern, flexible content management built for developers
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <p className="text-lg font-bold text-gray-900 mb-2">
              💡 The Bottom Line
            </p>
            <p className="text-gray-700 max-w-2xl">
              WordPress was great in 2003. But it's 2026 now. Your business deserves modern technology 
              that's faster, more secure, and built for today's web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
