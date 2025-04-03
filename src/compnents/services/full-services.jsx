export default function FullServices() {
  const services = [
    {
      title: "Residential Cleaning",
      emoji: "🏠",
      description:
        "A clean home is a happy home! We offer thorough cleaning services for apartments, houses, and estates to keep your space fresh and tidy.",
      bgColor: "bg-sky-100",
    },
    {
      title: "Janitorial & Office Cleaning",
      emoji: "🏢",
      description:
        "A clean workspace boosts productivity! We provide daily and periodic cleaning services to ensure a healthy office environment.",
      bgColor: "bg-sky-100",
    },
    {
      title: "Carpet & Upholstery Cleaning",
      emoji: "🛋️",
      description:
        "We provide a wide range of professional cleaning and facility management solutions for residential and commercial spaces.",
      bgColor: "bg-sky-500",
    },
  ];

  const servicePattern = [
    { ...services[0], bgColor: "bg-sky-100" },
    { ...services[1], bgColor: "bg-sky-100" },
    { ...services[2], bgColor: "bg-sky-500" },

    { ...services[1], bgColor: "bg-sky-100" },
    { ...services[2], bgColor: "bg-sky-500" },
    { ...services[0], bgColor: "bg-sky-100" },

    { ...services[2], bgColor: "bg-sky-500" },
    { ...services[0], bgColor: "bg-sky-100" },
    { ...services[1], bgColor: "bg-sky-100" },
  ];

  return (
    <div className=" lg:px-24 md:px-16 px-8 mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold font-Neue text-[#1D1E1C] mb-4">
          Our Services
        </h2>
        <p className="max-w-3xl text-xl lg:w-[586px]  mx-auto text-[#1D1E1C]">
          We provide a wide range of professional cleaning and facility
          management solutions for residential and commercial spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 font-Inter py-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicePattern.map((service, index) => (
          <div
            key={index}
            className={`relative ${service.bgColor} rounded-lg p-6 text-center`}
          >
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
              {service.title}{" "}
              <span
                role="img"
                aria-label="icon"
              >
                {service.emoji}
              </span>
            </h3>

            <p
              className={`${
                service.bgColor === "bg-sky-500"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
