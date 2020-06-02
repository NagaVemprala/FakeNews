const routes = require('next-routes')();

routes
.add('/topics/newTopic', '/topics/newTopic')
.add('/topics/:address', '/topics/showTopic')
.add('/topics/:address/news', '/topics/news/index')
.add('/topics/:address/:newsNumber', '/topics/showTopic')
.add('/topics/:address/:topicNumber/:topicName', '/topics/showTopic')
.add('/topics/:address/news/new', '/topics/showTopic');
module.exports = routes;