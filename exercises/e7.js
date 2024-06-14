// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(
  bankAccountsNoPositiveBalance
) {
  let minBalanceAccount = null;
  for (let i = 0; i < bankAccountsNoPositiveBalance.length; i++) {
    let account = bankAccountsNoPositiveBalance[i];
    if (account.balance > 0) {
      if (
        minBalanceAccount === null ||
        account.balance < minBalanceAccount.balance
      ) {
        minBalanceAccount = account;
      }
    }
  }

  return minBalanceAccount ? [minBalanceAccount] : [];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
