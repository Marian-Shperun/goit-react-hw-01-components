import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';



export const App = () => {
  return (
    <main>
      <Profile user={user} />
    </main>
  );
};
