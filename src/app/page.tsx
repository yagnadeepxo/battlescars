'use client'
import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");
  
  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
        {/* What I've tried before */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">what i've tried before</h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li>built a crypto payments platform for merchants using USDe — paused due to tough competition and unclear regulations</li>
            <li>launched a two-sided bounty marketplace for the Ethereum community — no one really wanted it enough</li>
            <li>was CTO at an insurance aggregator, built full auth and infra — exited due to vision misalignment with founders and investors</li>
            <li>wrote a full design paper for a forex risk engine using perpetual futures — failed due to chicken-egg problem with traders and liquidity</li>
            <li>Worked in building Zk cryptographic libraries and audited PSE project(jan 2023-may 2024)</li>
          </ul>
        </div>
      </div>
  );
};

export default InternLandingPage;
