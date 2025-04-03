import footerImg from "../../assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white mx-auto lg:px-24 md:px-20 px-8 font-Inter py-12">
      <div className="lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <div className="w-40">
              {/* Logo placeholder */}
              <div className="text-white font-bold text-2xl">
                {/* <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                    <path
                      fillRule="evenodd"
                      d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Skillbridge
                </span> */}
                <img
                  src={footerImg}
                  alt="footer"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span>hello@skillbridge.com</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span>+91 91813 23 2309</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* First Navigation Column */}
          <div className="space-y-4">
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              Our Services
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              Why Choose Us
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              What Our Customers Say
            </a>
          </div>

          {/* Second Navigation Column */}
          <div className="space-y-4">
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              About Company
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              Our Services
            </a>
            <a
              href="#"
              className="block hover:text-gray-300"
            >
              Why We Stand Out
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gray-500 mb-4">Social Profiles</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white p-3 rounded-md"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-md"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-md"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M6.94 5.00002C6.94 5.53002 6.81 5.96002 6.56 6.30002C6.31 6.63002 5.93 6.80002 5.44 6.80002C4.95 6.80002 4.58 6.63002 4.32 6.30002C4.06 5.96002 3.94 5.53002 3.94 5.00002C3.94 4.47002 4.07 4.04002 4.32 3.71002C4.58 3.37002 4.95 3.20002 5.44 3.20002C5.93 3.20002 6.31 3.37002 6.56 3.71002C6.81 4.04002 6.94 4.47002 6.94 5.00002ZM6.94 20.2H3.94V8.80002H6.94V20.2ZM13.94 20.2H10.94V8.80002H13.94V10.7C14.32 10.0334 14.79 9.53002 15.34 9.20002C15.9 8.86002 16.5 8.70002 17.14 8.70002C18.34 8.70002 19.27 9.08002 19.94 9.85002C20.61 10.62 20.94 11.7 20.94 13.1V20.2H17.94V13.7C17.94 12.67 17.8 11.9 17.54 11.4C17.28 10.9 16.84 10.7 16.24 10.7C15.66 10.7 15.21 10.94 14.89 11.4C14.57 11.87 14.41 12.6 14.41 13.6L13.94 20.2Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
