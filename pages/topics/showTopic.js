import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import allTopics from '../../ethereum/allTopics';
import fakenews from '../../ethereum/fakenews';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';
import CreateNews from '../../components/createNews';

class showTopic extends Component {

    state = {
      errorMessage: '',
      manager: 'N'
    };

	static async getInitialProps(props) {
        const accounts = await web3.eth.getAccounts();
        //this.setState({ manager: 'Y' });
        const deployedTopic = fakenews(props.query.address);
        console.log('There are four possible parameters from this class 1) address 2) Topic Num 3) Name 4) news topic number');
        console.log('1.',props.query.address,'2.',props.query.topicNumber,'3.',props.query.topicName,'4.',props.query.newsNumber);
        const summary = await deployedTopic.methods.getTopicSummary().call();
        console.log('props.query.topicName ', props.query.topicName);
        return { 
        	address: props.query.address,
        	newsNumber: props.query.newsNumber,
            topicName: props.query.topicName, 
            rewardValue: web3.utils.fromWei(summary[0], 'ether'),
            totalNews: summary[1],
            topicOwner: summary[2]
        };
    }

    renderTopicSummary () {
    	const {
    		rewardValue,
    		totalNews,
    		topicOwner,
            topicName
    	} = this.props;

    	const items = [
    	{
    		header: `Total rewards available: ${this.props.rewardValue}` ,
    		meta: '',
            style: { overflowWrap: 'break-word' }
    	},
    	{
    		header: `Total Reviews: ${this.props.totalNews}`,
    		meta: '',
            style: { overflowWrap: 'break-word' }
      }
      ];

      return <Card.Group items={items} />;
    }

	render () {
		return (
			<Layout>
			    <Grid>
			      <Grid.Row>
			        <Grid.Column width={8}>{this.renderTopicSummary()}</Grid.Column>
			        <Grid.Column width={6}>
			          <CreateNews address={this.props.address} newsNumber={this.props.newsNumber}/>
			        </Grid.Column>
			      </Grid.Row>

			      <Grid.Row>
			        <Grid.Column>
			          <Link route={`/topics/${this.props.address}/news`}>
			            <a>
			              <Button primary>View All News</Button>
			            </a>
			          </Link>
			        </Grid.Column>
			      </Grid.Row>
			    </Grid>
                <hr/>
			</Layout> 
			);
	}
} 

export default showTopic;