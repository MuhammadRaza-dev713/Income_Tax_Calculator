'use client'

import React, { useState } from 'react';
import calculateIncomeTax from './calculateIncomeTax';
import CustomInput from "./CustomInput";
import calculateTax from './calculateTax';


const Salary = () => {

    const [income, setIncome] = useState(0);
    const [incomeTax, setIncomeTax] = useState(0);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
    const [annualIncome, setAnnualIncome] = useState(0);
    const [annualTax, setAnnualTax] = useState(0);
    const [annualNetIncome, setAnnualNetIncome] = useState(0);

    function handleIncomeChange  (e) {

        const newIncome = Number(e.target.value);
        setIncome(newIncome);

        const tax = calculateIncomeTax(newIncome);
        setIncomeTax(tax);

        // Calculate and update other values
        const monthlyIncomeValue = newIncome;
        setMonthlyIncome(monthlyIncomeValue);

        const monthlyNetIncomeValue = monthlyIncomeValue - tax;
        setMonthlyNetIncome(monthlyNetIncomeValue);

        const annualIncomeValue = newIncome * 12;
        setAnnualIncome(annualIncomeValue);

        const annualTaxValue = tax * 12;
        setAnnualTax(annualTaxValue);

        const annualNetIncomeValue = annualIncomeValue - annualTaxValue;
        setAnnualNetIncome(annualNetIncomeValue);

    }
    // console.log("Income:", income);
    // console.log("Income Tax:", incomeTax);
    // console.log("Monthly Income:", monthlyIncome);
    // console.log("Monthly Net Income:", monthlyNetIncome);
    // console.log("Annual Income:", annualIncome);
    // console.log("Annual Tax:", annualTax);
    // console.log("Annual Net Income:", annualNetIncome);

    return (

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="p-4 sm:p-6 lg:p-8 shadow rounded-lg overflow-hidden bg-white -mt-20 sticky">
                <div className="flex mb-10 gap-x-4">
                    <div className="w-96">
                        <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                            Your monthly salary
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                                maxLength="8"
                                className="false focus:ring-app focus:border-app block w-full h-12 pr-12 sm:text-sm border-slate-200 rounded-lg focus:shadow-app/75 border"
                                placeholder="0"
                                aria-describedby='price-currency'
                                min="0"
                                max="10000000"
                                type='number'
                                name="income"
                                id="income"
                                onChange={handleIncomeChange}
                            />

                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm" id="price-currency">PKR</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-900/10 flex flex-col gap-y-3 py-4">
                    <div className="flex flex-col gap-y-1">
                        <dt className="text-sm leading-6 text-gray-600">Your Monthly Tax</dt>
                        <dd className="text-2xl font-semibold tracking-tight text-gray-900">
                            {incomeTax.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd>
                    </div>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-8 sm:mt-8 sm:grid-cols-5 xl:mt-8">
                    <div className="flex flex-col gap-y-1">
                        <dt className="text-sm leading-6 text-gray-600">Monthly Income</dt>
                        <dd className="text-lg font-semibold tracking-tight text-gray-900">
                            {monthlyIncome.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-y-1 border-l border-gray-900/10 pl-6">
                        <dt className="text-sm leading-6 text-gray-600">Monthly Net Income</dt>
                        <dd className="text-lg font-semibold tracking-tight text-gray-900">
                            {monthlyNetIncome.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-y-1 sm:border-l sm:border-gray-900/10 sm:pl-6">
                        <dt className="text-sm leading-6 text-gray-600">Annual Income</dt>
                        <dd className=" text-lg font-semibold tracking-tight text-gray-900">
                            {annualIncome.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-y-1 border-l border-gray-900/10 pl-6">
                        <dt className="text-sm leading-6 text-gray-600">Annual Tax</dt>
                        <dd className="text-xl font-semibold tracking-tight text-gray-900">
                            {annualTax.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-y-1 sm:border-l sm:border-gray-900/10 sm:pl-6">
                        <dt className="text-sm leading-6 text-gray-600">Annual Net Income</dt>
                        <dd className="text-xl font-semibold tracking-tight text-gray-900">
                            {annualNetIncome.toLocaleString()} <span className="text-xs">PKR</span>
                        </dd> 
                    </div>
                </dl>
                <p className="text-xs mt-8">
                    Calculates the expected tax as per the updated Income Tax Ordinance, 2001.
                </p>
            </div>
        </section>
    );
};

export default Salary;