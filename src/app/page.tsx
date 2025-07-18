'use client'
import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");

  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full p-6">
        {/* What I've tried before */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">what i've tried before</h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li>
              Built a crypto payments platform for merchants using USDe — paused due to tough competition and unclear regulations.
              <a 
                href="https://github.com/yagnadeepxo/pulse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline ml-1"
              >
                view code →
              </a>
            </li>
            <li>
              Launched a two-sided bounty marketplace for the Ethereum community — no one really wanted it enough
            </li>
            <li>
              Was CTO at an insurance aggregator, built full auth and infra — exited due to vision misalignment with founders and investors
            </li>
            <li>
              Wrote a full design paper for a forex risk engine using perpetual futures — failed due to chicken-egg problem with traders and liquidity.
              <a 
                href="https://drive.google.com/file/d/10WZUn6FHHIYFyGdh1teJznCTF51njN2k/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline ml-1"
              >
                view whitepaper →
              </a>
            </li>
            <li>
              Worked on building ZK cryptographic libraries and audited a PSE project (Jan 2023 – May 2024)
            </li>
          </ul>
        </div>

        {/* Links to social profiles */}
        <div className="text-center text-stone-700 space-x-4">
          <a
            href="https://x.com/yagnadeepxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            X(twitter) ↗
          </a>
          <a
            href="https://github.com/yagnadeepxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            github ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;
