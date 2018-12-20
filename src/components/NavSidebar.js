import React, { Component, PropTypes } from 'react';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Anchor from 'grommet/components/Anchor';
import DashboardIcon from 'grommet/components/icons/base/Dashboard';
import UserIcon from 'grommet/components/icons/base/User';
import BookIcon from 'grommet/components/icons/base/Book';
import QuizIcon from 'grommet/components/icons/base/Clipboard';
import LogoutIcon from 'grommet/components/icons/base/Logout';

export default class NavSidebar extends Component {
  constructor() {
    super();
  }



  render() {
    return (
      <Sidebar colorIndex='neutral-3' size="small">
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
          <Title a11yTitle='Close Menu'>
            <img src={''} width={'100%'}/>
          </Title>
          <Button
            icon={<CloseIcon />}
            plain={true}
            a11yTitle='Close Menu'
          />
        </Header>
        <Menu fill={true} primary={true}>
          <Anchor label={'Dashboard'} icon={<DashboardIcon/>} path="/dashboard"/>
          <Anchor label={'Users'} icon={<UserIcon/>} path="/users"/>
          <Anchor label={'Quizzes'} icon={<QuizIcon/>} path="/quizzes"/>
          <Anchor label={'Content'} icon={<BookIcon/>} path="/content"/>
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Anchor label='Logout' icon={<LogoutIcon />}/>
        </Footer>
      </Sidebar>
    );
  }
}


NavSidebar.propTypes = {
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  })
};