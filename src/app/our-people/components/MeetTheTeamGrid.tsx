"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import useReveal from "./useReveal";

export default function MeetTheTeamGrid() {
  const team = [
    { role: "Managing Director (MD)", initials: "MD" },
    { role: "HR", initials: "HR" },
    { role: "Accountant", initials: "AC" },
    { role: "Head of Engineers", initials: "HE" },
    { role: "Operations Manager", initials: "OM" },
    { role: "Head of Customer Relations", initials: "CR" },
  ];

  const { ref: teamRef, isVisible: teamVisible } = useReveal();

  return (
    <section ref={teamRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badgeText="People"
          title="Meet the"
          titleHighlight="Team"
          description="The leaders and specialists who keep our operations running smoothly."
          className={`${
            teamVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          } transition-all duration-700`}
        />

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8`}
        >
          {team.map((member, idx) => (
            <div
              key={member.role}
              className={`${
                teamVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } transition-all duration-700 [transition-delay:var(--delay)]`}
              style={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "--delay": `${idx * 60}ms`,
              }}
            >
              <article className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50/30 group-hover:to-orange-100/20 transition-all duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-5">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-500">
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Dedicated professional fostering collaboration and
                    operational excellence.
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
