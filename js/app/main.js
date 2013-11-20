/* global define, alert */
'use strict';
define('main', ['knockout', 'Data', 'Checklist'], function(ko, Data, Checklist){
	if(!document.querySelector || !JSON) { alert('Sorry, this checklist only works in modern browsers. It is really time to upgrade.'); return;}
	if(!localStorage) { alert('Your browser doesn\'t support localStorage. You will not be able to save your changes.'); }
	var self = {};
	self.checklists = ko.observableArray();
	self.notes = ko.observable();
	self.loaded = ko.observable(false);

	self.init = function() {
		var data = Data.load();

		self.checklists(ko.utils.arrayMap(data.checklists, function(checklistData) {
			return Checklist.create(checklistData);
		}));

		self.notes(data.notes);

		self.changed = ko.computed(self.save).extend({ throttle: 500 });
	};

	self.clear = function(){
		Data.clear();
		self.init();
		window.top.location = window.top.location; // reload because IE
	};

	self.save = function() {
		Data.save(ko.toJS(self));
	};

	self.init();
	self.loaded(true);
	ko.applyBindings(self, document.querySelector('.pz-checklist'));
});
