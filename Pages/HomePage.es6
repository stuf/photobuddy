const Observable = require('FuseJS/Observable');
const Context = require('Modules/Context');

function goToEntry(arg) {
	var entry = arg.data;
	router.push('editEntry', entry);
}

function goToCreateNewEntry() {
  router.push('createEntry', {});
}

module.exports = {
	entries: Context.entries,

	goToEntry, goToCreateNewEntry
};
