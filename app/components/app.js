import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { handleInitialData } from '../actions/shared';
import MembersListPage from './members-list-page';

library.add(faSearch, faAngleDown, faAngleRight);

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { dataLoading } = this.props;
    if (dataLoading === true) {
      return <p className="app-loading">Loading</p>;
    }
    return (
      <Router>
        <Switch>
          <Route path="/" exact key="members-list-page" component={MembersListPage} />
          <Route render={() => <p className="page-not-found">Page not found</p>} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  dataLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dataLoading: state.dataLoading,
});

export default connect(mapStateToProps)(App);
