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

var _deployProduct = require('../ethereum/deployProduct');

var _deployProduct2 = _interopRequireDefault(_deployProduct);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\FakeNews-react\\components\\createReview.js';


var createReview = function (_Component) {
  (0, _inherits3.default)(createReview, _Component);

  function createReview() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, createReview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createReview.__proto__ || (0, _getPrototypeOf2.default)(createReview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      reviewText: '',
      errorMessage: '',
      loading: false,
      account: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var deployedProduct, accounts, _accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                console.log(_this.props.address);
                deployedProduct = (0, _deployProduct2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                if (!(typeof _this.props.reviewNumber == "undefined")) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;
                _context.next = 11;
                return deployedProduct.methods.createReview(_this.state.reviewText, accounts[0]).send({
                  from: accounts[0]
                });

              case 11:

                _this.setState({ account: accounts[0] });
                _routes.Router.replaceRoute('/products/' + _this.props.address);
                _this.setState({ reviewText: "" });
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 19:
                _context.next = 34;
                break;

              case 21:
                _context.prev = 21;
                _context.next = 24;
                return _web2.default.eth.getAccounts();

              case 24:
                _accounts = _context.sent;
                _context.next = 27;
                return deployedProduct.methods.updateReview(_this.state.reviewText, _this.props.reviewNumber).send({
                  from: _accounts[0]
                });

              case 27:

                _routes.Router.replaceRoute('/products/' + _this.props.address);
                _this.setState({ reviewText: "" });
                _context.next = 34;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context['catch'](21);

                _this.setState({ errorMessage: _context.t1.message });

              case 34:

                _this.setState({ loading: false, reviewText: '' });

              case 35:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 16], [21, 31]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(createReview, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var HeaderExampleBlock = function HeaderExampleBlock() {
        return _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', block: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, 'Block Header');
      };

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', { 'class': 'ui block header', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Same Place - New Review or Update Your Existing Review'), _react2.default.createElement(_semanticUiReact.TextArea, {
        onChange: function onChange(event) {
          return _this3.setState({ reviewText: event.target.value, value: '' });
        },
        label: 'TEXT',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Post Review'));
    }
  }]);

  return createReview;
}(_react.Component);

exports.default = createReview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNyZWF0ZVJldmlldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJUZXh0QXJlYSIsIk1lc3NhZ2UiLCJCdXR0b24iLCJIZWFkZXIiLCJlY29tbWVyY2VSZXZpZXdzIiwid2ViMyIsIlJvdXRlciIsImNyZWF0ZVJldmlldyIsInN0YXRlIiwicmV2aWV3VGV4dCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJhY2NvdW50Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYWRkcmVzcyIsImRlcGxveWVkUHJvZHVjdCIsInNldFN0YXRlIiwicmV2aWV3TnVtYmVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ1cGRhdGVSZXZpZXciLCJIZWFkZXJFeGFtcGxlQmxvY2siLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBVSxBQUFTLEFBQVE7O0FBQzFDLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDSjtrQkFBUSxBQUNNLEFBQ1o7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBQUNUO2VBQVMsQSxBQUpIO0FBQUEsQUFDTixhLEFBTUY7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3VDQUFBOztzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBRU47O3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDakI7QUFKRyxrQ0FJZSw2QkFBaUIsTUFBQSxBQUFLLE1BSnJDLEFBSWUs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