import React, { Component } from 'react'
import Header from '../Header/Header';
import styles from './Page.scss';

export default class Page extends Component {
  render() {
    return (
      <div className={styles.wrapper}>

        {this.props.children}
        <Header />
      </div>
    )
  }
}
