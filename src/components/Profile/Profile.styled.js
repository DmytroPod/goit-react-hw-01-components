import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  text-align: center;
`;
export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
export const UserInfo = styled.p`
  margin: 5px 0;
`;
export const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
export const ProfileItem = styled.li`
  text-align: center;
  border: 2px solid #555;
  border-radius: 10px;
  padding: 5px 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
export const Label = styled.span`
  display: block;
  margin: 5px 0;
  font-weight: bold;
`;
