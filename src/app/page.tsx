'use client'
import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");
  
  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full p-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Lessons from Six Failed Ventures
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Each failure taught me something valuable. Now I'm looking for one opportunity to apply everything I've learned.
          </p>
        </div>

        {/* What I've tried before */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-center">what i've tried before</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    Built a crypto payments platform for merchants using USDe — paused due to tough competition and unclear regulations.
                  </p>
                </div>
                <a 
                  href="https://github.com/yagnadeepxo/pulse" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 underline hover:text-blue-800 transition-colors whitespace-nowrap ml-4"
                >
                  view code →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <p className="text-stone-700 leading-relaxed">
                Launched a two-sided bounty marketplace for the Ethereum community — no one really wanted it enough
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <p className="text-stone-700 leading-relaxed">
                Was CTO at an insurance aggregator, built full auth and infra — exited due to vision misalignment with founders and investors
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    Wrote a full design paper for a forex risk engine using perpetual futures — failed due to chicken-egg problem with traders and liquidity.
                  </p>
                </div>
                <a 
                  href="https://drive.google.com/file/d/10WZUn6FHHIYFyGdh1teJznCTF51njN2k/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 underline hover:text-blue-800 transition-colors whitespace-nowrap ml-4"
                >
                  view whitepaper →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <p className="text-stone-700 leading-relaxed">
                Worked on building ZK cryptographic libraries and audited a PSE project (Jan 2023 – May 2024)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-stone-700 leading-relaxed">
                    Built Alo, an AI usage tracker Chrome extension — failed because I had no money to get distribution and couldn't raise funds.
                  </p>
                </div>
                <a 
                  href="https://github.com/yagnadeepxo/alo-extension" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 underline hover:text-blue-800 transition-colors whitespace-nowrap ml-4"
                >
                  view code →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mb-12 p-4 bg-stone-50 rounded-lg border border-stone-200">
          <p className="text-stone-600 text-sm">
            One chance, please.
          </p>
        </div>

        {/* Links to social profiles */}
        <div className="text-center text-stone-700 space-x-6">
          <a
            href="https://x.com/yagnadeepxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            X(twitter) ↗
          </a>
          <a
            href="https://github.com/yagnadeepxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            github ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;
};

export default InternLandingPage;
