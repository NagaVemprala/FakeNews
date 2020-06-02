'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _allTopics = require('../../ethereum/allTopics');

var _allTopics2 = _interopRequireDefault(_allTopics);

var _fakenews = require('../../ethereum/fakenews');

var _fakenews2 = _interopRequireDefault(_fakenews);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _createNews = require('../../components/createNews');

var _createNews2 = _interopRequireDefault(_createNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\FakeNews-react\\pages\\topics\\showTopic.js?entry';


var showTopic = function (_Component) {
    (0, _inherits3.default)(showTopic, _Component);

    function showTopic() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, showTopic);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = showTopic.__proto__ || (0, _getPrototypeOf2.default)(showTopic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            manager: 'N'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(showTopic, [{
        key: 'renderTopicSummary',
        value: function renderTopicSummary() {
            var _props = this.props,
                rewardValue = _props.rewardValue,
                totalNews = _props.totalNews,
                topicOwner = _props.topicOwner,
                topicName = _props.topicName;

            var items = [{
                header: 'Total rewards available: ' + this.props.rewardValue,
                meta: '',
                style: { overflowWrap: 'break-word' }
            }, {
                header: 'Total Reviews: ' + this.props.totalNews,
                meta: '',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.renderTopicSummary()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_createNews2.default, { address: this.props.address, newsNumber: this.props.newsNumber, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_routes.Link, { route: '/topics/' + this.props.address + '/news', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'View All News')))))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var accounts, deployedTopic, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context.sent;

                                //this.setState({ manager: 'Y' });
                                deployedTopic = (0, _fakenews2.default)(props.query.address);

                                console.log('There are four possible parameters from this class 1) address 2) Topic Num 3) Name 4) news topic number');
                                console.log('1.', props.query.address, '2.', props.query.topicNumber, '3.', props.query.topicName, '4.', props.query.newsNumber);
                                _context.next = 8;
                                return deployedTopic.methods.getTopicSummary().call();

                            case 8:
                                summary = _context.sent;

                                console.log('props.query.topicName ', props.query.topicName);
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    newsNumber: props.query.newsNumber,
                                    topicName: props.query.topicName,
                                    rewardValue: _web2.default.utils.fromWei(summary[0], 'ether'),
                                    totalNews: summary[1],
                                    topicOwner: summary[2]
                                });

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return showTopic;
}(_react.Component);

exports.default = showTopic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0b3BpY3NcXHNob3dUb3BpYy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGF5b3V0IiwiYWxsVG9waWNzIiwiZmFrZW5ld3MiLCJ3ZWIzIiwiTGluayIsIkNyZWF0ZU5ld3MiLCJzaG93VG9waWMiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsIm1hbmFnZXIiLCJwcm9wcyIsInJld2FyZFZhbHVlIiwidG90YWxOZXdzIiwidG9waWNPd25lciIsInRvcGljTmFtZSIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyVG9waWNTdW1tYXJ5IiwiYWRkcmVzcyIsIm5ld3NOdW1iZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZGVwbG95ZWRUb3BpYyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInRvcGljTnVtYmVyIiwibWV0aG9kcyIsImdldFRvcGljU3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwidXRpbHMiLCJmcm9tV2VpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7c05BRUYsQTswQkFBUSxBQUNRLEFBQ2Q7cUJBRk0sQSxBQUVHO0FBRkgsQUFDTjs7Ozs7NkNBc0JvQjt5QkFNakIsS0FOaUIsQUFNWjtnQkFOWSxBQUVwQixxQkFGb0IsQUFFcEI7Z0JBRm9CLEFBR3BCLG1CQUhvQixBQUdwQjtnQkFIb0IsQUFJcEIsb0JBSm9CLEFBSXBCO2dCQUpvQixBQUtk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