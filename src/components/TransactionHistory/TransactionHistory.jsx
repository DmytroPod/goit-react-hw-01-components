import {
  Table,
  TitleTable,
  TitleTh,
  TableTd,
} from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TitleTable>
        <tr>
          <TitleTh>Type</TitleTh>
          <TitleTh>Amount</TitleTh>
          <TitleTh>Currency</TitleTh>
        </tr>
      </TitleTable>

      <tbody>
        {transactions.map(({ id, currency, amount, type }) => {
          return (
            <tr key={id}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default TransactionHistory;
