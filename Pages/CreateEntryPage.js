var Observable = require('FuseJS/Observable');
var GeoLocation = require('FuseJS/GeoLocation');
var Context = require('Modules/Context');
var Utils = require('Modules/Utils');

var isValid = Observable(false);

var entry = this.Parameter;

var values = {
  name: entry.map(function (x) { return x.name; }),
  location: entry.map(function (x) { return x.location; }),
  shutterSpeed: entry.map(function (x) { return x.shutterSpeed; }),
  aperture: entry.map(function (x) { return x.aperture; }),
  iso: entry.map(function (x) { return x.iso; }),
  position: entry.map(function (x) { return x.position; }),
  notes: entry.map(function (x) { return x.notes; })
};


function create(arg) {
  var data = {
    id: Utils.guid(),
    name: values.name.value,
    location: values.location.value,
    shutterSpeed: values.shutterSpeed.value,
    aperture: values.aperture.value,
    iso: values.iso.value,
    position: values.position.value,
    notes: values.notes.value
  };

  Context.createEntry(data);

  router.goto("home", { notice: "Entry created." });
}


function cancel() {
  router.goto("home");
}


module.exports = {
  values: values,
  isValid: isValid,

  create: create,
  cancel: cancel
};