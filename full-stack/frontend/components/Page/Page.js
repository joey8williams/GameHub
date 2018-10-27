import React, { Component } from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import Header from '../Header/Header';
import styles from './Page.scss';
import UserCard from '../UserCard/UserCard';

const theme = {
  black: '#000000'
}

injectGlobal`
  @font-face{
    font-family: "Titillium Web", sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Titillium+Web')
    format('woff2');
    font-weight: normal;
    font-style:normal;
  }
  html{
    font-family:"Titillium Web", sans-serif;
    box-sizing: border-box;
    //font-size: 16px;
  }
  *, *:before, *:after{
    box-sizing:inherit;
  }
  body{
    padding:0;
    margin:0;
    font-size:1rem;
    line-height:2;
  }
  a{
    text-decoration: none;
    color:${theme.black};
  }
`;

export default class Page extends Component {
  constructor(){
    super();
    this.state = {
      showing:true
    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.wrapper}>

          <UserCard onClick={this.toggleUserCard} className={styles.userData} showing={this.state.showing} />

          <div className={styles.mainContent}>
            {this.props.children}
          </div>
          <Header className={styles.header} />
        </div>
      </ThemeProvider>
    )
  }

  toggleUserCard = () => {
    this.setState(prevState => (
      this.state.showing = !prevState.showing
    ))

  }
}
