import React, { Component } from 'react'
import Header from '../Header/Header';
import styles from './Page.scss';
import UserCard from '../UserCard/UserCard';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.wrapper}>

        <UserCard className={styles.userData}/>

        <div className={styles.mainContent}>
          {this.props.children}
        </div>
        <Header className={styles.header} />
      </div>
    )
  }
}
