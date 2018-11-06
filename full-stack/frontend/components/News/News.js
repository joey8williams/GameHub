import React, { Component } from 'react'
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Story from '../Story/Story';

const ALL_NEWS_QUERY = gql`
  query ALL_NEWS_QUERY{
    stories{
      id
      title
      subHeader
      body
      createdAt
      updatedAt
    }
  }
`;

export default class News extends Component {

  render() {
    return (
      <div>
        <p>News</p>
        <Query query={ALL_NEWS_QUERY}>
          {({data,error,loading}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            return <div>{data.stories.map(story => <Story story={story} key={story.id}/>)}</div>
          }}
        </Query>
      </div>
    )
  }
}
