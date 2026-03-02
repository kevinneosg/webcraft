import { 
  Smartphone, 
  Search, 
  Zap, 
  Lock, 
  Code, 
  HeartHandshake 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Smartphone,
  Search,
  Zap,
  Lock,
  Code,
  HeartHandshake,
};

export interface FeaturesProps {
  title?: string;
  description?: string;
  features?: {
    icon?: string;
    title?: string;
    description?: string;
  }[];
}

const defaultFeatures = [
  {
    icon: 'Code',
    title: 'Custom Development',
    description: 'Hand-coded websites built from scratch with clean, efficient code tailored to your business needs.',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Design',
    description: 'Perfect display across all devices - desktop, tablet, and mobile for optimal user experience.',
  },
  {
    icon: 'Search',
    title: 'SEO Optimized',
    description: 'Built with search engine best practices to help your business rank higher on Google.',
  },
  {
    icon: 'Zap',
    title: 'Fast Performance',
    description: 'Lightning-fast load times with optimized code and images for better conversion rates.',
  },
  {
    icon: 'Lock',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL certificates and regular security updates.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Ongoing Support',
    description: '30 days of complimentary support and training after your website launches.',
  },
];

export function Features({
  title = 'Complete Web Design Solutions for Singapore Businesses',
  description = 'Everything you need to establish a powerful online presence',
  features = defaultFeatures,
}: FeaturesProps) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => {
            const Icon = iconMap[feature.icon || 'Code'] || Code;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}