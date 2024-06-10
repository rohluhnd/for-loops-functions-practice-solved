// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(
  bankAccountsNoPositiveBalance
) {
  let minBalanceAccount = null;

  // Iterate over each account in the array
  for (let i = 0; i < bankAccountsNoPositiveBalance.length; i++) {
    let account = bankAccountsNoPositiveBalance[i];
    // Check if the account balance is greater than 0
    if (account.balance > 0) {
      // If minBalanceAccount is null or the current account has a lower balance
      if (
        minBalanceAccount === null ||
        account.balance < minBalanceAccount.balance
      ) {
        minBalanceAccount = account;
      }
    }
  }

  // Return an array with the account with the lowest balance or an empty array if no such account exists
  return minBalanceAccount ? [minBalanceAccount] : [];
}

const bankAccountsNoPositiveBalance = [
  { id: 1, name: "Susan", balance: -100.32 },
  { id: 2, name: "Morgan", balance: -1100.0 },
  { id: 3, name: "Joshua", balance: -18456.57 },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: -18 },
];
console.log(getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance)); // Output: [{ name: 'Account2', balance: 32 }]
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
