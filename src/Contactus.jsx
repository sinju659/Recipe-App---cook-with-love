import contactImg from "./assets/contact.jpg";
import Footer from "./Footer";

function Contactus() {
  return (
    <main>
      <section className="font-sans py-10 pt-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-[var(--primary-color)] mt-3"
              data-aos="zoom-in"
            >
              Get In Touch With Us
            </h2>

            <p className="text-black mt-4 max-w-2xl mx-auto">
              Whether you need cooking tips, recipe suggestions, or support, our
              team is here to help you anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl shadow-lg">
            <div className="bg-[var(--primary-color)] text-white p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Let’s Talk About Food</h3>

              <p className="text-gray-200 leading-relaxed mb-8">
                Feel free to contact us anytime for recipe ideas and support.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">📧</div>

                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-200">hello@cookwithlove.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">📞</div>

                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-200">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">📍</div>

                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-200">Tamil nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px]">
              <img
                src={contactImg}
                alt="contactus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Contactus;
