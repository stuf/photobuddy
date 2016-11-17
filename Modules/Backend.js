require('./Polyfills');

var entries = require('Modules/Entries');
var utils = require('Modules/Utils');


function getEntries() {
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
				if (it.id == id) {
					entries[idx] = it;
          resolve(it.id);
				}
			});
		}, 0);
	});
}


function createEntry(entry) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      entries.push(Object.assign({}, entry, { id: utils.guid() }));
      resolve(id);
    }, 0);
  });
}


module.exports = {
	getEntries: getEntries,
  updateEntry: updateEntry,
  createEntry: createEntry
};
