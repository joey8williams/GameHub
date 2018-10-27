import React, { Component } from 'react'
import styles from './UserCard.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class UserCard extends Component {
  render() {
    return (
      <div className={this.props.className} data-showing={this.props.showing}>
        <div className={styles.wrapper}>
        <div className={styles.bodyContent}>
          <p>USER CARD. ITS GONNA HAVE ALL YA LOGIN STUFF. ITS GONNA LOOK LIKE A WOW FRAME</p>
        </div>
        <div className={styles.rightContent}>
          <button className={styles.dontFade} onClick={this.props.onClick}>
            <FontAwesomeIcon className={this.props.showing ? styles.toggleIcon : [styles.toggleIcon,styles.spin].join(' ')} icon="angle-double-left" />
          </button>
        </div>

        </div>
      </div>
    )
  }
}
