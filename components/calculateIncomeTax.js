function calculateIncomeTax(income) {
    const taxSlabs = [
        { maxIncome: 600000, rate: 1.25 },
        { maxIncome: 1200000, rate: 2.5 },
        { maxIncome: 2400000, rate: 12.5 },
        { maxIncome: 3600000, rate: 22.5 },
        { maxIncome: 6000000, rate: 27.5 },
        { maxIncome: Infinity, rate: 35 },
    ];


    let totalTax = 0;

    for (const slab of taxSlabs) {
        if (income <= 0) {
            break;
        }

        const slabMax = slab.maxIncome;
        const slabRate = slab.rate;

        if (income <= slabMax) {

            totalTax += (income * slabRate) / 100;
            break;
        } else {

            totalTax += (slabMax * slabRate) / 100;
            income -= slabMax;
        }
    }

    return totalTax;
}

export default calculateIncomeTax


// const taxableIncome = 6000000
// const incomeTax = calculateIncomeTax(taxableIncome);
// console.log(`Income Tax: PKR ${incomeTax}`);

