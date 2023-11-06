import React from 'react';
import { Profile } from './Profile/Profile';
import { user } from 'data';
import { user } from 'data';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
