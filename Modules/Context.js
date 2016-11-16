var Observable = require('FuseJS/Observable');
var Backend = require('./Backend');

var entries = Observable();

// Convert Immutable `Record` instances back into JS structures
var toJS = function (it) {
	if (!it.toJS) {
		return it;
	}
	return it.toJS();
};

Backend.getEntries()
	.then(function (newEntries) {
		 entries.replaceAll(newEntries.map(toJS));
	})
	.catch(function (err) {
		console.log('Couldn\'t get entries: ' + err);
	});

function updateEntry(id, entry) {
	entries.forEach(function (it, idx) {
		var _entry = entries.getAt(idx);

		if (_entry.id == id) {
			entries.replaceAt(idx, entry);
		}
	});

	Backend.updateEntry(id, entry)
		.catch(function (err) {
			console.log('Could\'t update entry: ' + id);
		});
}

module.exports = {
	entries: entries,

	updateEntry: updateEntry
};
