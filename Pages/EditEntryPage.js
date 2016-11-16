var Observable = require('FuseJS/Observable');
var Context = require('Modules/Context');

var entry = this.Parameter;

var name = entry.map(function (x) { return x.name; });
var location = entry.map(function (x) { return x.location; });
var shutterSpeed = entry.map(function (x) { return x.shutterSpeed; });
var aperture = entry.map(function (x) { return x.aperture; });
var iso = entry.map(function (x) { return x.iso; });
var notes = entry.map(function (x) { return x.notes; });

function save() {
	Context.updateEntry(entry.value.id, {
		name: name.value,
		location: location.value,
		shutterSpeed: shutterSpeed.value,
		aperture: aperture.value,
		iso: iso.value,
		notes: notes.value
	});
	router.goBack();
}

function cancel() {
	entry.value = entry.value;
	router.goBack();
}

module.exports = {
	name: name,
	location: location,
	shutterSpeed: shutterSpeed,
	aperture: aperture,
	iso: iso,
	notes: notes,

	save: save,
	cancel: cancel
};
