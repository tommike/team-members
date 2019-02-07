import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleInitialData } from '../actions/shared';
import MembersListPage from './members-list-page';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { dataLoading } = this.props;
    if (dataLoading === true) {
      return <h3 className="app-loading">Loading</h3>;
    }
    return (
      <Router>
        <Switch>
          <Route path="/" key="members-list-page" component={MembersListPage} />
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
