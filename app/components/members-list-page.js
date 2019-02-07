import React from 'react';
import MembersListContainerConnected from './members-list-container';

const MembersListPage = () => (
  <div className="page">
    <header>
      <h1 className="page__title">Team Members</h1>
    </header>
    <main className="page__content">
      <MembersListContainerConnected />
    </main>
  </div>
);

export default MembersListPage;
