import Observable from 'FuseJS/Observable';
import GeoLocation from 'FuseJS/GeoLocation';
import Context from 'Modules/Context';

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
	router.goBack();
}

module.exports = {
	values,

	create, cancel
};
