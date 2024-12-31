import React from 'react';
 
 export default function CircularList() {
   return (
     <div className="bg-blue-100 min-h-screen p-3">
       <h1 className="text-xl font-semibold">Group Details</h1>
       <div className="relative overflow-x-auto">
         
 
 
       <div class="flex justify-center items-center mb-5 gap-3">
        <label htmlFor="groupSelect" className=" text-sm font-medium text-gray-700 mb-1">
            Group Name
        </label>
        <select
            id="groupSelect"
            name="groupSelect"
            className="w-1/5 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
            <option>Group 1</option>
            <option>Group 2</option>
            <option>Group 3</option>
        </select>
        <button
            type="button"
            className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Search
        </button>
       </div>

       <hr className="border-1 border-black my-10" />

 
         <table className="w-full text-sm font-medium text-left rtl:text-right">
           <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-white">
             <tr>
               <th scope="col" className="px-6 py-3 w-1/6">Date</th>
               <th scope="col" className="px-6 py-3 w-1/6">Circular No.</th>
               <th scope="col" className="px-6 py-3 w-1/6">Index No.</th>
               <th scope="col" className="px-6 py-3 w-1/2">Subject</th>
             </tr>
           </thead>
           <tbody>
             <tr className="bg-white border-b">
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                 2024-12-25
               </th>
               <td className="px-6 py-4">CIR-1234</td>
               <td className="px-6 py-4">IDX-5678</td>
               <td className="px-6 py-4">
                 Detailed Circular Subject for Testing Column Width Adjustments
               </td>
             </tr>
             <tr className="bg-white border-b">
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
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   );
 }
 