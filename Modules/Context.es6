var Observable = require('FuseJS/Observable');
var Backend = require('./Backend');
var entries = Observable();

Backend.getEntries()
  .then(function (newEntries) {
     entries.replaceAll(newEntries);
  })
  .catch(function (err) {
    console.log('Couldn\'t get entries: ' + err);
  });

/**
 * @returns {Array<Object>}
 */
function refreshEntries() {
  Backend.getEntries()
    .then(function (newEntries) {
      entries.replaceAll(newEntries);
    })
    .catch(function (err) {
      console.log('Couldn\'t get entries: ' + err);
    });
}

/**
 * @param {number} id
 * @param {Object} entry
 */
function updateEntry(id, entry) {
  console.log(`Update entry with ID ${id}`);
  entries.forEach(function (it, idx) {
    var _entry = entries.getAt(idx);

    if (_entry.id == id) {
      console.log(`Entry with ID ${id} found. Updating.`);
      entries.replaceAt(idx, entry);
    }
  });

  Backend.updateEntry(id, entry)
    .then(id => {
      console.log(`Successfully updated entry with ID ${id}`);
    })
    .catch(function (err) {
      console.log(`Couldn't update entry with ID ${id}`);
    });
}

/**
 * @param {number} id
 * @param {Object} entry
 */
function createEntry(id, entry) {
  Backend.createEntry(id, entry)
    .catch(function (err) {
      console.log(`Couldn't create entry with ID ${id}`);
    });

  // Most likely not needed, but #YOLO
  refreshEntries();
}

module.exports = {
  entries,

  updateEntry, createEntry
};
