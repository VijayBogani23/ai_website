"use client";
import React, { useState } from 'react';

export default function AIStudio() {
  const [channel, setChannel] = useState('Devotional');
  const [input, setInput] = useState('');

  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-200">
      {/* Sidebar */}
      <div className="w-72 bg-[#1e293b] p-6 border-r border-slate-700">
        <h1 className="text-2xl font-black text-blue-400 mb-10 tracking-tight">CHANNEL AI</h1>
        <div className="space-y-3">
          {['Devotional', 'Pediatric', 'F1 Racing'].map((name) => (
            <button
              key={name}
              onClick={() => setChannel(name)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                channel === name ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-700'
              }`}
            >
              {name === 'Devotional' ? '🕉️ ' : name === 'Pediatric' ? '🧒 ' : '🏎️ '} {name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 overflow-y-auto p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">{channel} Workspace</h2>
            <p className="text-slate-400">Manage, generate, and schedule your {channel} content.</p>
          </header>

          <div className="bg-[#1e293b] rounded-3xl p-8 border border-slate-700 shadow-2xl">
            <label className="block text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              {channel === 'Devotional' ? 'Song Name' : 'Story or Race Topic'}
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-600 rounded-2xl p-5 text-xl outline-none focus:border-blue-500 transition-colors"
              placeholder={channel === 'Devotional' ? "e.g. Om Jai Jagdish Hare" : "e.g. The Brave Little Seed"}
            />
            <button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-[0.98]">
              Generate High-End 4K Video
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="aspect-video bg-black rounded-3xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center">
                <p className="text-slate-600 font-medium">Video Preview will appear here</p>
             </div>
             <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700">
                <h3 className="font-bold text-white mb-4">Schedule Upload</h3>
                <input type="datetime-local" className="w-full bg-[#0f172a] p-3 rounded-lg border border-slate-600 mb-4" />
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl font-bold transition-colors">
                  Approve & Schedule
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
