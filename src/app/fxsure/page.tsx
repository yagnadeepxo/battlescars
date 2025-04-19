'use client'
import React from "react";

const CompanyOverviewPage = () => {
  return (
    <div className="font-serif bg-stone-100 text-stone-800 flex flex-col items-center pt-2">
      <div className="max-w-4xl w-full p-6 space-y-4">
        
        {/* 1. Company Purpose */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Company Purpose</h2>
          <p className="text-stone-700 leading-relaxed">
            Helping global businesses to settle cross-border payments instantly and hedge FX risk flexibly, onchain.
          </p>
        </section>

        {/* 2. Problem */}
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Problem</h2>
          <p className="text-stone-700 leading-relaxed">
            Cross-border payments are slow, expensive, and FX hedging is rigid. Businesses lose money due to inflexible forward contracts, high banking fees, and poor treasury tools.
          </p>
        </section>

        {/* 3. Solution */}
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Solution</h2>
          <p className="text-stone-700 leading-relaxed">
            We enable "Pay Now, Hedge Later" using onchain infrastructure and local OTC desks in US and EU. Businesses pay suppliers instantly while managing FX risk after payment—unlocking savings and flexibility banks can't offer.
          </p>
        </section>

        {/* 4. Why Now? */}
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Why Now?</h2>
          <p className="text-stone-700 leading-relaxed">
            Global treasury teams are overwhelmed. Crypto rails are fast, stablecoins are trusted,Circle launching compliant USDC and EURC, with USA's genius Act and MicA in EU.
          </p>
        </section>

        {/* 5. Market Potential */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Market Potential</h2>
          <p className="text-stone-700 leading-relaxed">
            Targeting mid to large global businesses doing $10M–$100M+ in cross-border trade annually. The exclusive EU and US B2B FX and payments market is <strong>$976 B</strong>
          </p>
        </section>

        {/* 6. Competition / Alternatives */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Competition / Alternatives</h2>
          <p className="text-stone-700 leading-relaxed">
            Traditional banks (HSBC, Citi), FX fintechs (Wise, Airwallex), and treasury tools (Kyriba, hedgebook) dominate today—but they lack flexibility, real-time execution, and onchain innovation.
          </p>
        </section>

        {/* 7. Business Model */}
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Business Model</h2>
          <p className="text-stone-700 leading-relaxed">
            Revenue from settling invoices, dynamic hedging execution fees, and potential subscription plans for treasury dashboards. High-margin, low-CAC through BD and industry partnerships.
          </p>
        </section>
        
      </div>
    </div>
  );
};

export default CompanyOverviewPage;