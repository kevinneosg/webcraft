import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      title: "Why WordPress is Outdated in 2026: Modern Alternatives for Singapore Businesses",
      excerpt: "WordPress was revolutionary in 2003, but it's 2026 now. Learn why modern technologies like Vercel and Payload CMS are better choices for your business website.",
      date: "March 1, 2026",
      author: "Singapore Best Web Design Team",
      category: "Web Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "The Complete Guide to SEO for Singapore Businesses in 2026",
      excerpt: "Local SEO strategies specifically for Singapore businesses. Learn how to rank higher on Google and attract more local customers.",
      date: "February 28, 2026",
      author: "Singapore Best Web Design Team",
      category: "SEO",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&q=80"
    },
    {
      title: "Mobile-First Design: Why 60% of Singapore Traffic is Mobile",
      excerpt: "With mobile traffic dominating Singapore's web landscape, responsive design isn't optional - it's essential. Here's what you need to know.",
      date: "February 25, 2026",
      author: "Singapore Best Web Design Team",
      category: "Web Design",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      title: "E-commerce in Singapore: Payment Gateway Options for 2026",
      excerpt: "Comparing PayNow, Stripe, PayPal, and other payment solutions for Singapore online stores. Which one is right for your business?",
      date: "February 20, 2026",
      author: "Singapore Best Web Design Team",
      category: "E-commerce",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
    },
    {
      title: "How Fast Should Your Website Load? Singapore Performance Standards",
      excerpt: "Website speed directly impacts your conversion rates and SEO rankings. Learn the performance standards Singapore users expect.",
      date: "February 15, 2026",
      author: "Singapore Best Web Design Team",
      category: "Performance",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Corporate Website Must-Haves for Singapore Enterprises",
      excerpt: "Essential features every corporate website in Singapore should have to establish credibility and attract B2B clients.",
      date: "February 10, 2026",
      author: "Singapore Best Web Design Team",
      category: "Corporate",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Website Security Best Practices for Singapore Businesses",
      excerpt: "Protect your business and customers with these essential website security measures. Learn about SSL, data protection, and PDPA compliance.",
      date: "February 5, 2026",
      author: "Singapore Best Web Design Team",
      category: "Security",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      title: "Cost of Building a Website in Singapore: 2026 Price Guide",
      excerpt: "Transparent breakdown of website development costs in Singapore. What you should expect to pay for quality web design services.",
      date: "January 30, 2026",
      author: "Singapore Best Web Design Team",
      category: "Business",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    }
  ];

  const categories = ["All", "Web Development", "SEO", "Web Design", "E-commerce", "Performance", "Corporate", "Security", "Business"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Web Design Insights 🇸🇬
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Tips, guides, and insights on web design, development, and digital marketing 
              for Singapore businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Featured Post
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  {posts[0].category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="text-gray-600">
              {posts.length} articles
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest web design tips, Singapore business insights, and special offers 
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            Join 500+ Singapore businesses receiving our newsletter
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
