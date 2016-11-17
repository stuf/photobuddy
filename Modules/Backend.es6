const entries = require('Modules/Entries');
const records = require('Modules/Records');
const utils = require('Modules/Utils');

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

function createEntry(entry) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('create entry ' + JSON.stringify(entry));
      const id = utils.guid();
      entries.push({ ...entry, id });
      resolve(id);
    }, 0);
  });
}

module.exports = {
	getEntries, updateEntry, createEntry
};
