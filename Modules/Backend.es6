const entries = require('Modules/Entries');
const records = require('Modules/Records');

//var EntryRecord = records.EntryRecord;
const { EntryRecord } = records;

function getEntries() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(entries);
		}, 0);
	});
}

function updateEntry(id, entry) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			entries.forEach((it, idx) => {
				if (it.id == id) {
					entries[idx] = it;
          resolve(it.id);
				}
			});
		}, 0);
	});
}

function createEntry(id, entry) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      entries.push(entry);
    }, 0);
  });
}

module.exports = {
	getEntries, updateEntry, createEntry
};
