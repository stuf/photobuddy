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

/**
 * @returns {Array<Object>}
 */
function refreshEntries() {
  Backend.getEntries()
    .then(function (newEntries) {
      entries.replaceAll(newEntries.map(toJS));
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

/**
 * @param {number} id
 * @param {Object} entry
 */
function createEntry(id, entry) {
  Backend.createEntry(id, entry)
    .catch(function (err) {
      console.log('Couldn\'t create entry: ' + id);
    });

  // Most likely not needed, but #YOLO
  refreshEntries();
}

module.exports = {
  entries: entries,

  updateEntry: updateEntry,
  createEntry: createEntry
};
