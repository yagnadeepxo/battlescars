'use client'
import React, { useState } from "react";

const InternLandingPage = () => {
  const [location, setLocation] = useState("international");
  
  return (
    <div className="font-serif bg-stone-100 text-stone-800 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full p-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">Daily Intelligence Briefing</h1>
          <p className="text-xl text-stone-700 leading-relaxed">
            Stay ahead of the curve with curated insights on tech, startups, and global trends
          </p>
        </div>
        
        {/* What is this */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">what is this?</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            my own intelligence agency. I've created a daily summary of all the significant events that matter to me, complete with <em>genuine analysis</em> that goes beyond just the headlines.
          </p>
          <p className="text-stone-700 leading-relaxed">
            gives me the "what", "actionable insights", and "so what" behind global tech news in 5 min.
          </p>
        </div>

        {/* Sample Report Preview */}
        <div className="mb-12 border-l-4 border-stone-800 pl-4 py-2 bg-stone-50">
          <a href="/reports" className="text-stone-800 underline font-medium">View sample reports →</a>
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

        {/* Testimonials */}
        <div className="mb-16 grid md:grid-cols-2 gap-6">
          <div className="border border-stone-300 p-4 bg-stone-50">
            <p className="text-stone-700 mb-3">"This has easily become my most valuable morning read. The analysis on emerging trends has helped me make several key decisions."</p>
            <p className="font-medium">— Tech founder</p>
          </div>
          <div className="border border-stone-300 p-4 bg-stone-50">
            <p className="text-stone-700 mb-3">"I've canceled three other newsletters since subscribing. This gives me everything I need to stay informed in a fraction of the time."</p>
            <p className="font-medium">— Product manager</p>
          </div>
        </div>

{/* Location Selector */}
<div className="my-8 flex justify-center">
  <div className="flex border border-stone-400">
    <button 
      onClick={() => setLocation("india")}
      className={`px-4 py-2 ${location === "india" ? "bg-stone-800 text-stone-100" : "bg-stone-50"}`}
    >
      India
    </button>
    <button 
      onClick={() => setLocation("international")}
      className={`px-4 py-2 ${location === "international" ? "bg-stone-800 text-stone-100" : "bg-stone-50"}`}
    >
      International
    </button>
  </div>
</div>

{/* Pricing Plans */}
<div className="grid md:grid-cols-2 gap-6 my-8">
  {/* Monthly Plan */}
  <div className="border border-stone-400 p-6 hover:shadow-md transition-shadow flex flex-col">
    <h3 className="text-lg font-medium mb-2">Monthly Plan</h3>
    <div className="text-2xl font-bold mb-4">
      {location === "india" ? "₹99" : "$5"}<span className="text-sm font-normal text-stone-600">/month</span>
    </div>
    <ul className="text-stone-700 space-y-2 mb-6">
      <li>• Daily intelligence briefings</li>
      <li>• Actionable insights</li>
      <li>• Cancel anytime</li>
    </ul>
    {/* This empty div will take up available space, pushing the button to the bottom */}
    <div className="flex-grow"></div>
    <button className="w-full p-3 bg-stone-800 text-stone-100 font-medium hover:bg-stone-700 tracking-widest">
      SUBSCRIBE NOW
    </button>
  </div>

  {/* Annual Plan */}
  <div className="border border-stone-400 p-6 bg-stone-50 hover:shadow-md transition-shadow relative flex flex-col">
    <div className="absolute -top-3 right-3 bg-stone-800 text-stone-100 px-2 py-1 text-xs">
      20% off
    </div>
    <h3 className="text-lg font-medium mb-2">Annual Plan</h3>
    <div className="text-2xl font-bold mb-4">
      {location === "india" ? "₹950" : "$48"}<span className="text-sm font-normal text-stone-600">/year</span>
    </div>
    <div className="text-sm text-stone-600 mb-4">
      <span className="line-through">{location === "india" ? "₹1,188" : "$60"}</span> (20% off)
    </div>
    <ul className="text-stone-700 space-y-2 mb-6">
      <li>• Daily intelligence briefings</li>
      <li>• Actionable insights</li>
      <li>• Cancel anytime</li>
    </ul>
    {/* This empty div will take up available space, pushing the button to the bottom */}
    <div className="flex-grow"></div>
    <button className="w-full p-3 bg-stone-800 text-stone-100 font-medium hover:bg-stone-700 tracking-widest">
      SUBSCRIBE YEARLY
    </button>
  </div>
</div>
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">How often will I receive briefings?</h3>
              <p className="text-stone-700">You'll receive intelligence briefings every weekday morning by 7 AM in your local timezone.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What topics are covered?</h3>
              <p className="text-stone-700">Our briefings focus on tech startups(AI, Crypto, SaaS....), funding rounds, acquisitions, product launches, market trends, and geopolitical events that impact the tech ecosystem.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I see some examples before subscribing?</h3>
              <p className="text-stone-700">Absolutely! Check out our <a href="/reports" className="underline">sample reports</a> to get a feel for what you'll receive.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center my-12 border-y border-stone-400 py-6">
          <div className="text-xl font-medium mb-2">intelligence that puts you in the top 1%</div>
          <p className="text-stone-600 mb-6">Join thousands of forward-thinking professionals staying ahead of the curve</p>
          <button className="px-8 py-3 bg-stone-800 text-stone-100 font-medium hover:bg-stone-700 tracking-widest">
            GET STARTED NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternLandingPage;