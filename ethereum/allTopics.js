import web3 from './web3';
import compiledFactory from './build/allTopics.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x9Fe262B3ffF55292Eba6C55eb050EC4d04aC64F1'
);

export default instance;