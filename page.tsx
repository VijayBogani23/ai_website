import React, { useState } from 'react';

export default function Dashboard() {
  const [activeChannel, setActiveChannel] = useState('Devotional');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = async () => {
    setIsGenerating(true);
    // This will call your backend API later
    console.log(`Generating for ${activeChannel} with prompt: ${prompt}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        <h1 className="text-xl font-bold mb-8">AI Studio Pro</h1>
        <nav className="space-y-4">
          {['Devotional', 'Pediatric', 'F1 Racing'].map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={`w-full text-left p-3 rounded-lg transition ${
                activeChannel === ch ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              {ch === 'Devotional' ? '🕉️ ' : ch === 'Pediatric' ? '🧒 ' : '🏎️ '} {ch}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold">{activeChannel} Manager</h2>
          <div className="bg-gray-800 px-4 py-2 rounded-full text-sm">Credits: ₹450 left</div>
        </header>

        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
          <label className="block text-sm font-medium mb-2">
            {activeChannel === 'Devotional' ? 'Enter Song Name' : 'Enter Topic/Story Prompt'}
          </label>
          <textarea
            className="w-full bg-gray-900 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={activeChannel === 'Devotional' ? 'e.g., Hanuman Chalisa' : 'e.g., A story about a brave lion...'}
          />
          <button
            onClick={generateContent}
            disabled={isGenerating}
            className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition disabled:opacity-50"
          >
            {isGenerating ? 'Processing Video...' : 'Generate 4K Video'}
          </button>
        </div>

        {/* Video Review Section */}
        <section className="mt-12">
          <h3 className="text-xl font-medium mb-4">Review & Approve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-black rounded-xl border border-gray-700 flex items-center justify-center text-gray-500">
              Video Preview will appear here
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="font-bold mb-4">Upload Settings</h4>
              <input type="text" placeholder="YouTube Title" className="w-full bg-gray-900 mb-4 p-2 rounded" />
              <input type="datetime-local" className="w-full bg-gray-900 mb-6 p-2 rounded" />
              <button className="w-full bg-green-600 py-3 rounded-lg font-bold hover:bg-green-500">
                Approve & Schedule
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}