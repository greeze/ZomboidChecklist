/* global define */
'use strict';
define('ChecklistItem', ['knockout'], function(ko){
	var ChecklistItem = {};
	ChecklistItem.create = function(itemData){
		itemData = itemData || {};
		var self = {};
		self.id = itemData.label.replace(/ /g, '_');
		self.label = ko.observable(itemData.label);
		self.checkableItems = ko.observableArray(itemData.checkableItems);
		self.checkedItems = ko.observableArray(itemData.checkedItems);

		return self;
	};
	return ChecklistItem;
});
