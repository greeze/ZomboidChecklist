/* global define */
'use strict';
define('Data', function() {
	var Data = {};
	var storage = localStorage || {};
	var houses = ['house 1', 'house 2', 'house 3', 'house 4', 'house 5', 'house 6'];
	var levels = ['beginner', 'intermediate', 'advanced', 'expert', 'master'];
	var tableTemplate = 'table-checklist';
	var listTemplate = 'list-checklist';
	var defaults = {
		checklists: [
			{label: 'skillbooks', templateType: tableTemplate, headers: levels, checklistItems: [
				{label: 'carpentry', checkableItems: levels, checkedItems: []},
				{label: 'cooking', checkableItems: levels, checkedItems: []},
				{label: 'farming', checkableItems: levels, checkedItems: []}
			]},
			{label: 'safehouses', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'house perimeter cleared', checkableItems: houses, checkedItems: []},
				{label: 'house interior cleared', checkableItems: houses, checkedItems: []},
				{label: 'window curtains installed', checkableItems: houses, checkedItems: []},
				{label: 'extra weapons cached', checkableItems: houses, checkedItems: []},
				{label: 'tool box stocked', checkableItems: houses, checkedItems: []},
				{label: 'unused points of entry barricaded', checkableItems: houses, checkedItems: []},
				{label: 'water barrels constructed', checkableItems: houses, checkedItems: []},
				{label: 'second floor/sleeping area isolated or secured', checkableItems: houses, checkedItems: []},
				{label: 'farm field enclosed', checkableItems: houses, checkedItems: []},
				{label: 'adequate supply of water and nonperishable food', checkableItems: houses, checkedItems: []},
				{label: 'cooking utensils stored near food', checkableItems: houses, checkedItems: []},
				{label: 'first aid cabinet stocked', checkableItems: houses, checkedItems: []},
				{label: 'recreational literature shelved for future reading', checkableItems: houses, checkedItems: []},
				{label: 'firearm put aside for future emergency', checkableItems: houses, checkedItems: []},
				{label: 'seeds sown', checkableItems: houses, checkedItems: []},
				{label: 'outdoor firepit made', checkableItems: houses, checkedItems: []}
			]},
			{label: 'tool box checklist', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'hammer', checkableItems: houses, checkedItems: []},
				{label: 'saw', checkableItems: houses, checkedItems: []},
				{label: 'axe', checkableItems: houses, checkedItems: []},
				{label: 'screwdriver', checkableItems: houses, checkedItems: []},
				{label: 'sledgehammer', checkableItems: houses, checkedItems: []},
				{label: 'flashlight', checkableItems: houses, checkedItems: []}
			]},
			{label: 'cooking utensil checklist', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'bowls', checkableItems: houses, checkedItems: []},
				{label: 'kettle', checkableItems: houses, checkedItems: []},
				{label: 'pot', checkableItems: houses, checkedItems: []},
				{label: 'frying pan', checkableItems: houses, checkedItems: []},
				{label: 'roasting pan', checkableItems: houses, checkedItems: []},
				{label: 'can opener', checkableItems: houses, checkedItems: []},
				{label: 'dish towels', checkableItems: houses, checkedItems: []},
				{label: 'kitchen knife', checkableItems: houses, checkedItems: []}
			]},
			{label: 'first aid kit checklist', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'bandages', checkableItems: houses, checkedItems: []},
				{label: 'painkillers', checkableItems: houses, checkedItems: []},
				{label: 'beta blockers', checkableItems: houses, checkedItems: []},
				{label: 'anti-depressants', checkableItems: houses, checkedItems: []},
				{label: 'vitamins', checkableItems: houses, checkedItems: []},
				{label: 'sleeping tablets', checkableItems: houses, checkedItems: []},
				{label: 'cigarettes', checkableItems: houses, checkedItems: []},
				{label: 'tissue', checkableItems: houses, checkedItems: []}
			]},
			{label: 'others', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'trowel', checkableItems: houses, checkedItems: []},
				{label: 'watering can', checkableItems: houses, checkedItems: []},
				{label: 'campfire kit', checkableItems: houses, checkedItems: []},
				{label: 'tent kit', checkableItems: houses, checkedItems: []},
				{label: 'sweater', checkableItems: houses, checkedItems: []}
			]}
		],
		notes: ''
	};

	Data.load = function() {
		if(!storage.pzchecklist) { Data.save(defaults); }
		return JSON.parse(storage.pzchecklist);
	};

	Data.save = function(serializedData) {
		storage.pzchecklist = JSON.stringify(serializedData);
	};

	Data.clear = function() {
		delete storage.pzchecklist;
	};

	return Data;
});
