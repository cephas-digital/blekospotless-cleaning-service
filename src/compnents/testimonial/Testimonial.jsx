export default function Testimonial() {
  return (
    <div className="mx-auto lg:px-24 md:px-20 px-8  p-4 md:p-8 py-16">
      <h2 className="text-4xl lg:text-[48px] lg:font-[700] Neue-Regrade font-bold text-center text-[#1D1E1C] mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 font-Inter md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="relative  font-Inter">
          <div className="bg-sky-200 p-10 rounded-2xl text-center h-full pb-16">
            <p className="text-gray-800">
              "I've been using their residential cleaning service for over a
              year, and I couldn't be happier! The team is professional,
              thorough, and always leaves my home sparkling clean. They are also
              very reliable and easy to schedule with. Highly recommended!"
            </p>
          </div>
          <div className="absolute bottom-0 left-8">
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-medium text-gray-800">— Olivia M</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="relative font-Inter">
          <div className="bg-sky-200 p-10 rounded-2xl text-center h-full pb-16">
            <p className="text-gray-800">
              "Our office has never looked better! The cleaning team is
              punctual, efficient, and thorough. We appreciate their attention
              to detail, especially in high-traffic areas like the kitchen and
              bathrooms. It's clear they care about maintaining a clean and
              healthy workspace. We highly recommend their services!"
            </p>
          </div>
          <div className="absolute bottom-0 left-8">
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-medium text-gray-800">— James T</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="relative font-Inter ">
          <div className="bg-sky-500 p-10 rounded-2xl text-center h-full pb-16">
            <p className="text-white">
              "After a renovation, we hired this company for post-construction
              cleaning, and they did an amazing job! They removed all the dust
              and debris, and the place was ready for us to move in right away.
              Professional, quick, and reliable. We'll definitely be using them
              again!"
            </p>
          </div>
          <div className="absolute bottom-0 left-8">
            <div className="bg-white py-2 px-4 rounded-full shadow-sm">
              <p className="font-medium text-gray-800">— Grace L</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
