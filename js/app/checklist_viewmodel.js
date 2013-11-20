/* global define */
'use strict';
define('Checklist', ['knockout', 'ChecklistItem'], function(ko, ChecklistItem){
	var Checklist = {};
	Checklist.create = function(checklistData){
		checklistData = checklistData || {};
		checklistData.checklistItems = checklistData.checklistItems || [];
		var self = {};

		self.label = checklistData.label;
		self.headers = checklistData.headers;
		self.templateType = checklistData.templateType;
		self.checklistItems = [];

		for (var i = 0; i < checklistData.checklistItems.length; i++) {
			self.checklistItems.push(ChecklistItem.create(checklistData.checklistItems[i]));
		}

		return self;
	};
	return Checklist;
});
