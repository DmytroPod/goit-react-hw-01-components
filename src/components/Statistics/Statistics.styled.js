import styled from '@emotion/styled';

export const Container = styled.section`
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
`;
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;
  padding: 0;

  list-style: none;
  margin: 0;
`;
export const Item = styled.li`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
export const Percentage = styled.span`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;
