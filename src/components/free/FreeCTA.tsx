import { Send, Users } from 'lucide-react';

export function FreeCTA() {
  return (
    <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-green-600 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Claim Your $99 Website?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Only 3 spots left for Singapore businesses. Apply now before it's too late!
          </p>
          <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg animate-pulse">
            ⚡ Special $99 Offer: First 5 Businesses Only
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900">
          <h3 className="text-2xl font-bold mb-6 text-center">Claim Your $99 Website</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="John Tan"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="john@company.com.sg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="+65 1234 5678"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Your Business Pte Ltd"
                />
              </div>
            </div>

            <div>
              <label htmlFor="uen" className="block text-sm font-semibold mb-2">
                UEN Number (Singapore Business Registration) *
              </label>
              <input
                type="text"
                id="uen"
                name="uen"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                placeholder="201234567A"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option value="">Select your industry</option>
                <option value="retail">Retail</option>
                <option value="fnb">Food & Beverage</option>
                <option value="healthcare">Healthcare</option>
                <option value="professional">Professional Services</option>
                <option value="technology">Technology</option>
                <option value="construction">Construction</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-semibold mb-2">
                Current Website (if any)
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-semibold mb-2">
                What do you need on your website? *
              </label>
              <textarea
                id="requirements"
                name="requirements"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                placeholder="Describe what pages and features you need (e.g., Home, About, Services, Contact Form, etc.)"
              ></textarea>
            </div>

            <div>
              <label htmlFor="testimonial" className="block text-sm font-semibold mb-2">
                Will you provide a testimonial and allow us to showcase your website? *
              </label>
              <select
                id="testimonial"
                name="testimonial"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, happy to provide testimonial</option>
                <option value="maybe">Maybe, can discuss</option>
                <option value="no">No, prefer not to</option>
              </select>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I confirm that I have a registered Singapore business and understand that I'll pay $99 
                  for the website build plus domain registration and hosting costs separately. I agree to provide a 
                  testimonial if selected for this special offer.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 text-white text-lg font-bold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Application - Claim $99 Offer
            </button>

            <p className="text-center text-sm text-gray-500">
              Applications reviewed within 48 hours. We'll contact qualified businesses directly.
            </p>
          </form>
        </div>

        {/* Urgency Footer */}
        <div className="mt-8 text-center">
          <p className="text-xl font-bold">
            ⏰ Don't miss out - only 3 of 5 spots remaining at $99!
          </p>
        </div>
      </div>
    </section>
  );
}