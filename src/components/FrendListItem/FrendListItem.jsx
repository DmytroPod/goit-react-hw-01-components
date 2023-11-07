import { Status, Item, UserAvatar, UserName } from './FrendListItem.styled';

const FrendListItem = ({ id, isOnline, name, avatar }) => {
  return (
    <Item key={id}>
      <Status $isOnline={isOnline}>{isOnline}</Status>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
};
export default FrendListItem;
