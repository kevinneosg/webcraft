import { ArrowRight, Gift, AlertCircle, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FreeHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Limited Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-400 rounded-full px-6 py-3 mb-6 animate-pulse">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-gray-900">
              SPECIAL OFFER: First 5 Singapore Businesses Only!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Website<br />
            <span className="text-emerald-600">Only $99 🇸🇬</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Get a modern, high-performance website for just $99 one-time fee. 
            You pay for domain and hosting separately - we build everything else!
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl">✓</span>
              <span className="font-semibold">Professional Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl">✓</span>
              <span className="font-semibold">Modern Tech Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl">✓</span>
              <span className="font-semibold">SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl">✓</span>
              <span className="font-semibold">Mobile Responsive</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#apply"
              className="px-10 py-5 bg-emerald-600 text-white text-lg font-bold rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Claim $99 Offer - Only 3 Spots Left!
            </a>
            <a
              href="#pricing"
              className="px-10 py-5 bg-white text-emerald-600 text-lg font-bold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              See What's Included
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              <span>Rated 5/5</span>
            </div>
            <div>✓ Singapore-Based Team</div>
            <div>✓ 7-14 Day Delivery</div>
            <div>✓ Save $400 (Regular: $499)</div>
          </div>

          {/* Urgency Message */}
          <div className="mt-10 bg-red-50 border-2 border-red-300 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-red-800 font-bold text-lg">
              ⏰ Only 3 spots remaining! This $99 special offer ends when we reach 5 businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}