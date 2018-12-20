import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import NavSidebar from '../../components/NavSidebar';
import Notification from '../Notification';


class Main extends Component {
  constructor() {
    super();
  }


  render() {
    // const {
    //   nav: { active: navActive, enabled: navEnabled, responsive }
    // } = this.props;
    // const includeNav = (navActive && navEnabled);
    // let nav;
    // if (includeNav) {
    //   nav = <NavSidebar/>;
    // }
    // const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    return (
      <App centered={false}>
        <Split
          flex='right'
        >
          <Router>
            <Switch>
              <Route component={Notification} path="/notification"/>
            </Switch>
          </Router>
        </Split>
      </App>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);