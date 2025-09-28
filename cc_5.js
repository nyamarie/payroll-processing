// Step 2: Sample data 
const employees = [
    { name: "Ava",   hourlyRate: 22.50, hoursWorked: 38 },
    { name: "Liam",  hourlyRate: 18.00, hoursWorked: 40 },
    { name: "Noah",  hourlyRate: 20.00, hoursWorked: 46 },
    { name: "Mia",   hourlyRate: 30.00, hoursWorked: 52 },
    { name: "Zoe",   hourlyRate: 25.00, hoursWorked: 41 },
  ];
  
  // Small helper to keep money tidy 
  const round2 = (n) => Math.round((Number(n) + Number.EPSILON) * 100) / 100;

  // Step 3: Base pay up to 40 hours 
function calculateBasePay(rate, hours) {
    const billableHours = Math.max(0, Math.min(hours, 40));
    return rate * billableHours;
  }
  
  // Step 4: Overtime pay (1.5x over 40)
  function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(0, hours - 40);
    return overtimeHours * rate * 1.5;
  }
  
  // Step 5: Flat 15% tax on gross 
  function calculateTaxes(grossPay) {
    return grossPay * 0.15;
  }
  
  // Step 6: Build a payroll result object for one employee
  function processPayroll(employee) {
    const { name, hourlyRate, hoursWorked } = employee;
  
    const basePay = calculateBasePay(hourlyRate, hoursWorked);
    const overtimePay = calculateOvertimePay(hourlyRate, hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
  
    return {
      name,
      basePay: round2(basePay),
      overtimePay: round2(overtimePay),
      grossPay: round2(grossPay),
      netPay: round2(netPay),
    };
  }
  
  // Step 7: Loop & log each payroll 
  for (const emp of employees) {
    console.log(processPayroll(emp));
  }
  
  // Console tests
  // Base pay tests
  console.log("Base 20×35 =", round2(calculateBasePay(20, 35))); // 700.00
  console.log("Base 20×45 =", round2(calculateBasePay(20, 45))); // 800.00 (capped at 40)
  
  // Overtime tests
  console.log("OT 20×38 =", round2(calculateOvertimePay(20, 38))); // 0.00
  console.log("OT 20×45 =", round2(calculateOvertimePay(20, 45))); // 150.00 (5 * 20 * 1.5)
  
  // Tax tests
  console.log("Tax on 1000 =", round2(calculateTaxes(1000))); // 150.00
  
  // Full payroll spot-check
  console.log(
    "Payroll (rate=20, hours=45):",
    processPayroll({ name: "Test", hourlyRate: 20, hoursWorked: 45 })
  );