import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Story extends Component {
  static propTypes = {
    story: PropTypes.object.isRequired
  }

  render() {
    const {story} = this.props;
    return (
      <div>
        <h2>{story.title}</h2>
        <span>{story.subHeader}</span>
        <p>{story.body}</p>

      </div>
    )
  }
}
