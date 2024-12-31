import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function DRelativeSearch() {

  const formData = {}

  const handleChange=(e)=>{

  }

  const handleSubmit=()=>{

  }

  return (
    <div>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Relative Circular Search</h2>
        
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Date Fields */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">H.O. Circular No.</label>
            <input
              type="text"
              name="hoCircularNo"
              value={formData.hoCircularNo}
              onChange={handleChange}
              placeholder='Enter the H.O. Circular No.'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
        </div>

        <div className="mt-8 flex justify-center space-x-4">
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
