import React from "react";

export const Cta = () => {
  return (
    <section id="cta" className="py-24 bg-dark-violet">
      <div className="flex flex-col p-2 space-y-6">
        <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
          Boost your links today
        </h5>
        <button
          className="px-10 py-5 mx-auto text-2xl text-white font-bold rounded-full
         bg-cyan hover:bg-cyan-light md:text-base md:py-3 focus:outline-none"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
