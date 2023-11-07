import { List } from './FriedList.styled';
import FrendListItem from '../FrendListItem/FrendListItem';
const FrendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          // <Item key={id}>
          //   <Status $isOnline={isOnline}>{isOnline}</Status>
          //   <UserAvatar src={avatar} alt="User avatar" width="48" />
          //   <p>{name}</p>
          // </Item>
          <FrendListItem
            key={id}
            isOnline={isOnline}
            name={name}
            avatar={avatar}
          />
        );
      })}
    </List>
  );
};

export default FrendList;
