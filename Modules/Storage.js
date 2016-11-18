var Storage = require('FuseJS/Storage');

var filename = 'entries.json';


/**
 * Read entries from the datafile
 * @returns {Promise}
 */
module.exports.load = function () {
  return new Promise(function (resolve, reject) {
    Storage.read(filename)
      .then(function (data) {
        resolve({ ok: true, content: data });
      }, function (err) {
        reject({ ok: false, msg: err });
      });
  });
};


/**
 * Write entries to the datafile
 * @returns {Promise}
 */
module.exports.save = function (data) {
  return new Promise(function (resolve, reject) {
    Storage.write(filename, data)
      .then(function (succeeded) {
        if (succeeded) {
          resolve({ ok: true, msg: 'Wrote a length of ' + data.length + ' to file ' + filename });
        }
        else {
          console.log('Couldn\'t write to file.');
          reject({ ok: false, msg: 'Could not write to file ' + filename });
        }
      });
  });
};
