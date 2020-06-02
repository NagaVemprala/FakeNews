'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _allTopics = require('../ethereum/allTopics');

var _allTopics2 = _interopRequireDefault(_allTopics);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\FakeNews-react\\components\\RequestTopic.js';


var RequestTopic = function (_Component) {
  (0, _inherits3.default)(RequestTopic, _Component);

  function RequestTopic() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestTopic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestTopic.__proto__ || (0, _getPrototypeOf2.default)(RequestTopic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestTopic, [{
    key: 'render',
    value: function render() {
      var styles1 = {
        color: 'red'
      };
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          topic = _props.topic;

      console.log(topic);

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_routes.Link, { route: '/topics/' + topic.topicOwner + '/' + id + '/' + topic.topicName, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, id))), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { padded: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, ' ', topic.topicName, ' ')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, topic.topicOwner));
    }
  }]);

  return RequestTopic;
}(_react.Component);

exports.default = RequestTopic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RUb3BpYy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUmF0aW5nIiwiU2VnbWVudCIsIkxhYmVsIiwiTWVzc2FnZSIsIndlYjMiLCJhbGxUb3BpY3MiLCJMaW5rIiwiUm91dGVyIiwiUmVxdWVzdFRvcGljIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJzdHlsZXMxIiwiY29sb3IiLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInRvcGljIiwiY29uc29sZSIsImxvZyIsInRvcGljT3duZXIiLCJ0b3BpY05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFRLEFBQVEsQUFBUyxBQUFPOztBQUNoRCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0lBRXZCLEE7Ozs7Ozs7Ozs7Ozs7O3dOQUNKLEE7b0JBQVEsQSxBQUNRO0FBRFIsQUFDTjs7Ozs7NkJBR08sQUFDUDtVQUFJO2VBREcsQUFDUCxBQUFjLEFBQ0w7QUFESyxBQUNaO1VBRkssQUFJQyxNQUpELEFBSWUsdUJBSmYsQUFJQztVQUpELEFBSU0sT0FKTixBQUllLHVCQUpmLEFBSU07bUJBQ1MsS0FMZixBQUtvQjtVQUxwQixBQUtDLFlBTEQsQUFLQztVQUxELEFBS0ssZUFMTCxBQUtLLEFBQ1o7O2NBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7NkJBRUcsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLDhCQUFLLG9CQUFrQixNQUFsQixBQUF3QixtQkFBeEIsQUFBc0MsV0FBTSxNQUFsRCxBQUF3RDtvQkFBeEQ7c0JBQUEsQUFBcUU7QUFBckU7eUJBQXFFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLFNBRDdFLEFBQ0UsQUFBTSxBQUFxRSxBQUMzRSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFRLFFBQVQsTUFBZ0IsT0FBaEIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FBK0IsV0FBL0IsQUFBcUMsV0FIekMsQUFFRSxBQUNFLEFBRUYsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsZUFQSixBQUVFLEFBS0UsQUFBYSxBQUlsQjs7Ozs7QUF4QndCLEEsQUEyQjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RUb3BpYy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy92bXQ5MDcvRG9jdW1lbnRzL0Zha2VOZXdzLXJlYWN0In0=