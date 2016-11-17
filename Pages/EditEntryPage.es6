const Observable = require('FuseJS/Observable');
const GeoLocation = require('FuseJS/GeoLocation');
const Context = require('Modules/Context');

let entry = this.Parameter;

let valueKeys = ['name', 'location', 'shutterSpeed', 'aperture', 'iso', 'position', 'notes'];

let values = valueKeys.reduce((obj, k) => {
    obj[k] = entry.map(x => x[k]);
    return obj;
}, {});

function save() {
  Context.updateEntry(entry.value.id, { ...values });
  router.goBack();
}

function cancel() {
  entry.value = entry.value;
  router.goBack();
}

function locateMe() {
  let locateTimeout = 2000;
  GeoLocation.getLocation(locateTimeout)
    .then(location => {
      const { latitude, longitude, accuracy, altitude } = location;
      const position = [latitude, longitude];

      console.log(`Successfully got location: ${latitude}, ${longitude} with accuracy ${accuracy}`);

      Context.updateEntry(entry.value.id, { ...values, position });
      values.position.value = position;
    })
    .catch(err => console.log(`Error in getting location: ${err}`));
}

module.exports = {
    values,

    save, cancel, locateMe
};
