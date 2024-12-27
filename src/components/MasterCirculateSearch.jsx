import React, { useState } from "react";
import { Search, X } from "lucide-react";

const MasterCircularSearch = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Master Circular Search
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        From Date
                    </label>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        To Date
                    </label>
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Division
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Division</option>
                        <option value="div1">Division 1</option>
                        <option value="div2">Division 2</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Sub Division
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Sub Division</option>
                        <option value="sub1">Sub Division 1</option>
                        <option value="sub2">Sub Division 2</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Master Circular No.
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Master Circular Subject
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                </button>
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default MasterCircularSearch;
