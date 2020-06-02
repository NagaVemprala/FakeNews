'use strict';

var routes = require('next-routes')();

routes.add('/topics/newTopic', '/topics/newTopic').add('/topics/:address', '/topics/showTopic').add('/topics/:address/news', '/topics/news/index').add('/topics/:address/:newsNumber', '/topics/showTopic').add('/topics/:address/:topicNumber/:topicName', '/topics/showTopic').add('/topics/:address/news/new', '/topics/showTopic');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLG9CQUN5QixBQUR6QixvQkFFQyxBQUZELElBRUssQUFGTCxvQkFFeUIsQUFGekIscUJBR0MsQUFIRCxJQUdLLEFBSEwseUJBRzhCLEFBSDlCLHNCQUlDLEFBSkQsSUFJSyxBQUpMLGdDQUlxQyxBQUpyQyxxQkFLQyxBQUxELElBS0ssQUFMTCw0Q0FLaUQsQUFMakQscUJBTUMsQUFORCxJQU1LLEFBTkwsNkJBTWtDLEFBTmxDO0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy92bXQ5MDcvRG9jdW1lbnRzL0Zha2VOZXdzLXJlYWN0In0=