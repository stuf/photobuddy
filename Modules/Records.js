var I = require('immutable');

var EntryRecord = I.Record({
	id: undefined,
	name: undefined,
	location: undefined,
	shutterSpeed: undefined,
	aperture: undefined,
	iso: undefined,
	notes: undefined,
	position: undefined
});

module.exports = {
	EntryRecord: EntryRecord
};
