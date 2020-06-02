import React, { Component } from 'react';
import { Button, Table, Rating } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import fakenews from '../../../ethereum/fakenews';
import { Link } from '../../../routes';
import RequestRow from '../../../components/RequestRow';

class showReviews extends Component {

	static async getInitialProps(props) {
        const { address } = props.query;
        // console.log('Right address is not fetched ', address);
        const deployedTopic = fakenews(address);
        const newsCount = await deployedTopic.methods.getNewsCount().call();
        // console.log('Total number of news topics ', newsCount);

        const news = await Promise.all(Array(parseInt(newsCount)).fill().map((element, index) => {
            return deployedTopic.methods.news(index).call();
        })
        );
        return { address, news, newsCount};
    }

    renderRows() {
        console.log(this.props.reviews);
        return this.props.news.map((newsStory, index) => {
            return (
                <RequestRow
                key={index}
                id={index}
                newsStory={newsStory}
                address={this.props.address}
                />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>News</h3>
        <Link route={`/topics/${this.props.address}/news/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Add new news story
            </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Id</HeaderCell>
              <HeaderCell>review</HeaderCell>
              <HeaderCell>Mark News Fake/Not</HeaderCell>
              <HeaderCell>total ratings</HeaderCell>
              <HeaderCell>Rewards Issued</HeaderCell>
              <HeaderCell>Reviewer Address</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.newsCount} news.</div>
      </Layout>
    );
  }
}

export default showReviews;