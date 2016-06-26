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
				{label: 'farming', checkableItems: levels, checkedItems: []},
				{label: 'fishing', checkableItems: levels, checkedItems: []},
				{label: 'trapping', checkableItems: levels, checkedItems: []}
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
            {label: 'Medical items', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'adhesive bandages', checkableItems: houses, checkedItems: []},
					{label: 'alcohol cotton balls', checkableItems: houses, checkedItems: []}
			]},
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
