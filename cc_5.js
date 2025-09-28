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