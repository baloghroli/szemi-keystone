var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * ==========
 */
var Course = new keystone.List('Course');

Course.add({
	start: { type: String, required: true, initial: true },
	place: { type: String },
});

/**
 * Registration
 */
Course.register();
