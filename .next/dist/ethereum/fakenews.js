'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _fakenews = require('./build/fakenews.json');

var _fakenews2 = _interopRequireDefault(_fakenews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(_fakenews2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWtlbmV3cy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY29tcGlsZWRGYWN0b3J5IiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzNCO1FBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLG1CQUFnQixBQUEzQixBQUF0QixZQUE2RCxBQUE3RCxBQUFQLEFBQ0E7QUFGRCIsImZpbGUiOiJmYWtlbmV3cy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy92bXQ5MDcvRG9jdW1lbnRzL0Zha2VOZXdzLXJlYWN0In0=