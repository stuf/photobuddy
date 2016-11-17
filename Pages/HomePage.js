var Observable = require('FuseJS/Observable');
var Context = require('Modules/Context');

function goToEntry(arg) {
	var entry = arg.data;
	console.log('arg data is ' + JSON.stringify(entry, null, 2));
	router.push('editEntry', entry);
}

function goToCreateNewEntry() {
	router.push('createEntry', {});
}

module.exports = {
	entries: Context.entries,

	goToEntry: goToEntry,
  goToCreateNewEntry: goToCreateNewEntry
};
