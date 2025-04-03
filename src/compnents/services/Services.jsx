export default function Services() {
  return (
    <div className="mx-auto lg:px-24 md:px-20 px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-[48px] font-Neue lg:font-[700] font-bold text-[#1D1E1C] mb-4">
          Our Services
        </h2>
        <p className="max-w-3xl text-xl leading-8 mx-auto text-[#1D1E1C]">
          We provide a wide range of professional cleaning and facility
          management solutions for residential and commercial spaces.
        </p>
      </div>

      <div className="grid  font-Inter py-4  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
        <div className="relative bg-[#C5EEFF] rounded-lg p-10 text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            {/* <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20C5 20 30 5 60 20C90 35 115 20 115 20"
                stroke="#0066CC"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg> */}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 flex items-center justify-center gap-2">
            Residential Cleaning{" "}
            <span
              role="img"
              aria-label="house"
            >
              🏠
            </span>
          </h3>

          <p className="text-[#000000] leading-8">
            A clean home is a happy home! We offer thorough cleaning services
            for apartments, houses, and estates to keep your space fresh and
            tidy.
          </p>
        </div>

        <div className="relative bg-[#C5EEFF] rounded-lg p-6 text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            {/* <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20C5 20 30 5 60 20C90 35 115 20 115 20"
                stroke="#0066CC"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg> */}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 flex items-center justify-center gap-2">
            Janitorial & Office Cleaning{" "}
            <span
              role="img"
              aria-label="office building"
            >
              🏢
            </span>
          </h3>

          <p className="text-[#000000] leading-8">
            A clean workspace boosts productivity! We provide daily and periodic
            cleaning services to ensure a healthy office environment.
          </p>
        </div>

        <div className="relative bg-[#C5EEFF] rounded-lg p-6 text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            {/* <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 20C5 20 30 5 60 20C90 35 115 20 115 20"
                stroke="#0066CC"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg> */}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 flex items-center justify-center gap-2">
            Carpet & Upholstery Cleaning{" "}
            <span
              role="img"
              aria-label="couch"
            >
              🛋️
            </span>
          </h3>

          <p className="text-[#000000] leading-8">
            We provide a wide range of professional cleaning and facility
            management solutions for residential and commercial spaces.
          </p>
        </div>
      </div>

      <div className="text-right mt-8">
        <a
          href="/about"
          className="font-medium text-[#000000] leading-8 hover:text-blue-600"
        >
          See all...
        </a>
      </div>
    </div>
  );
}
