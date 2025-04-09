"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ArrowLeft } from "lucide-react";

type Report = {
  id: string;
  name: string;
  html: string;
  created_at: string;
};

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      const { data, error } = await supabase
        .from("reports")
        .select("id, name, html, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching reports:", error.message);
      } else {
        setReports(data || []);
      }

      setLoading(false);
    }

    fetchReports();
  }, []);

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {loading && (
        <div className="flex justify-center py-8">
          <p className="text-stone-600">Loading reports...</p>
        </div>
      )}

      {!loading && !selectedReport && (
        <div className="flex flex-wrap gap-4 mb-10">
          {reports.map((report) => (
            <div
              key={report.id}
              className="cursor-pointer px-4 py-3 transition"
              onClick={() => setSelectedReport(report)}
            >
              <h3 className="text-lg font-semibold text-stone-800 break-words hover:underline">
                {report.name}
              </h3>
              <p className="text-xs text-stone-500 mt-1">{formatDate(report.created_at)}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && selectedReport && (
        <div className="mt-4">
          <button
            onClick={() => setSelectedReport(null)}
            className="mb-4 inline-flex items-center text-sm text-blue-600 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Reports
          </button>
            <div
              className="prose max-w-none prose-stone prose-headings:font-serif prose-headings:font-medium prose-p:text-stone-700"
              dangerouslySetInnerHTML={{ __html: selectedReport.html }}
            />
        </div>
      )}

      {!loading && reports.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stone-600">No reports available.</p>
        </div>
      )}
    </div>
  );
}
