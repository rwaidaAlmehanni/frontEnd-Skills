import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Button from 'grommet/components/Button';

export default class PageHeader extends Component {
  constructor() {
    super();
    this._renderMenu = this._renderMenu.bind(this);
  }

  _renderMenu() {
    if(!this.props.active) {
      return (
        <Button icon={<MenuIcon/>}/>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Header float={false} colorIndex="brand" pad="small">
        {this._renderMenu()}
        <Title>
          {this.props.title}
        </Title>
      </Header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};