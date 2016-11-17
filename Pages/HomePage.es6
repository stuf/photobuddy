const Observable = require('FuseJS/Observable');
const Context = require('Modules/Context');

function goToEntry(arg) {
	let entry = arg.data;
  console.log('arg data is ' + JSON.stringify(entry));
	router.push('editEntry', entry);
}

function goToCreateNewEntry() {
  router.push('createEntry', {});
}

module.exports = {
	entries: Context.entries,

	goToEntry, goToCreateNewEntry
};
