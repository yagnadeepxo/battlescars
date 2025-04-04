import React from "react";

const Home = () => {
  return (
    <div className="font-mono bg-white text-black min-h-screen flex flex-col justify-center items-center p-8 border-2 border-black">
      <h1 className="text-2xl font-bold text-center uppercase tracking-widest border-b-2 border-black pb-2">Battle Scars</h1>
      <div className="text-center my-4 text-gray-700 border-t border-b py-2">
        :: Daily Actionable Intelligence :: Tech Insights That Matter :: 5-Minute Briefings ::
      </div>
      
      <div className="text-center my-6">
        <p className="text-lg max-w-md mx-auto mb-4">
          While others are <strong>reacting</strong> to yesterday's news, our subscribers are <strong>acting</strong> on tomorrow's trends.
        </p>
      </div>
      
      <form className="flex flex-col gap-2 w-full max-w-sm mx-auto">
        <input type="email" placeholder="Enter your email" className="p-2 border border-black text-lg" required />
        <button type="submit" className="p-2 bg-black text-white font-bold hover:bg-gray-800">SUBSCRIBE NOW</button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {[
          { title: "Pattern Recognition", desc: "Connecting signals across the startup ecosystem that others miss. Stay ahead of market shifts before they happen." },
          { title: "Funding Intelligence", desc: "We analyze 150+ sources daily to detect emerging investment trends before they make headlines. Get ahead of capital flows and strategic funding moves." },
          { title: "Opportunity Matrix", desc: "We filter the noise and surface the most critical opportunities from a flood of industry news. Actionable insights you can act on—before your competitors do." },
          { title: "Competitive Edge", desc: "Every day, we extract the sharpest insights from 150-200 news reports, delivering only the most relevant intelligence. No fluff, just what matters." },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 border-l-4 border-black p-4">
            <h3 className="font-bold text-lg border-b pb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="my-8 text-center">
        <h2 className="text-lg font-bold mb-4">How We Compare</h2>
        <table className="w-full max-w-lg mx-auto border-collapse border border-black text-left text-sm">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-black p-2">Feature</th>
              <th className="border border-black p-2">Battle Scars</th>
              <th className="border border-black p-2">Other Newsletters</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Daily Actionable Intelligence", "✔️", "❌"],
              ["Startup & VC Trends", "✔️", "Limited"],
              ["5-Minute Briefings", "✔️", "❌"],
              ["No Fluff, Just Insights", "✔️", "❌"],
              ["Exclusive Market Shifts", "✔️", "Rare"],
            ].map((row, index) => (
              <tr key={index} className="border border-black">
                <td className="border border-black p-2">{row[0]}</td>
                <td className="border border-black p-2">{row[1]}</td>
                <td className="border border-black p-2">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="my-8">
        <h2 className="text-lg font-bold mb-4">Testimonials</h2>
        <div className="overflow-x-auto flex space-x-4">
          {[
            { text: "Your report on RAG technologies last month led me to pivot our product roadmap. We've since secured meetings with two major VCs.", author: "Alex K., Founder" },
            { text: "Battle Scars intel saved me months of research. I implemented the suggested approach with my enterprise clients and closed two deals worth $175K in just three weeks.", author: "Mira T., Consultant" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-100 border-l-4 border-black p-4 min-w-[80%]">
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-bold text-right mt-2">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      

      
      <div className="text-center my-6">
        <div className="text-xl font-bold bg-yellow-200 inline-block px-3 py-1">$5/month</div>
        <p className="text-lg mt-2">for intelligence that pays for itself</p>
      </div>
      
      <footer className="text-center text-gray-700 border-t pt-4 text-sm w-full">ACT FAST • STAY AHEAD • WIN</footer>
    </div>
  );
};

export default Home;
