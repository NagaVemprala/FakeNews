import React, { Component } from 'react';
import { Table, Button, Rating, Segment, Label, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import allTopics from '../ethereum/allTopics';
import { Link, Router } from '../routes';

class RequestTopic extends Component {
  state = {
    errorMessage: ''
  };

  render() {
    let styles1 = {
      color: 'red',
    };
    const { Row, Cell } = Table;
    const { id, topic } = this.props;
    console.log(topic);
    
    return (

      <Row>
        <Cell><Link route={`/topics/${topic.topicOwner}/${id}/${topic.topicName}`}><a>{id}</a></Link></Cell>
        <Cell>
          <Segment padded color='grey'> {topic.topicName} </Segment>
        </Cell>
        <Cell>{topic.topicOwner}</Cell>
      </Row>

    );
  }
}

export default RequestTopic;