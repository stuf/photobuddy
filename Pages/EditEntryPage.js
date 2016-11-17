var Observable = require('FuseJS/Observable');
var GeoLocation = require('FuseJS/GeoLocation');
var Context = require('Modules/Context');

var entry = this.Parameter;

var name = entry.map(function (e) { return e.name; });
var location = entry.map(function (e) { return e.location; });
var shutterSpeed = entry.map(function (e) { return e.shutterSpeed });
var aperture = entry.map(function (e) { return e.aperture; });
var iso = entry.map(function (e) { return e.iso; });
var position = entry.map(function (e) { return e.position; });
var notes = entry.map(function (e) { return e.notes; });


function save() {
  Context.updateEntry(entry.value.id, {
    name: name,
    location: location,
    shutterSpeed: shutterSpeed,
    aperture: aperture,
    iso: iso,
    position: position,
    notes: notes
  });

  router.goBack();
}


function cancel() {
  entry.value = entry.value;
  router.goBack();
}


function locateMe() {
  var locateTimeout = 2000;
  GeoLocation.getLocation(locateTimeout)
    .then(function (location) {
      var position = [location.latitude, position.longitude];

      var _entry = entry.value;

      Context.updateEntry(entry.value.id, {
        name: name,
        location: location
      });
      values.position.value = position;
    })
    .catch(function (err) {
      console.log('Error in getting location: ' + err);
    });
}


module.exports = {
    values: values,

    save: save,
    cancel: cancel,
    locateMe: locateMe
};
