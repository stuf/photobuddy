var Observable = require('FuseJS/Observable');
var Context = require('Modules/Context');

function viewEntry(arg) {
	var entry = arg.data;
	console.log('arg data is ' + JSON.stringify(entry, null, 2));
	router.push('viewEntry', entry);
}

function goToCreateNewEntry() {
	router.push('createEntry', {});
}

module.exports = {
	entries: Context.entries,

	viewEntry: viewEntry,
  goToCreateNewEntry: goToCreateNewEntry
};
