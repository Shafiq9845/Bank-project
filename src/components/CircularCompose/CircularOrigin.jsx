import React, { useState } from 'react';

export default function CircularOrigin() {
    const [issuer, setIssuer] = useState('CBHO');
    const [division, setDivision] = useState('11');
    const [subDivision, setSubDivision] = useState('11.00');
    const [version, setVersion] = useState('ENGLISH');
    const [circularDate, setCircularDate] = useState('2004-11-09');
    const [products, setProducts] = useState([
        { productCode: 'AGBCS', productDescription: 'AG.BUSINESS/CLINICS SHORT TERM LOAN' },
    ]);
    const [scheme, setScheme] = useState('');

    return (
        <div className="mb-6">
            <h3 className="text-md font-semibold">Circular Origin</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700">Issuer</label>
                    <input
                        type="text"
                        value={issuer}
                        onChange={(e) => setIssuer(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Division</label>
                    <input
                        type="text"
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Sub Division</label>
                    <input
                        type="text"
                        value={subDivision}
                        onChange={(e) => setSubDivision(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Version</label>
                    <select
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="ENGLISH">ENGLISH</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Circular Date</label>
                    <input
                        type="date"
                        value={circularDate}
                        onChange={(e) => setCircularDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Scheme</label>
                    <input
                        type="text"
                        value={scheme}
                        onChange={(e) => setScheme(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
            </div>

            {/* Product Table */}
            <h4 className="font-semibold mt-4">Product</h4>
            <table className="min-w-full border border-gray-300 mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Product Code</th>
                        <th className="border border-gray-300 px-4 py-2">Product Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{product.productCode}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.productDescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 