// defining history
const history = [];
 
// adding to history function
function addToHistory(a, b, operator, result) {
    history.push({
        operands: [a, b], 
        operator,
         result
    });
}

// Function to show history
function displayHistory() {
    if (history.length === 0) return "No stored calculations.";
    return history
    .map(
        (entry, i) =>
            `${i + 1}: ${entry.operands[0]} ${entry.operator} ${entry.operands[1]} = ${entry.result}`
    )
    .join("\n");
}

// Simple operation functions
// add function
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
}
// subtract function
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}
// multiply function
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}
// divide function
function divide(a, b) {
    if (b === 0) {
        const error = "Error: Division by zero";
        addToHistory(a, b, "/", error);
        return error;
    }
    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

// test for working code
console.log(add(15, 5));
console.log(subtract(5, 15));
console.log(divide(20, 2));
console.log(multiply(3, 17));
console.log(divide(23, 0));

console.log(displayHistory());