import Badge from "@/components/ui/Badge";

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border-1 border-gray-200 bg-white p-5">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
            {icon}
          </span>
          <h4 className="text-base md:text-lg font-bold text-gray-900">
            {title}
          </h4>
        </div>
        <div>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-current"
    >
      <g clipPath="url(#clip0_4418_3354)">
        <path
          d="M15.1199 10.3095C15.1199 12.0295 13.7299 13.4295 11.9999 13.4295C10.2699 13.4295 8.87988 12.0395 8.87988 10.3095C8.87988 8.57945 10.2799 7.18945 11.9999 7.18945C12.3399 7.18945 12.6699 7.23945 12.9699 7.33945"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.97996 4.30006C10.35 0.190061 18.82 1.60006 20.38 8.51006C21.53 13.5901 18.37 17.8901 15.6 20.5501C13.59 22.4901 10.41 22.4901 8.38996 20.5501C5.62996 17.8801 2.45996 13.5801 3.61996 8.50006"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4418_3354">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l1.5-4A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 2L19 12v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2H10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4z" />
      <path d="M7 12h10" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
      <circle cx="15" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="4" width="14" height="12" rx="3" />
      <path d="M7 8h10M7 11h10" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
      <circle cx="15" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

export default function LocationSection() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <Badge text="Find Us" icon={<MapPinIcon />} />

          <h2 className="text-3xl mt-10 md:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-600">Location</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-gray-600">
            Visit our headquarters in the heart of Lagos for consultations,
            demonstrations, and technical support.
          </p>
        </div>

        <div className="mt-15 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border-1 border-gray-200 bg-white">
            <div className="relative h-64 md:h-100">
              <iframe
                title="Balosh office location"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src="https://www.google.com/maps?q=9%2C%20Osaro%20Isokpan%20street%2C%20Lekki%20Phase%201%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria&output=embed"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-gray-100 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Balosh Integrated Services
                </p>
                <p className="text-sm text-gray-600">
                  9, Osaro Isokpan street, Lekki Phase 1, Lagos, Nigeria
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9%2C%20Osaro%20Isokpan%20street%2C%20Lekki%20Phase%201%2C%20Lagos%20106104%2C%20Lagos%2C%20Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard
              icon={<CarIcon />}
              title="Parking"
              description="Free parking available on-site with secure access control system demonstration area."
            />
            <InfoCard
              icon={<BusIcon />}
              title="Public Transport"
              description="Easily accessible via BRT and local bus routes. Lekki bus stop is 200m away."
            />
            <InfoCard
              icon={<CalendarIcon />}
              title="Appointments"
              description="Schedule a visit to see our latest security solutions in action at our demonstration center."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
