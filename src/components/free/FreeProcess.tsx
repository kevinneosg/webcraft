import { FileText, MessageSquare, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Apply Now',
    description: 'Fill out a simple application form telling us about your business and website needs.',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Consultation Call',
    description: 'We\'ll have a quick chat to understand your vision and requirements.',
  },
  {
    icon: Code,
    number: '03',
    title: 'We Build It',
    description: 'Our team creates your custom website while you focus on your business.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Support',
    description: 'Your website goes live! Plus 30 days of free support included.',
  },
];

export function FreeProcess() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Get Your $99 Website
          </h2>
          <p className="text-xl text-gray-600">
            Simple 4-step process to claim your special offer
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent -z-10" />
              )}
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                {/* Number Badge */}
                <div className="text-6xl font-bold text-emerald-100 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-emerald-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg border-2 border-emerald-200">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Total Timeline:</span>
              <span className="text-2xl font-bold text-emerald-600">7-10 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}