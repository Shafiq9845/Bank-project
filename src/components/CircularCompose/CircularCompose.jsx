import React, { useState } from 'react';
import DocumentDetails from './DocumentDetails';
import CircularAnnexure from './CircularAnnexure';
import RecipientGroup from './RecipientGroup';
import CircularOrigin from './CircularOrigin';

export default function CircularCompose() {
    const [activeTab, setActiveTab] = useState('keywords');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
            <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6">
                <h2 className="text-lg font-bold text-red-600 mb-4">eCircular - Circular Compose</h2>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                    {['circularOrigin', 'documentDetails', 'circularAnnexure', 'recipientGroup', 'keywords'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'circularOrigin' && <CircularOrigin />}
                {activeTab === 'documentDetails' && <DocumentDetails />}
                {activeTab === 'circularAnnexure' && <CircularAnnexure />}
                {activeTab === 'recipientGroup' && <RecipientGroup />}

                {activeTab === 'keywords' && (
                    <div className="mb-6">
                        <h3 className="text-md font-semibold">Keywords</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Keyword</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Description</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-6">
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Send To Autho
                    </button>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Save
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                        Cancel
                    </button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
}
