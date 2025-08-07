export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-red-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-orange-500 font-handwriting">Balosh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Leading access control solutions that open important doors for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/solutions"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200 font-medium text-lg"
            >
              Explore Solutions
            </a>
            <a
              href="/case-studies"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200 font-medium text-lg"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
