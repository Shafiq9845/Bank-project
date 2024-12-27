import React from 'react'

export default function FavouritesCircular() {
  return (
    <div>
      <div className="bg-blue-100 min-h-screen p-3">
      <h1 className="text-xl font-semibold">Favourites Circular List</h1>
      <div className="relative overflow-x-auto">
        


      <div class="flex flex-col items-center mb-2">
        <span class="text-sm text-gray-700 dark:text-black">
            Showing <span class="font-semibold text-gray-900 ">1</span> to <span class="font-semibold text-gray-900 ">10</span> of <span class="font-semibold text-gray-900">100</span> Entries
        </span>
        <div class="inline-flex mt-1 xs:mt-0">
            <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Prev
            </button>
            <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </button>
        </div>
      </div>

        <table className="w-full text-sm font-medium text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/6">Date</th>
              <th scope="col" className="px-6 py-3 w-1/6">Circular No.</th>
              {/* <th scope="col" className="px-6 py-3 w-1/6">Index No.</th> */}
              <th scope="col" className="px-6 py-3 w-1/2">Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2024-12-25
              </th>
              <td className="px-6 py-4">CIR-1234</td>
              {/* <td className="px-6 py-4">IDX-5678</td> */}
              <td className="px-6 py-4">
                Detailed Circular Subject for Testing Column Width Adjustments
              </td>
            </tr>
            {/* <tr className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2024-12-24
              </th>
              <td className="px-6 py-4">CIR-2345</td>
              <td className="px-6 py-4">IDX-6789</td>
              <td className="px-6 py-4">
                Another Example Subject for Adjusting Table Columns
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                2024-12-23
              </th>
              <td className="px-6 py-4">CIR-3456</td>
              <td className="px-6 py-4">IDX-7890</td>
              <td className="px-6 py-4">Final Example Subject with Longer Text</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
