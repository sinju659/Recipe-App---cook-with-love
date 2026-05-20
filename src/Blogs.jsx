import blogImg from "./assets/blog.png";
import Footer from "./Footer";
function Blogs() {
  return (
    <main>
      <section className="font-sans py-10 pt-25 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-full">
              <img
                src={blogImg}
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <span className="inline-block bg-[#690b22]/10 text-[var(--primary-color)] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Food Blog
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-5">
                Delicious Homemade Recipes For Every Occasion
              </h2>

              <p className="text-black text-lg leading-relaxed mb-6">
                Discover easy and tasty recipes made with love. From quick
                breakfasts to special dinner ideas, explore dishes that bring
                happiness to your table.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-black">Cook with Love</h4>
                  <p className="text-sm text-black">
                    May 18, 2026 • 5 min read
                  </p>
                </div>
              </div>

              <button className="bg-[var(--primary-color)] hover: text-white px-6 py-3 rounded-xl font-medium transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Blogs;
