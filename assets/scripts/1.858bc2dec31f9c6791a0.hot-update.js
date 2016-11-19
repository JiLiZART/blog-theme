webpackHotUpdate(1,{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(8);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(11);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CommentsList = function () {
		function CommentsList($el, options) {
			(0, _classCallCheck3.default)(this, CommentsList);
	
			$el.on('focus', '.comments__feed-button', this.onFeedButtonFocus);
		}
	
		(0, _createClass3.default)(CommentsList, [{
			key: 'onFeedButtonFocus',
			value: function onFeedButtonFocus(e) {
				(0, _jquery2.default)(e.target).popover({
					container: '.comments__feed-body'
				});
			}
		}]);
		return CommentsList;
	}();
	
	exports.default = CommentsList;

/***/ }

})
//# sourceMappingURL=1.858bc2dec31f9c6791a0.hot-update.js.map