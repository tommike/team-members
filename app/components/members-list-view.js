/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const MembersListView = props => {
  const { members } = props;

  return (
    <>
      <h2>{members.length} People found</h2>
      <ul className="members-list">
        {members.map((item, index) => {
          const { name, email } = item;

          /* ideally use item-id from database for key attribute */
          return (
            <li key={index} className="members-list__item">
              <h3>{name}</h3>
              <p>
                <a href="mailto:{email}">{email}</a>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MembersListView.propTypes = {
  members: PropTypes.array,
};

export default MembersListView;
