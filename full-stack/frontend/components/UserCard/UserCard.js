import React, { Component } from 'react'
import styles from './UserCard.scss';

export default class UserCard extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.wrapper}>
        <p>USER CARD. ITS GONNA HAVE ALL YA LOGIN STUFF. ITS GONNA LOOK LIKE A WOW FRAME</p>

        </div>
      </div>
    )
  }
}
