import { 
  Smartphone, 
  Search, 
  Zap, 
  Palette, 
  Mail, 
  Image,
  Clock,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique design tailored to your brand - no generic templates.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Perfect display on all devices - phones, tablets, and desktops.',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Optimized for search engines to help people find your business.',
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Lightning-fast performance for better user experience.',
  },
  {
    icon: Mail,
    title: 'Contact Forms',
    description: 'Professional contact forms to capture leads and inquiries.',
  },
  {
    icon: Image,
    title: 'Image Gallery',
    description: 'Beautiful galleries to showcase your products or portfolio.',
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Your website delivered within 7-10 days.',
  },
  {
    icon: Headphones,
    title: 'Support Included',
    description: '30 days of free support after your site goes live.',
  },
];

export function FreeFeatures() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything Included in Your $99 Website
          </h2>
          <p className="text-xl text-gray-600">
            Professional features worth $499 - yours for just $99
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mt-16 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your $99 Website Includes:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Up to 5 custom pages',
              'Professional design',
              'Mobile-friendly layout',
              'Contact form setup',
              'Social media links',
              'Google Analytics setup',
              'SEO optimization',
              'Image optimization',
              '2 rounds of revisions',
              'SSL certificate setup',
              'Speed optimization',
              '30 days free support',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}