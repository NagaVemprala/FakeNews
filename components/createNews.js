import React, { Component } from 'react';
import { Form, TextArea, Message, Button, Header } from 'semantic-ui-react';
import fakenews from '../ethereum/fakenews';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class createNews extends Component {
  state = {
    newsText: '',
    errorMessage: '',
    loading: false, 
    account: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    console.log(this.props.address);
    const deployedTopic = fakenews(this.props.address);
    console.log('deployedTopic ', deployedTopic);

    this.setState({ loading: true, errorMessage: '' });

    if (typeof this.props.newsNumber == "undefined") {
      try {
        const accounts = await web3.eth.getAccounts();
        await deployedTopic.methods.createNews(this.state.newsText, accounts[0]).send({
        from: accounts[0]
      });

        this.setState({account: accounts[0]});
        Router.replaceRoute(`/topics/${this.props.address}`);
        this.setState({ reviewText: "" });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
    } else {
      try {
        const accounts = await web3.eth.getAccounts();
        await deployedProduct.methods.updateNews(this.state.newsText, this.props.newsNumber).send({
        from: accounts[0]
        });

        Router.replaceRoute(`/topics/${this.props.address}`);
        this.setState({ reviewText: "" });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
    }
    

    this.setState({ loading: false, reviewText: '' });
  };

  render() {
    const HeaderExampleBlock = () => (
      <Header as='h3' block>Block Header</Header>
    );

    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <h3 class="ui block header">Same Place - New News Message or Update Your Existing News</h3>
          <TextArea
            onChange={event => this.setState({ newsText: event.target.value, value: '' })}
            label="TEXT"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Post Review
        </Button>
      </Form>
    );
  }
}

export default createNews;