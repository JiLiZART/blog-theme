webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _bemNaming = __webpack_require__(27);
	
	var _bemNaming2 = _interopRequireDefault(_bemNaming);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var naming = (0, _bemNaming2.default)({
		elem: '__',
		mod: { name: '--', val: '_' }
	});
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	
		!/* require.ensure */(function (require) {
			(0, _jquery2.default)('[data-init]').each(function (i, el) {
				console.log('i', i, el);
			});
		}(__webpack_require__));
	});

/***/ }
])
//# sourceMappingURL=0.b19260d5f5ce1176cbf9.hot-update.js.map