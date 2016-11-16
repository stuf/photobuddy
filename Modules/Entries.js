var records = require('./Records');
var Entry = records.EntryRecord;

var entries = [
	new Entry({
		id: 0,
		name: 'Shutter accident',
		location: 'Test location, Test place',
		shutterSpeed: 0.5,
		aperture: 2.8,
		iso: 100,
		notes: 'Accidentally screwed this up by leaving the shutter open'
	}),
	new Entry({
		id: 1,
		name: 'Hardangervidda National Park Vista',
		location: 'Hardanger, Telemark',
		shutterSpeed: 4,
		aperture: 64,
		iso: 100,
		notes: 'Sunny day, no clouds'
	}),
	new Entry({
		id: 2,
		name: 'Odda',
		location: 'Odda, Someplace',
		shutterSpeed: 8,
		aperture: 44,
		iso: 160,
		notes: 'Used Portra 160 here, don\'t know what will come of this'
	})
];

module.exports = entries;