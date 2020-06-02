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

var _fakenews = require('../ethereum/fakenews');

var _fakenews2 = _interopRequireDefault(_fakenews);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\vmt907\\Documents\\FakeNews-react\\components\\createNews.js';


var createNews = function (_Component) {
  (0, _inherits3.default)(createNews, _Component);

  function createNews() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, createNews);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = createNews.__proto__ || (0, _getPrototypeOf2.default)(createNews)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      newsText: '',
      errorMessage: '',
      loading: false,
      account: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var deployedTopic, accounts, _accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                console.log(_this.props.address);
                deployedTopic = (0, _fakenews2.default)(_this.props.address);

                console.log('deployedTopic ', deployedTopic);

                _this.setState({ loading: true, errorMessage: '' });

                if (!(typeof _this.props.newsNumber == "undefined")) {
                  _context.next = 22;
                  break;
                }

                _context.prev = 6;
                _context.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context.sent;
                _context.next = 12;
                return deployedTopic.methods.createNews(_this.state.newsText, accounts[0]).send({
                  from: accounts[0]
                });

              case 12:

                _this.setState({ account: accounts[0] });
                _routes.Router.replaceRoute('/topics/' + _this.props.address);
                _this.setState({ reviewText: "" });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](6);

                _this.setState({ errorMessage: _context.t0.message });

              case 20:
                _context.next = 35;
                break;

              case 22:
                _context.prev = 22;
                _context.next = 25;
                return _web2.default.eth.getAccounts();

              case 25:
                _accounts = _context.sent;
                _context.next = 28;
                return deployedProduct.methods.updateNews(_this.state.newsText, _this.props.newsNumber).send({
                  from: _accounts[0]
                });

              case 28:

                _routes.Router.replaceRoute('/topics/' + _this.props.address);
                _this.setState({ reviewText: "" });
                _context.next = 35;
                break;

              case 32:
                _context.prev = 32;
                _context.t1 = _context['catch'](22);

                _this.setState({ errorMessage: _context.t1.message });

              case 35:

                _this.setState({ loading: false, reviewText: '' });

              case 36:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[6, 17], [22, 32]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(createNews, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var HeaderExampleBlock = function HeaderExampleBlock() {
        return _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', block: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, 'Block Header');
      };

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', { 'class': 'ui block header', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Same Place - New News Message or Update Your Existing News'), _react2.default.createElement(_semanticUiReact.TextArea, {
        onChange: function onChange(event) {
          return _this3.setState({ newsText: event.target.value, value: '' });
        },
        label: 'TEXT',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Post Review'));
    }
  }]);

  return createNews;
}(_react.Component);

exports.default = createNews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNyZWF0ZU5ld3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiVGV4dEFyZWEiLCJNZXNzYWdlIiwiQnV0dG9uIiwiSGVhZGVyIiwiZmFrZW5ld3MiLCJ3ZWIzIiwiUm91dGVyIiwiY3JlYXRlTmV3cyIsInN0YXRlIiwibmV3c1RleHQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiYWNjb3VudCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJkZXBsb3llZFRvcGljIiwic2V0U3RhdGUiLCJuZXdzTnVtYmVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJzZW5kIiwiZnJvbSIsInJlcGxhY2VSb3V0ZSIsInJldmlld1RleHQiLCJtZXNzYWdlIiwiZGVwbG95ZWRQcm9kdWN0IiwidXBkYXRlTmV3cyIsIkhlYWRlckV4YW1wbGVCbG9jayIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFVLEFBQVMsQUFBUTs7QUFDMUMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7Z0JBQVEsQUFDSSxBQUNWO29CQUZNLEFBRVEsQUFDZDtlQUhNLEFBR0csQUFDVDtlQUpNLEFBSUcsQTtBQUpILEFBQ04sYUFNRixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtxQ0FBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOzt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ2pCO0FBSkcsZ0NBSWEsd0JBQVMsTUFBQSxBQUFLLE1BSjNCLEFBSWEsQUFBb0IsQUFDMUM7O3dCQUFBLEFBQVEsSUFBUixBQUFZLGtCQUFaLEFBQThCLEFBRTlCOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQVB0QixBQU9ULEFBQWMsQUFBK0I7O3NCQUV6QyxPQUFPLE1BQUEsQUFBSyxNQUFaLEFBQWtCLGNBVGIsQUFTMkIsY0FUM0I7a0NBQUE7QUFBQTtBQUFBOztnQ0FBQTtnQ0FBQTt1QkFXa0IsY0FBQSxBQUFLLElBWHZCLEFBV2tCLEFBQVM7O21CQUExQjtBQVhELG9DQUFBO2dDQUFBO3FDQVlDLEFBQWMsUUFBZCxBQUFzQixXQUFXLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxVQUFVLFNBQXRELEFBQXNELEFBQVMsSUFBL0QsQUFBbUU7d0JBQ25FLFNBYkQsQUFZQyxBQUF3RSxBQUN4RSxBQUFTO0FBRCtELEFBQzlFLGlCQURNOzttQkFJTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBUyxTQUF4QixBQUFjLEFBQVUsQUFBUyxBQUNqQzsrQkFBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsQUFDMUM7c0JBQUEsQUFBSyxTQUFTLEVBQUUsWUFsQlgsQUFrQkwsQUFBYyxBQUFjO2dDQWxCdkI7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBb0JMOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBcEJ6QixBQW9CTCxBQUFjLEFBQW9COzttQkFwQjdCO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dDQUFBO3VCQXdCa0IsY0FBQSxBQUFLLElBeEJ2QixBQXdCa0IsQUFBUzs7bUJBQTFCO0FBeEJELHFDQUFBO2dDQUFBO3VDQXlCQyxBQUFnQixRQUFoQixBQUF3QixXQUFXLE1BQUEsQUFBSyxNQUF4QyxBQUE4QyxVQUFVLE1BQUEsQUFBSyxNQUE3RCxBQUFtRSxZQUFuRSxBQUErRTt3QkFDL0UsVUExQkQsQUF5QkMsQUFBb0YsQUFDcEYsQUFBUztBQUQyRSxBQUMxRixpQkFETTs7bUJBSU47OytCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxBQUMxQztzQkFBQSxBQUFLLFNBQVMsRUFBRSxZQTlCWCxBQThCTCxBQUFjLEFBQWM7Z0NBOUJ2QjtBQUFBOzttQkFBQTtnQ0FBQTtnREFnQ0w7O3NCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFoQ3pCLEFBZ0NMLEFBQWMsQUFBb0I7O21CQUt0Qzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sWUFyQ3ZCLEFBcUNULEFBQWMsQUFBOEI7O21CQXJDbkM7bUJBQUE7Z0NBQUE7O0FBQUE7MkNBQUE7QTs7Ozs7Ozs7Ozs2QkF3Q0Y7bUJBQ1A7O1VBQU0scUJBQXFCLFNBQXJCLEFBQXFCLHFCQUFBOytCQUN6QixBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE9BQWhCO3NCQUFBO3dCQUFBO0FBQUE7U0FBQSxFQUR5QixBQUN6QjtBQURGLEFBSUE7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFFBQUksU0FBSixBQUFVO29CQUFWO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0EsK0VBQUEsQUFBQztrQkFDVyx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQWxCLEFBQXlCLE9BQU8sT0FBdkQsQUFBUyxBQUFjLEFBQXVDO0FBRDFFLEFBRUU7ZUFGRixBQUVRLEFBQ047dUJBSEYsQUFHZ0I7O29CQUhoQjtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFWRixBQVVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FaSixBQUNFLEFBV0UsQUFLTDs7Ozs7QUF0RXNCLEEsQUF5RXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNyZWF0ZU5ld3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdm10OTA3L0RvY3VtZW50cy9GYWtlTmV3cy1yZWFjdCJ9