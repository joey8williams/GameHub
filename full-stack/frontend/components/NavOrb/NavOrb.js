import React, { Component } from 'react'
import styles from './NavOrb.scss';
import threeEntryPoint from './threeEntryPoint';

//TODO: Get this thing working
export default class NavOrb extends Component {
  componentDidMount(){
    threeEntryPoint(this.threeRootElement);
  }
  render() {

    //the className passed to this component is responsible
    //for positioning and sizing of the orb
    return (
      <div className={this.props.className}>
        <div className={styles.wrapper}
          ref={element => this.threeRootElement = element}>

        </div>
      </div>
    )
  }
}
