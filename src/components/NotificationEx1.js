import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'grommet/components/icons/base/Menu';
import CloseIcon from 'grommet/components/icons/base/Close';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';


const styles = {
  div:{
    width:'33%',
    backgroundColor:'#FFD06E',
    padding:'1em',
    color:'#000',
    display:'flex',
    direction:'rtl',
    margin:'1em',
    textAlign:'center',
    position: 'relative'
  },
  button:{
    marginRight:'2em',
    backgroundColor:'#000',
    color:'#FFD06E',
    padding:'0.5em'
  }

}

export default class NotificationEx1 extends Component {
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
      <div style={styles.div}>
        <b><p>لقد تم إرسال رسالة إلى بريدك الالكتروني يرجى تأكيد الحساب</p></b>
        <Button key="undo" color="#fff" size="medium" style={styles.button}>
          <b>إعادة الإرسال</b>
        </Button>
        <CloseIcon style={{left:'3%',position:'absolute'}}/>
      </div>
    );
  }
}

NotificationEx1.propTypes = {
};