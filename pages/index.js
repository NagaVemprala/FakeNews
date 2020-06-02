import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import allTopics from '../ethereum/allTopics';
import { Card, Button, Table } from 'semantic-ui-react';
import Layout from '../components/Layout';
import RequestTopic from '../components/RequestTopic';
import { Link } from '../routes';

class fakeNewsIndex extends Component {

  static async getInitialProps() {

    const topicsCount = await allTopics.methods.getTopicsCount().call();
    const deployedTopics = await Promise.all(Array(parseInt(topicsCount)).fill().map((element, index) => {
            return allTopics.methods.deployedTopics(index).call();
    }));
    return { deployedTopics};
  }

  renderTopics() {
    return this.props.deployedTopics.map((topic, index) => {
            return (
                <RequestTopic
                key={index}
                id={index}
                topic={topic}
                />
                );
    });
  }

  render () { 
    let styles1 = {
      margin: 'auto',
      marginleft: 'auto',
      marginright: 'auto',
      width: '500px',
      height: 'auto',
      backgroundColor: 'powderblue',
    };
    let styles2 = {
      margin: 'auto',
      marginleft: 'auto',
      marginright: 'auto',
      width: '500px',
      height: 'auto',
    };

    const { Header, Row, HeaderCell, Body } = Table;
    return (
    <Layout>
    <title>Earn Crypto Rewards for Saying Fake News as Fake on Blockchain!</title>
      
      <div className="box" style={styles1}>
        <hr/>
        <div> <strong>Step 1. </strong> Add extension metamask (crypto wallet) and login with your tokens </div>
        <div> <strong>Step 2. </strong> We are performing transactions on Rinkeby Test Network. Select it. </div>
        <div> <strong>Step 3. </strong> Chick "Register" to receive cryptos to post transactions </div>
        <hr/>
      </div>
      

      <div>
        <h3 style={styles2}> Latest News Events - Could possibly be fake. Rate fake news as fake and earn rewards </h3>
        <hr/>
        <Link route="/topics/newTopic">
          <a>
            <Button
                floated="right"
                content="Add New Product for Rewards"
                icon="add"
                primary
            />
          </a>
        </Link>
        <Link route="/topics/newTopic">
          <Button
              floated="right"
              content="Register"
              icon="add"
              primary
          />
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Id</HeaderCell>
              <HeaderCell>Event Name</HeaderCell>
              <HeaderCell>News Event Address</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderTopics()}</Body>
        </Table>
        
      </div>
    </Layout>
    );
  }
}

export default fakeNewsIndex;
