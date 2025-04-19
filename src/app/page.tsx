'use client'
import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");
  
  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-20">
      <div className="max-w-4xl w-full p-6">        
        {/* What is this */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">what is this?</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            AI intelligence agency. I've created a daily summary of all the significant events that matter to me, complete with <em>genuine analysis</em> that goes beyond just the headlines.
          </p>
          <p className="text-stone-700 leading-relaxed">
            gives me the "what", "actionable insights", and "so what" behind global tech news in 5 min.
          </p>
        </div>

        {/* Sample Report Preview */}
        <div className="mb-12 border-l-4 border-stone-800 pl-4 py-2 bg-stone-50">
          <a href="/reports" className="text-stone-800 underline font-medium">View reports →</a>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">how it works</h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li>scrapes hundreds of news articles of startups, trends, acquisitions, funding, geopolitics</li>
            <li>cleaned to get the relevant information using gemini 2.0 flash</li>
            <li>then the relevant information is passed to gemini-2.5-pro-preview-03-25</li>
            <li>identifies what actually matters, oppurtunities to exploit and actionable insights</li>
            <li>delivers one clean & engaging report</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;
