import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  border-collapse: collapse;
  line-height: 1.1;

  font-size: 20px;
  background: radial-gradient(farthest-corner at 50% 50%, white, #dcecf8);
  color: #0c213b;
  width: 600px;
  margin: 0 auto;
`;

const Th = styled.th`
  /* border: 1px solid grey; */
  background-color: blue;
  padding: 10px;
  border: 1px solid #a9e2cc;
  color: #fff;
`;

const Td = styled.td`
  font-size: 0.8em;
  padding: 5px 7px;
  border: 1px solid #a9e2cc;
`;

function TransactionHistory({ transaction }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>
      <tbody>
        {transaction.map((transaction) => (
          <tr key={transaction.id}>
            <Td>{transaction.type}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.proptype = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
