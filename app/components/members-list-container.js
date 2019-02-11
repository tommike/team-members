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
    const { members } = this.props;
    const { searchTerm } = this.state;

    const results = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <SearchForm changeCallback={this.handleChange} searchTerm={searchTerm} />
        <MembersListView members={results} searchTerm={searchTerm} />
      </>
    );
  }
}

MembersListContainer.propTypes = {
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
