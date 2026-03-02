import { DollarSign, Server, Globe, XCircle, CheckCircle } from 'lucide-react';

export function FreePricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You Pay
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing - no surprises, no hidden fees
          </p>
        </div>

        {/* Pricing Breakdown */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-300 p-8 md:p-12 mb-8">
            <div className="text-center mb-10">
              <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-4">
                SPECIAL OFFER - FIRST 5 BUSINESSES
              </div>
              <div className="text-6xl md:text-7xl font-bold text-emerald-600 mb-4">
                $99
              </div>
              <p className="text-xl text-gray-700 font-semibold">
                One-Time Website Build Fee
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Plus domain & hosting (paid separately)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl border border-emerald-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">💰</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">You Pay Us (One-Time)</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between items-center">
                        <span>Website Build</span>
                        <span className="text-3xl font-bold text-emerald-600">$99</span>
                      </div>
                      <p className="text-sm text-emerald-700 font-semibold">
                        Save $400 off regular $499 price!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-emerald-200">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">📅</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">You Pay Direct (Not to Us)</h3>
                    <div className="space-y-2 text-gray-600 text-sm">
                      <div className="flex justify-between">
                        <span>Domain Name</span>
                        <span className="font-semibold">$15-30/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hosting (Vercel)</span>
                        <span className="font-semibold">$20-30/month</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Paid directly to providers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl p-8 border-2 border-emerald-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Everything Included in Your $99 Build
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Custom Website Design",
                  "Up to 5 Pages",
                  "Mobile Responsive",
                  "SEO Optimization",
                  "Contact Forms",
                  "Content Management System",
                  "Google Analytics Setup",
                  "Social Media Integration",
                  "1 Month Support Included",
                  "Training on CMS Usage"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-emerald-600 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-blue-50 rounded-2xl border-2 border-blue-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Compare: $99 Special vs Regular Price
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-emerald-600 mb-2">$99</div>
                  <div className="text-sm text-gray-600">Your Price (Limited Offer)</div>
                  <div className="text-xs text-gray-500 mt-1">+ domain & hosting costs</div>
                </div>
              </div>
              <div>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-gray-400 line-through mb-2">$499</div>
                  <div className="text-sm text-gray-600">Regular Premium Package</div>
                  <div className="text-xs text-gray-500 mt-1">+ domain & hosting costs</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-xl font-bold text-emerald-600">
                You Save $400! 💰
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">Important Notes:</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>You pay us $99 one-time for complete website build - save $400 off regular price!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Domain registration (~$15-30/year) paid directly to domain registrar (GoDaddy, Namecheap, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Hosting costs (~$20-30/month) paid directly to Vercel for fast, reliable hosting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Includes 1 month support, then optional maintenance packages from $99/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>You own the website completely - no ongoing fees to us unless you want support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}