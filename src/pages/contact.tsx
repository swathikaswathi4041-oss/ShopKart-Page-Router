
import React from "react";

function page() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">

      
      <section className="bg-[#E8DCCB] py-15 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-[#8c5522] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            We'd Love To Hear From You
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#3D3027] mb-5">
            Contact Us
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-8">
            Have a question or need assistance? We're always happy
            to help you with your shopping experience.
          </p>

          <div className="w-16 h-1 bg-[#8c5522] mx-auto mt-7 rounded-full"></div>
        </div>
      </section>


      
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          
          <div className="pt-3">

            <p className="text-[#9f684f] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#35271E] mb-5 leading-tight">
              Let's Start a <br />
              <span className="text-[#9f684f]">Conversation.</span>
            </h2>

            <p className="text-gray-500 leading-8 mb-10 max-w-lg">
              We're here to make your shopping experience better.
              Whether you have questions about products, orders or
              anything else, feel free to reach out to us.
            </p>


           
            <div className="space-y-5">

             
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#eee5dc] hover:shadow-md transition">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#F3E7DB] flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-bold text-[#35271E] mb-1">
                    Phone Number
                  </h3>
                  <p className="text-gray-500 text-sm">
                    +91 98765 43210
                  </p>
                </div>
              </div>


              
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#eee5dc] hover:shadow-md transition">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#F3E7DB] flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-bold text-[#35271E] mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-500 text-sm">
                    support@ekart.com
                  </p>
                </div>
              </div>


              
              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#eee5dc] hover:shadow-md transition">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-[#F3E7DB] flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-[#35271E] mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Kannur, Kerala, India
                  </p>
                </div>
              </div>

            </div>


            
            <div className="mt-10 bg-[#E8DCCB] rounded-2xl p-6">
              <h3 className="font-bold text-[#493323] mb-2">
                We're Always Here For You!
              </h3>
              <p className="text-gray-600 text-sm leading-7">
                Your satisfaction matters to us. Get in touch and
                let us help you find exactly what you're looking for.
              </p>
            </div>

          </div>


        
          <div className="bg-white rounded-3xl p-7 md:p-10 shadow-[0_15px_50px_rgba(70,45,25,0.09)] border border-[#eee5dc]">

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#35271E] mb-3">
                Send Us a Message
              </h2>

              <p className="text-gray-500 text-sm leading-6">
                Fill out the form below and we'll get back to you
                as soon as possible.
              </p>
            </div>


            <form>

             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">

                <div>
                  <label className="block text-sm font-semibold text-[#493323] mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter first name"
                    required
                    className="w-full bg-[#FAF8F5] border border-[#e8dfd5] rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-[#9f684f] focus:ring-2 focus:ring-[#9f684f]/15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#493323] mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter last name"
                    required
                    className="w-full bg-[#FAF8F5] border border-[#e8dfd5] rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-[#9f684f] focus:ring-2 focus:ring-[#9f684f]/15"
                  />
                </div>

              </div>


              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#493323] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#FAF8F5] border border-[#e8dfd5] rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-[#9f684f] focus:ring-2 focus:ring-[#9f684f]/15"
                />
              </div>


            
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#493323] mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this regarding?"
                  required
                  className="w-full bg-[#FAF8F5] border border-[#e8dfd5] rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-[#9f684f] focus:ring-2 focus:ring-[#9f684f]/15"
                />
              </div>


             
              <div className="mb-7">
                <label className="block text-sm font-semibold text-[#493323] mb-2">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-[#FAF8F5] border border-[#e8dfd5] rounded-xl px-4 py-3.5 text-sm outline-none resize-none transition focus:border-[#9f684f] focus:ring-2 focus:ring-[#9f684f]/15"
                ></textarea>
              </div>


              
              <button
                type="submit"
                className="w-full bg-[#8c5522] text-white font-semibold py-4 rounded-xl hover:bg-[#704219] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <span>→</span>
              </button>

              <p className="text-center text-xs text-gray-400 mt-5">
                We value your privacy. Your information is safe with us.
              </p>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
}

export default page;
