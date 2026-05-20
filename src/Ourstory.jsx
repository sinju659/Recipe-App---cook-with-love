import food1 from "./assets/ourstory/food1.jpg";
import food2 from "./assets/ourstory/food2.jpg";
import food3 from "./assets/ourstory/food3.jpg";
import food4 from "./assets/ourstory/food4.jpg";
import food5 from "./assets/ourstory/food5.jpg";
import Footer from "./Footer";
function Ourstory() {
  const foodImages = [food1, food2, food3, food4, food5];
  return (
    <main className="font-sans bg-[var(--secondary-color)]/20">
      <section className="relative w-full py-10 pt-15">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-[var(--primary-color)] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold leading-tight max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            Our Story
          </h2>

          <p className="mt-4 text-base sm:text-lg text-black max-w-3xl mx-auto">
            I’m Berlin Sinju, the creator behind Cook with Love. What started as
            a passion for home cooking became a place where food lovers can
            discover recipes that are easy to follow, comforting to make, and
            joyful to share. I believe cooking is more than just preparing food.
            It is a way to express care, create memories, and bring people
            together.
            <p className="mt-4 text-base sm:text-lg text-black max-w-3xl mx-auto">
              From quick weekday dinners to special celebration dishes, every
              recipe on Cook with Love is thoughtfully curated to inspire
              confidence in the kitchen. Whether you are a beginner learning
              your first recipe or an experienced cook looking for new ideas, I
              am here to make cooking enjoyable and stress-free. My goal is to
              help you turn simple ingredients into delicious meals and ordinary
              moments into cherished memories.
            </p>
            <p className="mt-5 max-w-3xl mx-auto text-center text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 font-light px-4">
              <span className="font-semibold italic text-[#5e0006]">
                Where every recipe tells a story, and every meal is made from
                the heart. <br />★ Cook with Love ★
              </span>
            </p>
          </p>
        </div>
      </section>
      <section className="py-10 pb-15 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {foodImages.map((foodImage, index) => (
              <div
                key={index}
                className="snap-card img-card shrink-0 rounded-2xl overflow-hidden bg-slate-100"
                aria-hidden="true"
              >
                <img
                  src={foodImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
export default Ourstory;
