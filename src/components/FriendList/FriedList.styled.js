import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 20px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid;
  width: 400px;
  gap: 30px;
  padding: 20px;
  border-radius: 30px;
  background-color: #fff;
`;
export const Status = styled.span`
  background-color: ${prop => (prop.$isOnline ? 'green' : 'red')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 50px;
  display: block;
`;
export const UserAvatar = styled.img`
  margin-right: 50px;
`;
export const UserName = styled.p`
  font-weight: bold;
`;
