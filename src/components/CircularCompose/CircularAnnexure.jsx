import React, { useState } from 'react';

export default function CircularAnnexure() {
    const [circularFormatType, setCircularFormatType] = useState('WORD');
    const [circularLanguage, setCircularLanguage] = useState('ENG');
    const [circularPath, setCircularPath] = useState('C:\\Documents and Settings\\Administrator 2');
    const [annexureType, setAnnexureType] = useState('Annex1');
    const [annexureFormatType, setAnnexureFormatType] = useState('WORD');
    const [annexureLanguage, setAnnexureLanguage] = useState('ENG');
    const [annexurePath, setAnnexurePath] = useState('C:\\Documents and Settings\\Administrator\\Desktop\\');
    const [questions, setQuestions] = useState([{ id: 1, question: 'ANY CLARIFICATION REGARDING THIS' }]);

    return (
        <div className="mb-6">
            <h3 className="text-md font-semibold">Circular / Annexure</h3>

            {/* Circular Section */}
            <h4 className="font-semibold mt-4">Circular</h4>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Format Type</label>
                    <input
                        type="text"
                        value={circularFormatType}
                        onChange={(e) => setCircularFormatType(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Language</label>
                    <input
                        type="text"
                        value={circularLanguage}
                        onChange={(e) => setCircularLanguage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Circular Path</label>
                    <input
                        type="text"
                        value={circularPath}
                        onChange={(e) => setCircularPath(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700">Browse</button>
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 ml-2">View</button>
                </div>
            </div>

            {/* Annexure Section */}
            <h4 className="font-semibold mt-4">Annexure</h4>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Type</label>
                    <input
                        type="text"
                        value={annexureType}
                        onChange={(e) => setAnnexureType(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Format Type</label>
                    <input
                        type="text"
                        value={annexureFormatType}
                        onChange={(e) => setAnnexureFormatType(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Language</label>
                    <input
                        type="text"
                        value={annexureLanguage}
                        onChange={(e) => setAnnexureLanguage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Annexure/Format Path</label>
                    <input
                        type="text"
                        value={annexurePath}
                        onChange={(e) => setAnnexurePath(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700">Browse</button>
                    <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 ml-2">View</button>
                </div>
            </div>

            {/* Questions Section */}
            <h4 className="font-semibold mt-4">Questions</h4>
            <table className="min-w-full border border-gray-300 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">S/No</th>
                        <th className="border border-gray-300 px-4 py-2">Question</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((q) => (
                        <tr key={q.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{q.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{q.question}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 