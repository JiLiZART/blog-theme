import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import likely from 'ilyabirman-likely';

window.Tether = require('tether');
require('bootstrap');

// Finds all the widgets in the DOM and initializes them

// import BemNaming from 'bem-naming';

// const naming = BemNaming({
//     elem: '__',
//     mod: { name: '--', val: '_' }
// });

$(() => {
	svg4everybody();

	console.log(likely.initiate());
});
