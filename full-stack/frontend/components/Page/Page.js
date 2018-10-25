import React, { Component } from 'react'
import Header from '../Header/Header';
import styles from './Page.scss';
import UserCard from '../UserCard/UserCard';

export default class Page extends Component {
  constructor(){
    super();
    this.state = {
      showing:true
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>

        <UserCard onClick={this.toggleUserCard} className={styles.userData} showing={this.state.showing} />

        <div className={styles.mainContent}>
          {this.props.children}
        </div>
        <Header className={styles.header} />
      </div>
    )
  }

  toggleUserCard = () => {
    this.setState(prevState => (
      this.state.showing = !prevState.showing
    ))
    console.log(this.state.showing);

  }
}
