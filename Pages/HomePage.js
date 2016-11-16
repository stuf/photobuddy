var Observable = require('FuseJS/Observable');
var Context = require('Modules/Context');

function goToEntry(arg) {
	var entry = arg.data;
	router.push('editEntry', entry);
}

module.exports = {
	entries: Context.entries,

	goToEntry: goToEntry
};
