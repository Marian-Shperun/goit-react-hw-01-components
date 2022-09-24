import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <main>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </main>
  );
};
