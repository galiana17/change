const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate change
function calculateChange(amount) {
    let dollars = Math.floor(amount / 100);
    amount %= 100;
    let quarters = Math.floor(amount / 25);
    amount %= 25;
    let dimes = Math.floor(amount / 10);
    amount %= 10;
    let nickels = Math.floor(amount / 5);
    let pennies = amount % 5;

    return {
        dollars,
        quarters,
        dimes,
        nickels,
        pennies
    };
}

// Prompt the user for input
rl.question('Enter the total amount in cents: ', (answer) => {
    const amount = parseInt(answer, 10);

    if (isNaN(amount) || amount < 0) {
        console.log('Please enter a valid positive number.');
    } else {
        const change = calculateChange(amount);
        console.log(`Dollars: ${change.dollars}`);
        console.log(`Quarters: ${change.quarters}`);
        console.log(`Dimes: ${change.dimes}`);
        console.log(`Nickels: ${change.nickels}`);
        console.log(`Pennies: ${change.pennies}`);
    }

    // Close the interface
    rl.close();
});
