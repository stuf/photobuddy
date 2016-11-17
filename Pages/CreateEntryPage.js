var Observable = require('FuseJS/Observable');
var GeoLocation = require('FuseJS/GeoLocation');
var Context = require('Modules/Context');
var Utils = require('Modules/Utils');

var isValid = Observable(false);

var entry = Observable();


function create(arg) {
  console.log('Create with data: ' + Utils.spew(arg.data));
  router.goto("home", { notice: "Entry created." });
}


function cancel() {
  router.goto("home");
}


module.exports = {
  // values: values,
  isValid: isValid,

  create: create, cancel: cancel
};