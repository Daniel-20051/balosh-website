import React from "react";

const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16h-2v-3H6v3H4zm4-9h2v2H8v-2zm0-4h2v2H8V8zm4 4h2v2h-2v-2zm0-4h2v2h-2V8zM6 18h8v-2H6v2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.85 22 2 13.15 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5V11h4V6h2v7z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
  </svg>
);

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-1 border-gray-200 bg-white p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default function ContactDetails() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-3xl text-base md:text-lg text-gray-600">
          Whether you&apos;re looking to upgrade your current security system or
          implement a new access control solution, our team of experts is ready
          to help you achieve your security goals.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                <BuildingIcon />
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Head Office
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  15b Omorinre Johnson Street, Lekki Phase I,
                  <br /> Lagos 106104, Lagos
                  <br /> Nigeria
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=15b%20Omorinre%20Johnson%20Street%2C%20Lekki%20Phase%20I%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:underline"
                >
                  <ExternalIcon /> Get Directions
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                <PhoneIcon />
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Phone Support
                </h3>
                <ul className="mt-2 text-base text-gray-600">
                  <li>Sales: +234 802 259 6060</li>
                  {/* <li>Support: +234 (0) 123-456-7891</li>
                  <li>Emergency: +234 (0) 123-456-7892</li> */}
                </ul>
                <p className="mt-3 flex items-center gap-2 text-sm text-blue-600">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />{" "}
                  24/7 Emergency Support
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                <MailIcon />
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Email Support
                </h3>
                <ul className="mt-2 text-base text-gray-600">
                  <li>General: info@balosh.com</li>
                  <li>Sales: sales@balosh.com</li>
                  <li>Support: support@balosh.com</li>
                </ul>
                <p className="mt-3 flex items-center gap-2 text-sm text-green-600">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" />{" "}
                  Response within 24 hours
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
                <ClockIcon />
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Business Hours
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br /> Saturday: 9:00 AM - 2:00 PM
                  <br /> Sunday: Closed (Emergency support available)
                </p>
              </div>
            </div>
          </Card>

          <Card className="md:col-span-2">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Follow Us
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Stay connected for the latest updates and security insights
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="https://www.linkedin.com/company/balosh-integrated-services/"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="https://x.com/baloshng"
                  aria-label="X (Twitter)"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="https://www.facebook.com/balosh1/"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-gray-700"
                  href="https://www.instagram.com/baloshng/"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
