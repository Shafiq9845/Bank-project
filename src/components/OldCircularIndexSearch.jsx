import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function () {

  const formData = {}

  const handleChange=(e)=>{

  }

  const handleSubmit=()=>{

  }

  return (
    <div>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Old Circular Index Search</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date Fields */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">From Date</label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">To Date</label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Index No.</label>
            <input
              type="text"
              name="indexNo"
              value={formData.indexNo}
              onChange={handleChange}
              placeholder="Enter index number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Division Dropdowns */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Division</label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Division</option>
              {/* {divisions.map(div => (
                <option key={div} value={div}>{div}</option>
              ))} */}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Circular No.</label>
            <input
              type="text"
              name="CircularNo"
              value={formData.CircularNo}
              onChange={handleChange}
              placeholder="Enter circular number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Circular Subject</label>
            <input
              type="text"
              name="CircularSubject"
              value={formData.CircularSubject}
              onChange={handleChange}
              placeholder="Enter circular subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
          </div>

        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button
            type="button"
            // onClick={handleReset}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center"
          >
            <ClearIcon className="w-4 h-4 mr-2" />
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
          >
            <SearchIcon className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}
