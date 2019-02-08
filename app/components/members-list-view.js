/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';

const MembersListView = props => {
  const { members } = props;

  return (
    <>
      <h2>{members.length} People</h2>
      <ul className="members-list">
        {members.map((item, index) => {
          const {
            name,
            email,
            address: { street, suite, city, zipcode },
          } = item;

          const email_hash = md5(email);
          const img_src = `http://www.gravatar.com/avatar/${email_hash}?s=32`;

          /* ideally use item-id from database for key attribute */
          return (
            <li key={index} className="members-list__item member">
              <h3 className="member__name">{name}</h3>
              <div className="member__photo">
                <img src={img_src} alt={name} />
              </div>
              <p className="member__email">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p className="member__more">
                <a href="#">Member</a>
              </p>
              <p className="member__address">
                <strong>Address:</strong> {street}, {suite}, {city}, {zipcode}
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
