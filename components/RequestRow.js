import React, { Component } from 'react';
import { Table, Button, Rating, Segment, Label, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import fakenews from '../ethereum/fakenews';
import { Link, Router } from '../routes';

class RequestRow extends Component {
  state = {
    errorMessage: '',
    toggleColor: 'red'
  };

  onRate = async (event, data) => {
    try { 
      console.log('so the address is right', this.props.address);
      this.setState({ errorMessage: 'Updating Review to Blockchain Please Wait !!!' });
      const deployedTopic = fakenews(this.props.address);

      const accounts = await web3.eth.getAccounts();
      console.log('this is the msg.sender ', accounts[0]);
      await deployedTopic.methods.rateNews(data.rating, this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/topics/${this.props.address}/news`);
      this.setState({ errorMessage: "" });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    };
  }

  toggleFake = () => {
    this.setState({toggleColor : 'green'}) ;
    render();
    console.log('execute toggle');
  }
  render() {

    let styles1 = {
      color: 'red',
    };
    const { Row, Cell } = Table;
    const { id, newsStory } = this.props;

    console.log('id => ',id)
    let rewardsDeclared = 'N'; 
    
    return (

      <Row>
        <Cell><Link route={`/topics/${this.props.address}/${id}`} params={{topicNumber: `${id}`}}><a>{id}</a></Link></Cell>
        <Cell>
          <Segment padded color='grey'> {newsStory.newsText} </Segment>
        </Cell>
        <Cell>
          <Button color={this.state.toggleColor}
      content=' Fake News? '
      icon='newspaper outline'
      label={{ basic: true, pointing: 'center', content: '' }} onClick={this.toggleFake} /> Fake News : {newsStory.newsScore} & Not a Fake News : {newsStory.newsScore} <p style={styles1}> <strong> {this.state.errorMessage} </strong></p>
        </Cell>
        <Cell>{newsStory.totalRatings}</Cell>
        <Cell>{rewardsDeclared}</Cell>
        <Cell>
          <Link route={`/topics/${this.props.address}/${id}`} params={{newsNumber: `${id}`}}><a color='white'><Button color="blue" >{newsStory.userAddress}</Button></a></Link>
        </Cell>
      </Row>

    );
  }
}

export default RequestRow;