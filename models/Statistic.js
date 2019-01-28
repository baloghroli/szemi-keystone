var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * ==========
 */
var Statistic = new keystone.List('Statistic');

Statistic.add({
	mutato: { type: Types.Select, options: 'ÁKÓ, VSM, KK', initial: true },
	tipus: { type: Types.Select, options: 'A, A1, A2, A-A1-A2, AM, B, C' },
	elmelet: { type: String },
	gyakorlat: { type: String },
	koltseg: { type: String },
	negyedev: { type: Types.Select, options: 'I., II., III., IV.' },
});

/**
 * Registration
 */
Statistic.register();
