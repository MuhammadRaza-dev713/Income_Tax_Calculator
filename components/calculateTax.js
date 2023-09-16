function calculateTax(income) {
  if (income <= 600000) {
    return 0;
  } else if (income <= 1200000) {
    return (income - 600000) * 0.025;
  } else if (income <= 2400000) {
    return 15000 + (income - 1200000) * 0.125;
  } else if (income <= 3600000) {
    return 165000 + (income - 2400000) * 0.225;
  } else if (income <= 6000000) {
    return 435000 + (income - 3600000) * 0.275;
  } else {
    return (income - 6000000) * 0.35;
  }
}

export default calculateTax;