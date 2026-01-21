let employeeName = prompt("Enter Employee Name:");
let workingDays = parseInt(prompt("Enter Number of Working Days:"));
let basicPayPerDay = parseFloat(prompt("Enter Basic Pay per Day:"));
let bonus = parseFloat(prompt("Enter Bonus Amount:"));

// Calculate Basic Salary
let basicSalary = workingDays * basicPayPerDay;

// Calculate Gross Salary
let grossSalary = basicSalary + bonus;

// Calculate Tax
let taxRate = (grossSalary <= 30000) ? 0.05 : 0.10;
let tax = grossSalary * taxRate;

// Calculate Net Salary
let netSalary = grossSalary - tax;

// Display Salary Details
document.writeln(`
    <h2>Employee Salary Details</h2>
    <p>Employee Name: ${employeeName}</p>
    <p>Working Days: ${workingDays}</p>
    <p>Basic Salary: ₹${basicSalary.toFixed(2)}</p>
    <p>Bonus: ₹${bonus.toFixed(2)}</p>
    <p>Gross Salary: ₹${grossSalary.toFixed(2)}</p>
    <p>Tax Deduction: ₹${tax.toFixed(2)} (${(taxRate * 100)}%)</p>
    <p><b>Net Salary: ₹${netSalary.toFixed(2)}</b></p>
`);