import BannerImage from "./assets/banner.png";
import loveIcon from "./assets/love.png";
import leafIcon from "./assets/leaf.png";
function Banner() {
  return (
    <section className="font-sans relative overflow-hidden bg-[#FBF7F0]/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-5 pt-12 lg:pt-20 pb-10 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative reveal">
            <h1 className="font-body font-light text-5xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight">
              Discover Joy in <br />
              Every
              <em className="font-body italic font-medium text-terracotta text-[var(--primary-color)]">
                Recipe.
              </em>
            </h1>
            <p className="mt-8 text-lg text-ink-soft max-w-lg leading-relaxed">
              Explore thousands of delicious recipes, cook with love and share
              the joy of cooking with your Loved ones.
            </p>

            <div className="mt-10 flex items-end gap-10 pt-8 border-t border-cream-dark max-w-lg">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-4">
                  <div className="feature-card bg-white rounded-2xl p-1 sm:p-2 flex items-center gap-1 sm:gap-1 shadow-sm border border-orange-50">
                    <div className="icon-circle flex-shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-orange-50 flex items-center justify-center">
                      <img
                        src={leafIcon}
                        alt="Easy to Cook"
                        className="w-8 h-8 sm:w-9 sm:h-9"
                      />
                    </div>
                    <div className="min-w-0 ">
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-1">
                        Easy to Cook
                      </h3>
                      <p className="text-sm sm:text-base text-black leading-relaxed">
                        Simple & tasty recipes
                      </p>
                    </div>
                  </div>

                  <div className="feature-card bg-white rounded-2xl p-1 sm:p-2 flex items-center gap-1 sm:gap-1 shadow-sm border border-orange-50 sm:col-span-2 lg:col-span-1">
                    <div className="icon-circle flex-shrink-0 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-pink-50 flex items-center justify-center">
                      <img
                        src={loveIcon}
                        alt="Made with Love"
                        className="w-8 h-8 sm:w-9 sm:h-9"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-[var(--primary-color)] mb-1">
                        Made with Love
                      </h3>
                      <p className="text-sm sm:text-base text-black leading-relaxed">
                        For you &amp; your family
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="img-frame relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={BannerImage}
                alt="Featured dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
