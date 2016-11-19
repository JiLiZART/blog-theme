import svg4everybody from 'svg4everybody';
import $ from 'jquery';

window.Tether = require('tether');
require('bootstrap');
// import BemNaming from 'bem-naming';

// const naming = BemNaming({
//     elem: '__',
//     mod: { name: '--', val: '_' }
// });

$(() => {
	svg4everybody();

	require.ensure([
		'blocks/comment-form'
	], () => {
		$('[data-init]').each((i, el) => {
			console.log('i', i, el);
		});
	});

	require.ensure([
		'blocks/comment-list'
	], () => {
		$('[data-init]').each((i, el) => {
			console.log('i', i, el);
		});
	});

	require.ensure([
		'blocks/comment'
	], () => {
		$('[data-init]').each((i, el) => {
			console.log('i', i, el);
		});
	});

});
