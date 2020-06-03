import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import allTopics from '../ethereum/allTopics';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class newTopic extends Component { 
	state = {
		minimumRewards: '',
		productName: '',
		errorMessage: '',
		loading: false, 
		account: '' 
	}

	onSubmit = async(event) => { 
		event.preventDefault();

		this.setState({loading: true, errorMessage: '' });
		try{ 
		  const accounts = await web3.eth.getAccounts();
		  console.log("web3.version --> ", web3.version);
		  console.log("accounts --> ", accounts);
		  this.setState({account: accounts[0]});
		  const contractOwner = await allTopics.methods.contractOwner().call();
		  await allTopics.methods.createTopic(web3.utils.toWei(this.state.minimumRewards, 'ether'), this.state.productName).send({
		  	  from: accounts[0]
		  });
		  this.setState({account: accounts[0]});

		  Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
		this.setState({loading: false});
	}
	render() {
		web3.eth.getAccounts().then(console.log);
      let styles1 = {
        margin: 'auto',
        marginleft: 'auto',
        marginright: 'auto',
        width: '500px',
        height: 'auto',
        backgroundColor: '#355C7D',
        color: 'white'
      };
      let styles2 = {
        margin: 'auto',
        marginleft: 'auto',
        marginright: 'auto',
        width: '500px',
        height: 'auto',
      };
		return( 
			<Layout>
			<div className="box" style={styles1}>
			<hr/>
			<div> Enter the amount of rewards you would like to distribute for identifying fake news & the description of the fake news topic/theme (e.g: US elections related news) </div>
            <hr/>
            </div>

			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}> 
				<Form.Field> 
					<label> Rewards, you would like to distribute ! </label>
					<Input 
					  label='Cryptos' 
					  labelPosition="right"
					  value={this.state.minimumRewards}
					  onChange={event => this.setState({minimumRewards: event.target.value})} 
					/>

					<p style={{textindent: '5em',}}>  </p>
					<label> Enter your topic details please ! </label>
					<Input style={{ marginTop: '10px' }}
					  label='Product Name' 
					  labelPosition="right"
					  value={this.state.productName}
					  onChange={event => this.setState({productName: event.target.value})} 
					/>
				</Form.Field>

				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>
				  Add Product & Reward Contributions !
				</Button>
			</Form>
			</Layout>
		);
	}
}

export default newTopic;