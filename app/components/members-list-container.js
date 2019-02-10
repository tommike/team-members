import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MembersListView from './members-list-view';
import SearchForm from './search-form';

const initialState = {
  searchTerm: '',
};

class MembersListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const term = event.target.value;
    this.setState(() => ({
      searchTerm: term,
    }));
  }

  render() {
    const { members, location } = this.props;
    const message = location.state && location.state.showSuccess ? location.state.showSuccess : '';

    const { searchTerm } = this.state;

    return (
      <>
        {message && <p className="new-member-created">New member has been successfully created</p>}

        <SearchForm changeCallback={this.handleChange} searchTerm={searchTerm} />
        <MembersListView members={members} searchTerm={searchTerm} />
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
