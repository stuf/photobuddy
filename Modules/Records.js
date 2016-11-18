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

var StateRecord = I.Record({});

module.exports = {
	EntryRecord: EntryRecord,
  StateRecord: StateRecord
};
