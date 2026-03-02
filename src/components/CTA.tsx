import { Mail, MessageSquare } from 'lucide-react';

export interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function CTA({
  title = 'Ready to Grow Your Business Online?',
  description = "Join 100+ satisfied clients across Singapore. Let's discuss your project and create a website that drives real results for your business.",
  primaryButtonText = 'Email Us',
  primaryButtonLink = 'mailto:hello@singaporebestwebdesign.com',
  secondaryButtonText = 'Get Free Consultation',
  secondaryButtonLink = '#contact',
}: CTAProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          {description}
        </p>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            <Mail className="w-5 h-5" />
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg font-medium border-2 border-white/20"
          >
            <MessageSquare className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-blue-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span>Fast turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇸🇬</span>
            <span>Singapore based</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💎</span>
            <span>Premium quality</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>100% satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}