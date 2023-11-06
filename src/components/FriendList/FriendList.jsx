import { List } from './FriedList.styled';

const FrendList = ({ friends }) => {
  return (
    <List class="friend-list">
      {friends.map(({ id, isOnline, name, avatar }) => {
        return (
          <li key={id} class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
          </li>
        );
      })}
    </List>
  );
};

export default FrendList;
