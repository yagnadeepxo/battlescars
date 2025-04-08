import React from "react";

const InternLandingPage = () => {
  return (
    <div className="font-serif bg-stone-100 text-stone-800 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full">


        {/* What is this */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">what is this?</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            my own intelligence agency. I've created a daily summary of all the significant events that matter to me, complete with <em>genuine analysis</em> that goes beyond just the headlines.
          </p>
          <p className="text-stone-700 leading-relaxed">
            gives me the “what”, “actionable insights”, and “so what” behind global tech news in 5 min.
          </p>
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

        <form className="flex flex-col gap-3 w-full max-w-sm mx-auto my-10">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="p-3 bg-stone-50 border-b border-stone-400 focus:outline-none text-lg" 
            required 
          />
          <button 
            type="submit" 
            className="p-3 bg-stone-800 text-stone-100 font-medium hover:bg-stone-700 tracking-widest"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* CTA */}
        <div className="text-center my-12 border-y border-stone-400 py-6">
          <div className="text-xl font-medium mb-2">$5 per month</div>
          <p className="text-stone-600">for intelligence that compounds in value</p>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;
