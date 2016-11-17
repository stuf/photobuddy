require('Modules/Polyfills');

var Observable = require('FuseJS/Observable');
var GeoLocation = require('FuseJS/GeoLocation');
var Context = require('Modules/Context');

var entry = this.Parameter;

var values = {
  id: entry.map(function (x) { return x.id }),
  name: entry.map(function (x) { return x.name; }),
  location: entry.map(function (x) { return x.location; }),
  shutterSpeed: entry.map(function (x) { return x.shutterSpeed; }),
  aperture: entry.map(function (x) { return x.aperture; }),
  iso: entry.map(function (x) { return x.iso; }),
  position: entry.map(function (x) { return x.position; }),
  notes: entry.map(function (x) { return x.notes; })
};


function save() {
  Context.updateEntry(entry.value.id, {
    name: values.name.value,
    location: values.location.value,
    shutterSpeed: values.shutterSpeed.value,
    aperture: values.aperture.value,
    iso: values.iso.value,
    position: values.position.value,
    notes: values.notes.value
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
      values.position.value = [location.latitude, location.longitude];
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
