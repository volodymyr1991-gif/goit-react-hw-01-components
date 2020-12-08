import React from "react";

function TransactionHistory({ transaction }) {
  return (
    <table>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>
      <tbody>
        {transaction.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
