import React, { useState } from 'react';

export default function DocumentDetails() {
    const [documentTitle, setDocumentTitle] = useState('');
    const [documentType, setDocumentType] = useState('Type A');
    const [documentDate, setDocumentDate] = useState('');

    return (
        <div className="mb-6">
            <h3 className="text-md font-semibold">Document Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Document Title</label>
                    <input
                        type="text"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Document Type</label>
                    <select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="Type A">Type A</option>
                        <option value="Type B">Type B</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Document Date</label>
                    <input
                        type="date"
                        value={documentDate}
                        onChange={(e) => setDocumentDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>
        </div>
    );
} 