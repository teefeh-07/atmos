import React, { useState } from 'react';

// Mock Data for UI Demonstration
const MOCK_DATASETS = [
    { id: 1, name: "Stratospheric Ozone Layer Scan", description: "High-altitude scan of ozone concentration over Antarctica.", type: "Atmospheric", date: "2023-10-15", owner: "SP123...456", status: "Verified" },
    { id: 2, name: "Global Temp Anomalies 2024", description: "Aggregated temperature data from 5000+ ground stations.", type: "Climate", date: "2024-01-20", owner: "SP789...012", status: "Pending" },
    { id: 3, name: "Solar Radiation Index", description: "Direct solar radiation measurements from orbital satellites.", type: "Solar", date: "2024-02-10", owner: "SP456...789", status: "Verified" },
];

function App() {
    const [activeTab, setActiveTab] = useState('browse');

    return (
        <div className="min-h-screen pb-12">
            {/* Navigation Bar */}
            <nav className="border-b border-white/10 glass-panel sticky top-0 z-50 rounded-none border-x-0 border-t-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="font-bold text-white text-lg">A</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">Atmos</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <button
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'browse' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                                    onClick={() => setActiveTab('browse')}
                                >
                                    Browse Data
                                </button>
                                <button
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'my-data' ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                                    onClick={() => setActiveTab('my-data')}
                                >
                                    My Datasets
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-white/10">
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

                {/* Header Section */}
                <div className="mb-12 text-center animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Decentralized <span className="text-gradient">Atmospheric Data</span> Registry
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Secure, immutable, and verifiable storage for global climate and atmospheric datasets on the Stacks blockchain.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="glass-panel p-6">
                        <h3 className="text-gray-400 text-sm font-medium mb-1">Total Datasets</h3>
                        <p className="text-3xl font-bold text-white">1,284</p>
                        <div className="text-green-400 text-xs mt-2 flex items-center">
                            <span>+12% this week</span>
                        </div>
                    </div>
                    <div className="glass-panel p-6">
                        <h3 className="text-gray-400 text-sm font-medium mb-1">Active Contributors</h3>
                        <p className="text-3xl font-bold text-white">342</p>
                        <div className="text-blue-400 text-xs mt-2 flex items-center">
                            <span>Global network</span>
                        </div>
                    </div>
                    <div className="glass-panel p-6">
                        <h3 className="text-gray-400 text-sm font-medium mb-1">Data Volume</h3>
                        <p className="text-3xl font-bold text-white">4.2 TB</p>
                        <div className="text-purple-400 text-xs mt-2 flex items-center">
                            <span>Verified storage</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-white">Latest Submissions</h2>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search datasets..."
                                className="w-64 bg-slate-800/50 border-slate-700/50 focus:border-blue-500/50 text-sm"
                            />
                            <button className="primary-btn">
                                + New Upload
                            </button>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {MOCK_DATASETS.map((dataset) => (
                            <div key={dataset.id} className="glass-panel p-6 hover:bg-slate-800/40 transition-colors group cursor-pointer border-transparent hover:border-slate-700">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-semibold text-blue-100 group-hover:text-blue-400 transition-colors">{dataset.name}</h3>
                                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {dataset.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-4 max-w-3xl">{dataset.description}</p>
                                        <div className="flex items-center gap-6 text-xs text-gray-500 font-mono">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                                                {dataset.owner}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                                                {dataset.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3">
                                        <span className={`px-2 py-1 rounded text-xs font-medium border ${dataset.status === 'Verified'
                                                ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                                            }`}>
                                            {dataset.status}
                                        </span>
                                        <button className="text-gray-400 hover:text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
