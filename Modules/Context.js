require('./Polyfills');

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


function refreshEntries() {
  Backend.getEntries()
    .then(function (newEntries) {
      entries.replaceAll(newEntries);
    })
    .catch(function (err) {
      console.log('Couldn\'t get entries: ' + err);
    });
}


function updateEntry(id, entry) {
  entries.forEach(function (it, idx) {
    var _entry = entries.getAt(idx);

    if (_entry.id == id) {
      entries.replaceAt(idx, entry);
    }
  });

  Backend.updateEntry(id, entry)
    .then(function (id) {
      console.log('Successfully updated entry with ID ' + id);
      console.log(JSON.stringify(entry, null, 2));
    })
    .catch(function (err) {
      console.log('Couldn\'t update entry with ID ' + id);
    });
}


function createEntry(entry) {
  console.log('Create entry with JSON ' + JSON.stringify(entry, null, 2));
  entries.add(entry);

  Backend.createEntry(entry)
    .then(function (a) {
      console.log('a -> ' + JSON.stringify(entry, null, 2));
    });
}


module.exports = {
  entries: entries,

  updateEntry: updateEntry,
  createEntry: createEntry
};
