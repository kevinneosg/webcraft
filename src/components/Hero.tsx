import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface HeroProps {
  badge?: string;
  title?: string;
  price?: string;
  description?: string;
  features?: { feature?: string }[];
  image?: any;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function Hero({
  badge = "🇸🇬 Singapore's Trusted Web Design Agency",
  title = "Professional Website Design",
  price = "From $499",
  description = "We create stunning, high-performing websites for businesses across Singapore. From healthcare to F&B, recruitment to creative agencies - we've got you covered.",
  features = [
    { feature: "Custom Design & Development" },
    { feature: "Mobile-First Responsive Design" },
    { feature: "SEO & Performance Optimized" },
    { feature: "Fast 7-10 Day Turnaround" }
  ],
  image,
  primaryButtonText = "View Packages",
  secondaryButtonText = "See Our Work",
}: HeroProps) {
  const imageUrl = image?.url || "https://images.unsplash.com/photo-1606792956138-f15460cd3c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBjaXR5JTIwc2t5bGluZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjMzNTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              {badge}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
              <span className="block text-blue-600">{price}</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="space-y-3">
              {features?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item.feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors text-lg font-medium"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={imageUrl}
                alt={image?.alt || "Singapore city skyline"}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 rounded-full p-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}