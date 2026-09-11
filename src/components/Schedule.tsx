import React from 'react';

type ScheduleRow = {
  time: string;
  session: string;
  bold?: boolean;
};

const scheduleData: ScheduleRow[] = [
  { time: '1:30 – 1:35 PM', session: 'Welcome and Introduction', bold: true },
  { time: '1:35 – 1:55 PM', session: 'Keynote I – Hien Van Nguyen, University of Houston (20 min talk)', bold: true },
  { time: '1:55 – 1:58 PM', session: 'Q&A' },
  { time: '1:58 – 2:30 PM', session: 'Paper Session I (4 min each)', bold: true },
  { time: '1:58 – 2:02 PM', session: 'Rule-Compliant Brain MRI Volumetry Report Generation with Locally Deployable LLMs' },
  { time: '2:02 – 2:06 PM', session: 'PSV2026: A Fine-Grained Clinical Factuality Dataset for Medical Vision-Language Models' },
  { time: '2:06 – 2:10 PM', session: 'Contrastive Answer Calibration for Medical Visual Question Answering' },
  { time: '2:10 – 2:14 PM', session: 'Diagnosis of Autism Spectrum Disorder using LLMs and Multimodal Brain Connectivity Analysis' },
  { time: '2:14 – 2:18 PM', session: 'Pixel-FLAIR: Leveraging Anatomical Segmentation for Region-Specific Supervision in Retinal Foundational Vision-Language Models' },
  { time: '2:18 – 2:22 PM', session: 'LLM-Based Differential Diagnosis of Neurodegenerative Diseases from MRI-Derived Brain Atrophy Reports' },
  { time: '2:22 – 2:26 PM', session: 'Clinical Reliability in Multilingual Chest X-ray Report Generation' },
  { time: '2:26 – 2:30 PM', session: 'PathLLaVA: Continuous Vision-Language Alignment for Bladder Cancer Pathology Report Generation' },
  { time: '2:30 – 2:50 PM', session: 'Keynote II – Tingting Dan, UNC (20 min talk)', bold: true },
  { time: '2:50 – 2:53 PM', session: 'Q&A' },
  { time: '2:53 – 3:25 PM', session: 'Paper Session II (4 min each)', bold: true },
  { time: '2:53 – 2:57 PM', session: 'Balancing Retrieved Evidence for 3D CT Report Generation' },
  { time: '2:57 – 3:01 PM', session: 'A Real-World Analysis of an AI Chest X-ray Reporting Assistant Focused on Factuality and Lines & Tubes' },
  { time: '3:01 – 3:05 PM', session: 'FedPref: Federated Preference Learning for Structured Radiology Report Extraction' },
  { time: '3:05 – 3:09 PM', session: 'Authority-Preserving Evaluation of Medical Vision-Language Assistants' },
  { time: '3:09 – 3:13 PM', session: 'Evaluating Medical Report Generation on Real Clinical Data: A Case Study' },
  { time: '3:13 – 3:17 PM', session: "BioMAD: Biologically Guided Multi-Axis Delta Learning for Longitudinal Alzheimer's Disease Classification" },
  { time: '3:17 – 3:21 PM', session: 'LLM-HypSFCN: LLM-Guided Hyperbolic Structure-Function Coupling Network for Early Cognitive Assessment' },
  { time: '3:21 – 3:25 PM', session: 'Sliding Window-Based Local Feature Extraction for Findings Reports Generation from Longitudinal 3D CT Volumes' },
  { time: '3:25 – 3:30 PM', session: 'Closing', bold: true },
];

export default function Schedule() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Workshop Schedule</h1>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-gray-600 text-sm">
        <span>
          <span className="font-semibold text-gray-800">Date:</span> September 27, 2026
        </span>
        <span className="text-gray-300 hidden sm:block">|</span>
        <span>
          <span className="font-semibold text-gray-800">Venue:</span> Strasbourg Convention Center, France
        </span>
        <span className="text-gray-300 hidden sm:block">|</span>
        <span>
          <span className="font-semibold text-gray-800">Room:</span> Etoile A (U)
        </span>
        <span className="text-gray-300 hidden sm:block">|</span>
        <span>
          <span className="font-semibold text-gray-800">Time:</span> 1:30 PM – 3:30 PM (France Local Time)
        </span>
      </div>

      {/* Schedule table */}
      <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm">
              <th className="w-44 px-5 py-3 text-left font-semibold text-gray-700 tracking-wide">Time</th>
              <th className="px-5 py-3 text-left font-semibold text-gray-700 tracking-wide">Session / Topic</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 ${row.bold ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className={`px-5 py-3 text-sm whitespace-nowrap align-top font-mono text-gray-600 ${row.bold ? 'font-semibold' : ''}`}>
                  {row.time}
                </td>
                <td className={`px-5 py-3 text-sm align-top text-gray-800 ${row.bold ? 'font-semibold' : ''}`}>
                  {row.session}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        16 papers accepted (Oral) scheduled across two paper sessions, 4 minutes each, bookended by three invited talks (20 min + 3 min Q&amp;A each).
      </p>
    </div>
  );
}
