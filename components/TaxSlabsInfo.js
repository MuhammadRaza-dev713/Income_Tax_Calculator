import React from 'react';

const TaxSlabsInfo = () => {
    return (
        <div className="mt-16 lg:mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center">
            <h2 className="text-left text-3xl tracking-tight text-slate-900">Tax slabs for the year 2023-2024</h2>
            <p className="mt-4 text-left text-md tracking-tight text-slate-600 leading-relaxed">
                If you The Federal Board of Revenue (FBR) has recently updated the salary tax card for the tax year 2023-2024. This update includes the latest withholding income tax rates, which have been adjusted in accordance with changes made to the Income Tax Ordinance, 2001 through the Finance Act, 2023, up to June 30, 2023. If you can't find what you're looking for, email our support team, and if you're lucky, someone will get back to you.
            </p>
            <p className="mt-4 text-left text-md tracking-tight text-slate-600 leading-relaxed">
                Under Section 149 of the Income Tax Ordinance, 2001, every individual responsible for paying salary to an employee must deduct tax from the amount paid. The withholding tax deduction rate for salaried individuals is the same for both those in the Active Taxpayers List (ATL) and non-ATL. Please refer to the following tax card for salaried persons for the tax year 2023-2024.
            </p>
            <div className="mt-8 flow-root overflow-hidden p-1 sm:overflow-visible sm:p-0">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 sm:px-0 px-4">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Taxable Income
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Tax Rate
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 text-left text-sm font-medium text-gray-900 sm:pl-6">
                                        <span className="text-gray-500">From 1,200,001 PKR To 2,400,000 PKR</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">
                                        <span>15,000 PKR + 12.50% of the amount exceeding 1,200,000 PKR</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 text-left text-sm font-medium text-gray-900 sm:pl-6">
                                        <span className="text-gray-500">From 2,400,001 PKR To 3,600,000 PKR</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">
                                        <span>165,000 PKR + 22.50% of the amount exceeding 2,400,000 PKR</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 text-left text-sm font-medium text-gray-900 sm:pl-6">
                                        <span className="text-gray-500">From 3,600,001 PKR To 6,000,000 PKR</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">
                                        <span>435,000 PKR + 27.50% of the amount exceeding 3,600,000 PKR</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 text-left text-sm font-medium text-gray-900 sm:pl-6">
                                        <span className="text-gray-500">Amount exceeding 6,000,000 PKR</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">
                                        <span>35.00% of the amount exceeding 6,000,000 PKR</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaxSlabsInfo;
