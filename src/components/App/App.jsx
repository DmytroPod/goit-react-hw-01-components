import React from 'react';

import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FrendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FrendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
