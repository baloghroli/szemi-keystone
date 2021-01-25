var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'stats';

	// Load courses
	view.query('ako', keystone.list('Statistic').model.find({
		mutato: 'ÁKÓ',
	}).sort('tipus'));

	view.query('vsm', keystone.list('Statistic').model.find({
		mutato: 'VSM',
	}).sort('tipus'));

	view.query('kk', keystone.list('Statistic').model.find({
		mutato: 'KK',
	}).sort('tipus'));

	// Render the view
	view.render('stats');
};
