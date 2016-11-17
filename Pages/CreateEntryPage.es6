const Observable = require('FuseJS/Observable');
const GeoLocation = require('FuseJS/GeoLocation');
const Context = require('Modules/Context');

let isValid = Observable(false);

let entry = Observable();

let valueKeys = ['name', 'location', 'shutterSpeed', 'aperture', 'iso', 'position', 'notes'];

let values = valueKeys.reduce((obj, k) => {
	obj[k] = entry.map(x => x[k]);
	return obj;
}, {});

function create(arg) {
	Context.createEntry(entry);

	// Add data to `goBack` to display notice of successful save
	router.goBack();
}

function cancel() {
	router.goto("home");
}

module.exports = {
	values,
	isValid,

	create, cancel
};
