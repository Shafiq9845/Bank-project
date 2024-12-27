import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function DCircularSearch() {

  const formData = {}

  const handleChange=(e)=>{

  }

  const handleSubmit=()=>{

  }

  return (
    <div>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Circular Search</h2>
        
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
            <label className="block text-sm font-medium text-gray-700">Sub Division</label>
            <select
              name="subDivision"
              value={formData.subDivision}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Sub Division</option>
              {/* {subDivisions.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))} */}
            </select>
          </div>

          {/* Text Fields */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Keyword</label>
            <input
              type="text"
              name="keyword"
              value={formData.keyword}
              onChange={handleChange}
              placeholder="Enter keywords"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Circular Subject</label>
            <input
              type="text"
              name="circularSubject"
              value={formData.circularSubject}
              onChange={handleChange}
              placeholder="Enter circular Subject"
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

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Product Code</label>
            <select
              name="productCode"
              value={formData.productCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Product Code</option>
              {/* {productCodes.map(code => (
                <option key={code} value={code}>{code}</option>
              ))} */}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">H O Circular No.</label>
            <input
              type="text"
              name="hoCircularNo"
              value={formData.hoCircularNo}
              onChange={handleChange}
              placeholder="Enter H O circular number"
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
