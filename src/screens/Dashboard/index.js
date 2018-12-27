import React, {Component} from 'react';
import {connect} from 'react-redux';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import MagicIcon from 'grommet/components/icons/base/Magic';
import {Link} from "react-router-dom";


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box full={true} colorIndex={'light-2'}>
        <Article primary={true}>
          {/*<MagicIcon color={'blue'} style={{textAlign:'center'}}/>*/}
          <h1 style={{textAlign:'center',padding:'0.5em',color:'#865cd6'}}>CSS</h1>
          <Box margin={{horizontal:'large'}}>
          <img src={require('../../images/cover2.jpg')} style={{height:'50rem'}}/>
          </Box>
          <Box pad={'small'} align={'center'}>
            <h5 style={{color:'#49516f'}}>Small Documentation for css with some examples, it is the samary of <br/>course in
              lynda () , 2 courses in code Academy () + some research</h5>
          </Box>
          <Box margin={'large'} colorIndex={'light-1'}>
            <Box align={'center'} pad={'medium'}>
              <h1 style={{textAlign:'center',padding:'0.5em',color:'#49516f'}}>Content</h1>
            </Box>
            <Tiles fill={true}
                   flush={false}>
              <Tile >
                <Box colorIndex={'light-2'} pad={'medium'} align={'center'} justifiy={'center'}>
                  <Link to={'/notification'}>
                    <b><h4 style={{color:'#865cd6',fontWeight:500,margin: 'auto'}}> General info</h4></b>
                  </Link>
                </Box>
              </Tile>
              <Tile>
               <Box colorIndex={'light-2'} pad={'medium'} align={'center'} justifiy={'center'}>
                  <Link to={'/notification'}>
                    <b><h4 style={{color:'#865cd6',fontWeight:500,margin: 'auto'}}> Notification</h4></b>
                  </Link>
                </Box>
              </Tile>
              <Tile>
                <Box colorIndex={'light-2'} pad={'medium'} align={'center'} justifiy={'center'}>
                  <Link to={'/notification'}>
                    <b><h4 style={{color:'#865cd6',fontWeight:500,margin: 'auto'}}> Notification</h4></b>
                  </Link>
                </Box>
              </Tile>
              <Tile>
               <Box colorIndex={'light-2'} pad={'medium'} align={'center'} justifiy={'center'}>
                  <Link to={'/notification'}>
                    <b><h4 style={{color:'#865cd6',fontWeight:500,margin: 'auto'}}> Notification</h4></b>
                  </Link>
                </Box>
              </Tile>
            </Tiles>
          </Box>
        </Article>
      </Box>
    )}
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);