var Observable = require('FuseJS/Observable');

var entry = this.Parameter;

var values = {
  name: entry.map(function (x) { return x.name; }),
  date: entry.map(function (x) { return x.date }),
  location: entry.map(function (x) {return x.location }),
  shutterSpeed: entry.map(function (x) { return x.shutterSpeed }),
  aperture: entry.map(function (x) { return x.aperture; }),
  iso: entry.map(function (x) { return x.iso }),
  position: entry.map(function (x) { return { latitude: x.position[0], longitude: x.position[1] } }),
  notes: entry.map(function (x) { return x.notes })
};

var features = {
  hasPosition: values.position.map(function (p) { return !!p; })
};

function goBack() {
  router.goBack();
}

module.exports = {
  values: values,
  features: features,

  goBack: goBack
};
