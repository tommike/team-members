/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialState = { activeItem: 0 };
const resultsPerPage = 5;

class MembersListView extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const allButtons = document.querySelectorAll('.member a');
    allButtons.forEach(button => button.addEventListener('click', this.clickHandler));
  }

  componentWillUnmount() {
    const allButtons = document.querySelectorAll('.member a');
    allButtons.forEach(button => button.removeEventListener('click', this.clickHandler));
  }

  clickHandler(event) {
    event.preventDefault();

    const parentLi = event.currentTarget.parentNode;
    if (parentLi.classList.contains('members-list__item--active')) return;

    this.setState(() => ({
      activeItem: parseInt(parentLi.getAttribute('data-rel-id')),
    }));
  }

  render() {
    const { activeItem } = this.state;
    const { members } = this.props;

    if (members.length === 0) {
      return <p className="no-members-found">No members found</p>;
    }

    return (
      <>
        <h2>{members.length} People</h2>

        <ul className="members-list">
          {members.map(item => {
            const {
              id,
              name,
              email,
              address: { street, suite, city, zipcode },
            } = item;

            const email_hash = md5(email);
            const img_src = `http://www.gravatar.com/avatar/${email_hash}?s=32`;

            /* ideally use item-id from database for key attribute */
            return (
              <li
                key={id}
                data-rel-id={id}
                className={`members-list__item member ${
                  activeItem === id ? 'members-list__item--active' : ''
                }`}
              >
                <a href="#">
                  <h3 className="member__name">{name}</h3>
                  <div className="member__photo">
                    <img src={img_src} alt={name} />
                  </div>
                  <p className="member__email">{email}</p>
                  <p className="member__more">
                    Member <FontAwesomeIcon icon="info-angle-right" color="#ccc" />
                  </p>
                </a>
                <p className="member__address">
                  <strong>Address:</strong> {street}, {suite}, {city}, {zipcode}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

MembersListView.propTypes = {
  members: PropTypes.array,
};

export default MembersListView;
