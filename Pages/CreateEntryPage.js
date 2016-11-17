var Observable = require('FuseJS/Observable');
var GeoLocation = require('FuseJS/GeoLocation');
var Context = require('Modules/Context');
var Utils = require('Modules/Utils');

var isValid = Observable(false);

var entry = Observable();

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
  console.log('Create with data: ' + Utils.spew(arg.data));
  router.goto("home", { notice: "Entry created." });
}


function cancel() {
  router.goto("home");
}


module.exports = {
  values: values,
  isValid: isValid,

  create: create, cancel: cancel
};