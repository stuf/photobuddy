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

const getValues = () => {
  return Object.keys(values).reduce((obj, v) => {
    obj[v] = values[v].value;
    return obj;
  }, {});
}

function create(arg) {
  console.log('arg ->' + JSON.stringify(arg.data));
	//Context.createEntry(values);

	// Add data to `goBack` to display notice of successful save
	//router.goBack();
}

function cancel() {
	router.goto("home");
}

module.exports = {
	values,
	isValid,

	create, cancel
};
