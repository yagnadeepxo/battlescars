'use client'
import React from "react";

const MostImpressiveThingPage = () => {
  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full p-6">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">the most impressive thing i've done</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Back in 2021, during my first year of college, I got deeply into blockchain and Web3. I spent an entire year learning everything I could — from distributed systems to smart contracts. Eventually, I reached a point where I felt confident enough to teach others.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            Over one full semester, I conducted 9 guest lectures for my seniors, helping them understand the fundamentals of blockchain and how distributed systems work. The feedback I received from them was incredibly positive.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            My professors noticed the impact and trusted me enough to let me set the official exam paper for the semester. They also gave me full attendance so I could pursue a remote internship with LambdaClass, a company based in Buenos Aires — all while I was still in my 6th semester.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Looking back, it might not seem that impressive now at 22. But for my 20-year-old self, it was a moment of pride and proof that passion and consistency pay off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MostImpressiveThingPage;
