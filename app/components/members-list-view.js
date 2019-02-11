/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'md5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from './pagination';

const initialState = { activeItem: 0, showPage: 0, searchTerm: null };
const resultsPerPage = 5;

class MembersListView extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.clickHandler = this.clickHandler.bind(this);
    this.showPage = this.showPage.bind(this);
  }

  componentDidMount() {
    this.bindEventHandlers();
  }

  componentDidUpdate() {
    this.bindEventHandlers();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.searchTerm !== state.searchTerm) {
      return {
        showPage: 0,
        activeItem: 0,
        searchTerm: props.searchTerm,
      };
    }

    return null;
  }

  componentWillUnmount() {
    const allButtons = document.querySelectorAll('.member a');
    allButtons.forEach(button => button.removeEventListener('click', this.clickHandler));
  }

  bindEventHandlers() {
    const allButtons = document.querySelectorAll('.member a');
    allButtons.forEach(button => button.addEventListener('click', this.clickHandler));
  }

  clickHandler(event) {
    event.preventDefault();

    const parentLi = event.currentTarget.parentNode;
    if (parentLi.classList.contains('members-list__item--active')) return;

    this.setState(() => ({
      activeItem: parseInt(parentLi.getAttribute('data-rel-id')),
    }));
  }

  showPage(pageNumber) {
    this.setState(() => ({
      showPage: pageNumber,
      activeItem: 0,
    }));
  }

  render() {
    const { activeItem, showPage } = this.state;
    const { members } = this.props;

    if (members.length === 0) {
      return <p className="no-members-found">No members found</p>;
    }

    const rangeStart = showPage * resultsPerPage;
    const rangeEnd = (showPage + 1) * resultsPerPage;
    const pageItems = members.slice(rangeStart, rangeEnd);

    return (
      <>
        <h2>{members.length} People</h2>

        <ul className="members-list">
          {pageItems.map(item => {
            const {
              id,
              name,
              email,
              address: { street, suite, city, zipcode },
            } = item;

            const email_hash = md5(email);
            const img_src = `http://www.gravatar.com/avatar/${email_hash}?s=32`;

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
                    {activeItem === id ? (
                      <FontAwesomeIcon icon="angle-down" color="limegreen" />
                    ) : (
                      <FontAwesomeIcon icon="angle-right" color="limegreen" />
                    )}
                  </p>
                </a>
                <p className="member__address">
                  <strong>Address:</strong> {street}, {suite}, {city}, {zipcode}
                </p>
              </li>
            );
          })}
        </ul>
        <Pagination
          resultsPerPage={resultsPerPage}
          currentPage={showPage}
          nrOfItems={members.length}
          changeCallback={this.showPage}
        />
      </>
    );
  }
}

MembersListView.propTypes = {
  members: PropTypes.array,
};

export default MembersListView;
