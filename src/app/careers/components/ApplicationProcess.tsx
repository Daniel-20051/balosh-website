import React from "react";

const processSteps = [
  {
    number: 1,
    title: "Submit Resume",
    description:
      "Apply online with your resume and cover letter. We review all applications carefully.",
  },
  {
    number: 2,
    title: "Virtual Interview",
    description:
      "Meet us online for a video interview to discuss your background and interests.",
  },
  {
    number: 3,
    title: "Physical Interview",
    description:
      "On-site interview with the hiring manager and team to go deeper on the role.",
  },
  {
    number: 4,
    title: "Offer",
    description:
      "If we're a mutual fit, we'll extend an offer and welcome you to the team!",
  },
];

export default function ApplicationProcess() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Application Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
