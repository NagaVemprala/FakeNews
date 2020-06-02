'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _allTopics = require('../ethereum/allTopics');

var _allTopics2 = _interopRequireDefault(_allTopics);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _RequestTopic = require('../components/RequestTopic');

var _RequestTopic2 = _interopRequireDefault(_RequestTopic);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\FakeNews-react\\pages\\index.js?entry';


var fakeNewsIndex = function (_Component) {
  (0, _inherits3.default)(fakeNewsIndex, _Component);

  function fakeNewsIndex() {
    (0, _classCallCheck3.default)(this, fakeNewsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (fakeNewsIndex.__proto__ || (0, _getPrototypeOf2.default)(fakeNewsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(fakeNewsIndex, [{
    key: 'renderTopics',
    value: function renderTopics() {
      return this.props.deployedTopics.map(function (topic, index) {
        return _react2.default.createElement(_RequestTopic2.default, {
          key: index,
          id: index,
          topic: topic,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var styles1 = {
        margin: 'auto',
        marginleft: 'auto',
        marginright: 'auto',
        width: '500px',
        height: 'auto',
        backgroundColor: 'powderblue'
      };
      var styles2 = {
        margin: 'auto',
        marginleft: 'auto',
        marginright: 'auto',
        width: '500px',
        height: 'auto'
      };

      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Earn Crypto Rewards for Saying Fake News as Fake on Blockchain!'), _react2.default.createElement('div', { className: 'box', style: styles1, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Step 1. '), ' Add extension metamask (crypto wallet) and login with your tokens '), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, ' ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Step 2. '), ' We are performing transactions on Rinkeby Test Network. Select it. '), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, ' ', _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Step 3. '), ' Chick "Register" to receive cryptos to post transactions '), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h3', { style: styles2, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, ' Latest News Events - Could possibly be fake. Rate fake news as fake and earn rewards '), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement(_routes.Link, { route: '/topics/newTopic', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Add New Product for Rewards',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/topics/newTopic', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Register',
        icon: 'add',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Id'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Event Name'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'News Event Address'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, this.renderTopics()))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var topicsCount, deployedTopics;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _allTopics2.default.methods.getTopicsCount().call();

              case 2:
                topicsCount = _context.sent;
                _context.next = 5;
                return _promise2.default.all(Array(parseInt(topicsCount)).fill().map(function (element, index) {
                  return _allTopics2.default.methods.deployedTopics(index).call();
                }));

              case 5:
                deployedTopics = _context.sent;
                return _context.abrupt('return', { deployedTopics: deployedTopics });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return fakeNewsIndex;
}(_react.Component);

exports.default = fakeNewsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiYWxsVG9waWNzIiwiQ2FyZCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiUmVxdWVzdFRvcGljIiwiTGluayIsImZha2VOZXdzSW5kZXgiLCJwcm9wcyIsImRlcGxveWVkVG9waWNzIiwibWFwIiwidG9waWMiLCJpbmRleCIsInN0eWxlczEiLCJtYXJnaW4iLCJtYXJnaW5sZWZ0IiwibWFyZ2lucmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInN0eWxlczIiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclRvcGljcyIsIm1ldGhvZHMiLCJnZXRUb3BpY3NDb3VudCIsImNhbGwiLCJ0b3BpY3NDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7bUNBV1csQUFDYjtrQkFBTyxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLElBQUksVUFBQSxBQUFDLE9BQUQsQUFBUSxPQUFVLEFBQy9DOytCQUNJLEFBQUM7ZUFBRCxBQUNLLEFBQ0w7Y0FGQSxBQUVJLEFBQ0o7aUJBSEEsQUFHTzs7c0JBSFA7d0JBREosQUFDSSxBQU1YO0FBTlc7QUFDQSxTQURBO0FBRlosQUFBTyxBQVNSLE9BVFE7Ozs7NkJBV0MsQUFDUjtVQUFJO2dCQUFVLEFBQ0osQUFDUjtvQkFGWSxBQUVBLEFBQ1o7cUJBSFksQUFHQyxBQUNiO2VBSlksQUFJTCxBQUNQO2dCQUxZLEFBS0osQUFDUjt5QkFORixBQUFjLEFBTUssQUFFbkI7QUFSYyxBQUNaO1VBT0U7Z0JBQVUsQUFDSixBQUNSO29CQUZZLEFBRUEsQUFDWjtxQkFIWSxBQUdDLEFBQ2I7ZUFKWSxBQUlMLEFBQ1A7Z0JBZE0sQUFTUixBQUFjLEFBS0o7QUFMSSxBQUNaOztVQVZNLEFBaUJBLFNBakJBLEFBaUJrQyx1QkFqQmxDLEFBaUJBO1VBakJBLEFBaUJRLE1BakJSLEFBaUJrQyx1QkFqQmxDLEFBaUJRO1VBakJSLEFBaUJhLGFBakJiLEFBaUJrQyx1QkFqQmxDLEFBaUJhO1VBakJiLEFBaUJ5QixPQWpCekIsQUFpQmtDLHVCQWpCbEMsQUFpQnlCLEFBQ2pDOzs2QkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFFRSxvRkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLE9BQU0sT0FBckIsQUFBNEI7b0JBQTVCO3NCQUFBLEFBQ0U7QUFERjs7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU0scUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU4sQUFBTSxhQUZSLEFBRUUsQUFDQSx3RkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTSxxQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBTixBQUFNLGFBSFIsQUFHRSxBQUNBLHlGQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFNLHFCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFOLEFBQU0sYUFKUixBQUlFLEFBQ0E7O29CQUFBO3NCQVJKLEFBR0UsQUFLRSxBQUlGO0FBSkU7QUFBQSwyQkFJRixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFFBQUksT0FBSixBQUFXO29CQUFYO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0E7O29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO2lCQUZKLEFBRVksQUFDUjtjQUhKLEFBR1MsQUFDTDtpQkFKSjs7b0JBQUE7c0JBTE4sQUFHRSxBQUNFLEFBQ0UsQUFRSjtBQVJJO0FBQ0ksNEJBT1IsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7aUJBQUQsQUFDWSxBQUNSO2lCQUZKLEFBRVksQUFDUjtjQUhKLEFBR1MsQUFDTDtpQkFKSjs7b0JBQUE7c0JBZEosQUFhRSxBQUNFLEFBT0Y7QUFQRTtBQUNJLDJCQU1OLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSx1QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsK0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTE4sQUFDRSxBQUNFLEFBR0UsQUFHSix5Q0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQTFDTixBQUNBLEFBWUUsQUFxQkUsQUFRRSxBQUFPLEFBQUssQUFNbkI7Ozs7Ozs7Ozs7Ozt1QkFyRjJCLG9CQUFBLEFBQVUsUUFBVixBQUFrQixpQkFBbEIsQSxBQUFtQzs7bUJBQXZEO0E7O3lDQUN1QixBQUFRLFVBQVUsU0FBTixBQUFNLEFBQVMsY0FBZixBQUE2QixPQUE3QixBQUFvQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUM3Rjt5QkFBTyxvQkFBQSxBQUFVLFFBQVYsQUFBa0IsZUFBbEIsQUFBaUMsT0FBeEMsQUFBTyxBQUF3QyxBQUN0RDtBLEFBRjRCLEFBQVksaUJBQUEsQ0FBWjs7bUJBQXZCO0E7aURBR0MsRUFBRSxnQkFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUmlCLEEsQUE0RjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3ZtdDkwNy9Eb2N1bWVudHMvRmFrZU5ld3MtcmVhY3QifQ==