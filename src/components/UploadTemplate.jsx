import React, { useState } from 'react';

export default function UploadTemplate() {
    const [templateId, setTemplateId] = useState('');
    const [templateName, setTemplateName] = useState('');
    const [documentType, setDocumentType] = useState('C-Circular');
    const [language, setLanguage] = useState('HIN');
    const [divisionCode, setDivisionCode] = useState('');
    const [storedAs, setStoredAs] = useState('');

    const handleSave = () => {
        // Handle save logic here
        console.log('Template saved:', { templateId, templateName, documentType, language, divisionCode, storedAs });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-red-600 text-lg font-bold mb-4">Upload Template</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Template Id</label>
                        <input
                            type="text"
                            value={templateId}
                            onChange={(e) => setTemplateId(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Template Name</label>
                        <input
                            type="text"
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Document Type</label>
                        <select
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="C-Circular">C-Circular</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Language</label>
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="HIN">HIN</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Division Code</label>
                        <input
                            type="text"
                            value={divisionCode}
                            onChange={(e) => setDivisionCode(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Stored As</label>
                        <input
                            type="text"
                            value={storedAs}
                            onChange={(e) => setStoredAs(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                        >
                            Exit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}