// src/App.jsx

import React from 'react';
import Profile from './Other/Profile/Profile';
import FriendList from './Other/FriendList/FriendList';
import TransactionHistory from './Other/TransactionHistory/TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <h1>Social Network Profile, Friends, and Transactions</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;


