import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FAQ } from '../components/FAQ';
import { ShoppingCart, CreditCard, Package, TrendingUp } from 'lucide-react';

const faqItems = [
  {
    question: "How much does an e-commerce website cost in Singapore?",
    answer: "E-commerce websites typically start from $1,500 for basic online stores. The cost depends on the number of products, payment gateways, and custom features needed. Contact us for a detailed quote based on your requirements."
  },
  {
    question: "What payment methods can I accept?",
    answer: "We can integrate PayNow, credit/debit cards (Visa, Mastercard, Amex), PayPal, Stripe, and other Singapore payment gateways. You can offer multiple payment options to make checkout convenient for customers."
  },
  {
    question: "Can I sell both products and services?",
    answer: "Yes! Our e-commerce solutions work for physical products, digital downloads, services, subscriptions, and bookings. We customize the checkout experience based on what you're selling."
  },
  {
    question: "How do I manage inventory and orders?",
    answer: "We build an easy-to-use admin dashboard where you can manage products, track inventory levels, process orders, handle refunds, and view sales analytics. You'll get automated notifications for new orders and low stock."
  },
  {
    question: "Do you handle shipping integration?",
    answer: "Yes! We can integrate with popular Singapore shipping providers including SingPost, Ninja Van, Grab Express, and international carriers like DHL and FedEx. Customers can choose their preferred shipping method at checkout."
  },
  {
    question: "Is the checkout process secure?",
    answer: "Absolutely! We implement SSL encryption, PCI compliance standards, and use trusted payment processors. Customer payment information is never stored on your website - it goes directly to secure payment gateways."
  },
  {
    question: "Can customers create accounts and track orders?",
    answer: "Yes! We can build customer account functionality where users can save addresses, view order history, track shipments, manage wishlists, and save payment methods for faster checkout."
  },
  {
    question: "Do you provide training on managing the store?",
    answer: "Yes! We provide comprehensive training on adding products, managing inventory, processing orders, handling refunds, and using all features. We'll make sure you're comfortable running your online store."
  }
];

export function EcommerceSingapore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              E-commerce Website Singapore 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Build a powerful online store for your Singapore business. Accept PayNow, credit cards, 
              and integrate with popular payment gateways.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Selling Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Complete E-commerce Solution
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <ShoppingCart className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product Management</h3>
              <p className="text-gray-600">
                Easy-to-use dashboard to manage products, pricing, and inventory.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <CreditCard className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Gateway</h3>
              <p className="text-gray-600">
                Secure payments with Stripe, PayPal, PayNow, and other SG gateways.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <Package className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Order Management</h3>
              <p className="text-gray-600">
                Track orders, manage shipping, and automate customer notifications.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics</h3>
              <p className="text-gray-600">
                Track sales, customer behavior, and optimize your conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Features Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🛒 Shopping Cart</h3>
              <p className="text-gray-600">Smooth checkout experience with cart persistence and abandoned cart recovery.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📦 Inventory Tracking</h3>
              <p className="text-gray-600">Real-time stock levels and automatic low-stock alerts.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💳 Multi-Currency</h3>
              <p className="text-gray-600">Support for SGD, USD, and other currencies for international sales.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📱 Mobile Shopping</h3>
              <p className="text-gray-600">Optimized mobile experience for customers shopping on the go.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 Secure Checkout</h3>
              <p className="text-gray-600">SSL encryption and PCI compliance for safe transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📧 Email Automation</h3>
              <p className="text-gray-600">Automated order confirmations, shipping updates, and receipts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Sell Online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Launch your e-commerce store and start generating revenue. Custom solutions from $499.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Online Store
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}