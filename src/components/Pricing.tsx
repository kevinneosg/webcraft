import { Check, Star } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Website Packages for Every Business
          </h2>
          <p className="text-xl text-gray-600">
            Professional web design that fits your budget. No hidden costs.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">Most Popular</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-600 rounded-2xl p-8 shadow-xl">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-gray-600 mb-2">Complete Website Package</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold text-gray-900">$499</span>
                  <span className="text-gray-600">one-time</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">Best value for Singapore SMEs</div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {[
                  'Up to 5 custom pages',
                  'Fully responsive design',
                  'SEO optimization',
                  'Contact form integration',
                  'Social media integration',
                  'Google Maps integration',
                  'Image gallery/slider',
                  'Fast loading speed',
                  '7-10 day delivery',
                  '2 rounds of revisions',
                  '30 days free support',
                  'Source code included',
                  'Free hosting setup assistance',
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="block w-full bg-blue-600 text-white text-center px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Get Started Today
              </a>

              {/* Additional Info */}
              <div className="mt-6 text-center text-sm text-gray-600">
                🔒 Secure payment • 💯 Satisfaction guaranteed
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need E-commerce, custom features, or enterprise solutions?
          </p>
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            Contact us for a custom quote
          </a>
        </div>
      </div>
    </section>
  );
}