import whyweStandOutImg from "../../assets/why-we-stand-out.png";

export default function WhyWeStandOut() {
  return (
    <div className="mx-auto lg:px-24 md:px-16 px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase font-sans font-medium text-[#1D1E1C] mb-2">
              COWORK IN NUMBERS
            </p>
            <h2 className="text-5xl font-bold text-[#1D1E1C]">
              Why We Stand Out
            </h2>
          </div>

          <div className="space-y-6 font-Inter">
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
              <p className="text-xl font-medium">
                Expert Cleaning Professionals
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-200 flex-shrink-0 mt-1"></div>
              <p className="text-xl font-medium">
                Eco-Friendly & Health-Safe Cleaning
              </p>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-400 flex-shrink-0 mt-1"></div>
              <p className="text-xl font-medium">
                Customized Solutions for Every Client
              </p>
            </div>

       
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-200 flex-shrink-0 mt-1"></div>
              <p className="text-xl font-medium">
                Reliable & Flexible Scheduling
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
              <p className="text-xl font-medium">100% Satisfaction Guarantee</p>
            </div>
          </div>
        </div>

        
        <div className="rounded-3xl overflow-hidden h-[500px]">
          <img
            src={whyweStandOutImg}
            alt="Modern clean office space with conference table and chairs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
