import React, { useState } from 'react';

export default function RecipientGroup() {
    const [signature, setSignature] = useState(true);
    const [signatureId, setSignatureId] = useState('202702');
    const [responsive, setResponsive] = useState(false);
    const [print, setPrint] = useState(true);
    const [download, setDownload] = useState(true);
    const [archivePeriod, setArchivePeriod] = useState(90);
    const [recipientGroups, setRecipientGroups] = useState([
        { group: 'ALL', description: 'ALL BRANCHES - OFFICES' },
    ]);

    return (
        <div className="mb-6">
            <h3 className="text-md font-semibold">Recipient Group</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                    <label className="block text-gray-700 mr-2">Signature</label>
                    <input
                        type="checkbox"
                        checked={signature}
                        onChange={(e) => setSignature(e.target.checked)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Signature ID</label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={signatureId}
                            onChange={(e) => setSignatureId(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 ml-2">View</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 mr-2">Responsive</label>
                    <input
                        type="checkbox"
                        checked={responsive}
                        onChange={(e) => setResponsive(e.target.checked)}
                    />
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 mr-2">Print</label>
                    <input
                        type="checkbox"
                        checked={print}
                        onChange={(e) => setPrint(e.target.checked)}
                    />
                </div>
                <div className="flex items-center">
                    <label className="block text-gray-700 mr-2">Download</label>
                    <input
                        type="checkbox"
                        checked={download}
                        onChange={(e) => setDownload(e.target.checked)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Archive Period</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={archivePeriod}
                            onChange={(e) => setArchivePeriod(e.target.value)}
                            className="mt-1 block w-20 border border-gray-300 rounded-md p-2"
                        />
                        <span className="ml-2">Days</span>
                    </div>
                </div>
            </div>

            {/* Recipient Group Table */}
            <h4 className="font-semibold mt-4">Recipient Group</h4>
            <table className="min-w-full border border-gray-300 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Recipient Group</th>
                        <th className="border border-gray-300 px-4 py-2">Recipient Description</th>
                    </tr>
                </thead>
                <tbody>
                    {recipientGroups.map((group, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{group.group}</td>
                            <td className="border border-gray-300 px-4 py-2">{group.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 