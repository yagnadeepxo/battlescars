'use client'

import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");

  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full p-6">
        {/* What I've tried before */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">My failures</h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li>
              Built a <span className="font-bold text-black">crypto payments platform</span> for merchants using USDe — paused due to tough competition and unclear regulations.
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
              Launched a <span className="font-bold text-black">two-sided bounty marketplace</span> for the Ethereum community — no one really wanted it enough
            </li>
            <li>
              Was <span className="font-bold text-black">CTO at an insurance aggregator</span>, built full auth and infra — exited due to vision misalignment with founders and investors
              <a 
                href="https://finzip.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline ml-1"
              >
                finzip.in →
              </a>
            </li>
            <li>
              Wrote a full design paper for a <span className="font-bold text-black">forex risk engine</span> using perpetual futures — failed due to chicken-egg problem with traders and liquidity.
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
              Worked on building <span className="font-bold text-black">ZK cryptographic libraries</span> and audited a PSE project (Jan 2023 – May 2024)
            </li>
            <li>
              Built Alo, an <span className="font-bold text-black">AI usage tracker Chrome extension</span> — failed because I had no money to get distribution and couldn't raise funds.
              <a 
                href="https://github.com/yagnadeepxo/alo-extension" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 underline ml-1"
              >
                view code →
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mb-8">
          <span className="font-semibold bg-yellow-200 text-stone-900 px-3 py-1 rounded-md inline-block">
            I request for one chance
          </span>
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
          <a
            href="https://www.linkedin.com/in/yagnadeep-reddy-3a1505205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            linkedin ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;
