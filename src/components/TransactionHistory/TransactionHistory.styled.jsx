import styled from 'styled-components';

export const Table = styled.table`
  width: 80%;
  margin: 50px auto;
  border-spacing: inherit;
  font-weight: 400;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  td,
  th {
    padding: 10px;
    border-right: 1px solid rgb(201, 201, 201);
  }
`;

export const HeadTable = styled.thead`
  background-color: #00bcd5;
  color: white;
`;
export const BodyTable = styled.tbody`
  text-align: center;

  & tr:nth-child(odd) {
    background-color: white;
  }
`;
