import React, { Component } from 'react'
import styles from './UserCard.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DisplayCard from './UserDisplay/DisplayCard';
import LoginCard from './UserLogin/LoginCard';

export default class UserCard extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    return (
      <div className={this.props.className} data-showing={this.props.showing}>
        <div className={styles.wrapper}>
        <div className={styles.bodyContent}>
        {this.state.isLoggedIn
          ? <DisplayCard />
          : <LoginCard />
        }
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
