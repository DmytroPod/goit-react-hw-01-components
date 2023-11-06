import { List, Status, Item, UserAvatar } from './FriedList.styled';

const FrendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <Item key={id}>
            <Status $isOnline={isOnline}>{isOnline}</Status>
            <UserAvatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </Item>
        );
      })}
    </List>
  );
};

export default FrendList;
