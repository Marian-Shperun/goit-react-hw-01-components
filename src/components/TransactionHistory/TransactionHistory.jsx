import { Table, BodyTable, HeadTable } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <Table className="transaction-history">
      <HeadTable>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HeadTable>

      <BodyTable>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </BodyTable>
    </Table>
  );
};
