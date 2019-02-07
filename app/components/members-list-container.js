import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MembersListView from './members-list-view';

const initialState = {
  searchTerm: '',
};

// const resultsPerPage = 3;

class MembersListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(() => ({
      searchTerm: event.target.value,
    }));
  }

  render() {
    const { members, location } = this.props;
    const message = location.state && location.state.showSuccess ? location.state.showSuccess : '';

    const { searchTerm } = this.state;

    return (
      <>
        {message && <p className="new-member-created">New member has been successfully created</p>}

        <form id="search-toolbar">
          <input
            type="text"
            name="search-term"
            value={searchTerm}
            placeholder="Find by name"
            autoComplete="off"
            onChange={this.handleSubmit}
          />
        </form>

        {Array.isArray(members) && members.length ? (
          <MembersListView members={members} />
        ) : (
          <p className="nothing-found">No members found</p>
        )}
      </>
    );
  }
}

MembersListContainer.propTypes = {
  location: PropTypes.object,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = state => ({
  members: state.members,
});

export { MembersListContainer };

export default connect(mapStateToProps)(withRouter(MembersListContainer));
