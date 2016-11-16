var entries = require('Modules/Entries');

function getEntries() {
	// return entries;
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(entries);
		}, 0);
	});
}

function updateEntry(id, entry) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			entries.forEach(function (it, idx) {
				if (it.id) {
					entries[idx] = it;
				}
			});

			resolve();
		}, 0);
	});
}

module.exports = {
	getEntries: getEntries,
	updateEntry: updateEntry
};
