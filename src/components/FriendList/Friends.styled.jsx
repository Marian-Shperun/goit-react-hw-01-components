import styled from 'styled-components';

export const FriendListEl = styled.ul`
  width: 320px;
  margin: 50px auto;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  gap: 20px;
  margin-bottom: 10px;

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'red' : 'green';
  }};
`;
