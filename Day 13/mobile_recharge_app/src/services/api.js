export const getPlans = (operator) => {
  // Dummy data
  const plans = {
    jio: [
      { price: 239, validity: "28 days", data: "1.5GB/day", type: "prepaid", category: "data" },
      { price: 299, validity: "28 days", data: "2GB/day", type: "prepaid", category: "data" },
      { price: 149, validity: "28 days", data: "Unlimited", type: "prepaid", category: "calls" },
      { price: 399, validity: "84 days", data: "6GB", type: "prepaid", category: "data" },
      { price: 599, validity: "Monthly", data: "Unlimited", type: "postpaid", category: "data" },
      { price: 799, validity: "Monthly", data: "Unlimited", type: "postpaid", category: "calls" }
    ],
    airtel: [
      { price: 265, validity: "28 days", data: "1.5GB/day", type: "prepaid", category: "data" },
      { price: 299, validity: "28 days", data: "2GB/day", type: "prepaid", category: "data" }
    ],
    vi: [
      { price: 249, validity: "28 days", data: "1.5GB/day", type: "prepaid", category: "data" }
    ]
  };

  return plans[operator];
};
