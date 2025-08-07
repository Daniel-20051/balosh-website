import React from "react";

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York",
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco",
  },
];

export default function OpenPositions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Open Positions
        </h2>

        <div className="space-y-0">
          {jobListings.map((job, index) => (
            <div
              key={job.id}
              className={`flex flex-col md:flex-row items-center justify-between py-6 ${
                index !== jobListings.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <span>{job.department}</span>
                  <span className="mx-2">•</span>
                  <span>{job.location}</span>
                </div>
              </div>

              <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
