import React, { Component } from 'react'
import styles from './UserCard.scss';

export default class UserCard extends Component {
  render() {
    return (
      <div className={this.props.className} data-showing={this.props.showing}>
        <div className={styles.wrapper}>
        <div className={styles.bodyContent}>
          <p>USER CARD. ITS GONNA HAVE ALL YA LOGIN STUFF. ITS GONNA LOOK LIKE A WOW FRAME</p>
        </div>
        <div className={styles.rightContent}>
          <button className={styles.dontFade} onClick={this.props.onClick}>Toggle</button>
        </div>

        </div>
      </div>
    )
  }
}
