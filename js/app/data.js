/* global define */
'use strict';
define('Data', function() {
	var Data = {};
	var storage = localStorage || {};
	var houses = ['house 1', 'house 2', 'house 3', 'house 4', 'house 5', 'house 6'];
	var levels = ['Vol. 1', 'Vol. 2', 'Vol. 3', 'Vol. 4', 'Vol. 5'];
	var tableTemplate = 'table-checklist';
	var listTemplate = 'list-checklist';
	var defaults = {
		checklists: [
			{label: 'skillbooks', templateType: tableTemplate, headers: levels, checklistItems: [
				{label: 'carpentry', checkableItems: levels, checkedItems: []},
				{label: 'cooking', checkableItems: levels, checkedItems: []},
				{label: 'electrician', checkableItems: levels, checkedItems: []},
				{label: 'farming', checkableItems: levels, checkedItems: []},
				{label: 'first aid', checkableItems: levels, checkedItems: []},
				{label: 'fishing', checkableItems: levels, checkedItems: []},
				{label: 'foraging', checkableItems: levels, checkedItems: []},
				{label: 'mechanics', checkableItems: levels, checkedItems: []},
				{label: 'metalwork', checkableItems: levels, checkedItems: []},
				{label: 'tailoring', checkableItems: levels, checkedItems: []},
				{label: 'trapping', checkableItems: levels, checkedItems: []}
			]},
			{label: 'tool bag', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'baseball bat', checkableItems: houses, checkedItems: []},
				{label: 'hammer', checkableItems: houses, checkedItems: []},
				{label: 'nails', checkableItems: houses, checkedItems: []},
				{label: 'saw', checkableItems: houses, checkedItems: []},
				{label: 'screwdriver', checkableItems: houses, checkedItems: []},
			    {label: 'sledgehammer', checkableItems: houses, checkedItems: []},
				{label: 'axe', checkableItems: houses, checkedItems: []},
				{label: 'trowel', checkableItems: houses, checkedItems: []},
				{label: 'flashlight', checkableItems: houses, checkedItems: []},
				{label: 'battery', checkableItems: houses, checkedItems: []}
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
            {label: 'baggages', templateType: tableTemplate, headers: houses, checklistItems: [
			    {label: 'big hiking bags', checkableItems: houses, checkedItems: []},
			    {label: 'duffel bags', checkableItems: houses, checkedItems: []},
			     {label: 'empty sand bags', checkableItems: houses, checkedItems: []},
			     {label: 'garbage bags', checkableItems: houses, checkedItems: []},
			     {label: 'hiking bags', checkableItems: houses, checkedItems: []},
			     {label: 'plastic bags', checkableItems: houses, checkedItems: []},
			     {label: 'purses', checkableItems: houses, checkedItems: []},
			     {label: 'school bags', checkableItems: houses, checkedItems: []},
			     {label: 'tote bags', checkableItems: houses, checkedItems: []}
			]},
			{label: 'camping', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'lighters', checkableItems: houses, checkedItems: []},
				{label: 'matches', checkableItems: houses, checkedItems: []},
				{label: 'campfire kits', checkableItems: houses, checkedItems: []},
				{label: 'tent kits', checkableItems: houses, checkedItems: []}
			]},
			{label: 'Cooking Utensils', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'spoons', checkableItems: houses, checkedItems: []},
				{label: 'forks', checkableItems: houses, checkedItems: []},
				{label: 'butter knives', checkableItems: houses, checkedItems: []},
				{label: 'kitchen knives', checkableItems: houses, checkedItems: []},
				{label: 'hunting knives', checkableItems: houses, checkedItems: []},
				{label: 'rolling pins', checkableItems: houses, checkedItems: []},
				{label: 'mugs', checkableItems: houses, checkedItems: []},
				{label: 'bowls', checkableItems: houses, checkedItems: []},
				{label: 'frying pans', checkableItems: houses, checkedItems: []},
			    {label: 'kettles', checkableItems: houses, checkedItems: []},
				{label: 'baking pans', checkableItems: houses, checkedItems: []},
			    {label: 'baking trays', checkableItems: houses, checkedItems: []},
			    {label: 'roasting pans', checkableItems: houses, checkedItems: []},
				{label: 'cooking pots', checkableItems: houses, checkedItems: []}
			]},
			{label: 'water storage', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'bowls', checkableItems: houses, checkedItems: []},
				{label: 'buckets', checkableItems: houses, checkedItems: []},
				{label: 'cooking pots', checkableItems: houses, checkedItems: []},
				{label: 'kettle', checkableItems: houses, checkedItems: []},
				{label: 'mugs', checkableItems: houses, checkedItems: []},
				{label: 'empty bottle (pop)', checkableItems: houses, checkedItems: []},
				{label: 'water bottles', checkableItems: houses, checkedItems: []},
				{label: 'empty bottles (whiskey)', checkableItems: houses, checkedItems: []},
			    {label: 'watering cans', checkableItems: houses, checkedItems: []},
				{label: 'gardening spray can', checkableItems: houses, checkedItems: []}
			]},
			{label: 'Nonperishables', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'canned beans', checkableItems: houses, checkedItems: []},
				{label: 'canned carrots', checkableItems: houses, checkedItems: []},
				{label: 'canned corn', checkableItems: houses, checkedItems: []},
				{label: 'canned corned beef', checkableItems: houses, checkedItems: []},
				{label: 'canned mushroom soup', checkableItems: houses, checkedItems: []},
				{label: 'canned peas', checkableItems: houses, checkedItems: []},
				{label: 'canned potatoes', checkableItems: houses, checkedItems: []},
			    {label: 'canned sardines', checkableItems: houses, checkedItems: []},
				{label: 'canned soup', checkableItems: houses, checkedItems: []},
				{label: 'canned tomatoes', checkableItems: houses, checkedItems: []},
				{label: 'tuna', checkableItems: houses, checkedItems: []}
			]},
			{label: 'farming: tools', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'dirt bags', checkableItems: houses, checkedItems: []},
				{label: 'empty sand bags', checkableItems: houses, checkedItems: []},
				{label: 'gardening spray cans', checkableItems: houses, checkedItems: []},
				{label: 'NPK Fertilizer', checkableItems: houses, checkedItems: []},
				{label: 'spades', checkableItems: houses, checkedItems: []},
				{label: 'trowels', checkableItems: houses, checkedItems: []},
				{label: 'watering can', checkableItems: houses, checkedItems: []}
			]},
			{label: 'farming: seeds', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'broccoli seeds', checkableItems: houses, checkedItems: []},
				{label: 'cabbage seeds', checkableItems: houses, checkedItems: []},
				{label: 'carrot seeds', checkableItems: houses, checkedItems: []},
				{label: 'potato seeds', checkableItems: houses, checkedItems: []},
				{label: 'radish seeds', checkableItems: houses, checkedItems: []},
				{label: 'strawberry seeds', checkableItems: houses, checkedItems: []},
				{label: 'tomato seeds', checkableItems: houses, checkedItems: []}
			]},
			{label: 'medical items', templateType: tableTemplate, headers: houses, checklistItems: [
				{label: 'adhesive bandages', checkableItems: houses, checkedItems: []},
				{label: 'alcohol cotton balls', checkableItems: houses, checkedItems: []},
				{label: 'anti-depressants', checkableItems: houses, checkedItems: []},
				{label: 'antibiotics', checkableItems: houses, checkedItems: []},
				{label: 'alcohol wipes', checkableItems: houses, checkedItems: []},
				{label: 'bandages', checkableItems: houses, checkedItems: []},
				{label: 'bath towels', checkableItems: houses, checkedItems: []},
				{label: 'beta blockers', checkableItems: houses, checkedItems: []},
				{label: 'bottles of disinfectant', checkableItems: houses, checkedItems: []},
			    {label: 'cigarettes', checkableItems: houses, checkedItems: []},
				{label: 'cotton balls', checkableItems: houses, checkedItems: []},
				{label: 'dish towels', checkableItems: houses, checkedItems: []},
				{label: 'painkillers', checkableItems: houses, checkedItems: []},
				{label: 'sleeping tablets', checkableItems: houses, checkedItems: []},
				{label: 'splints', checkableItems: houses, checkedItems: []},
				{label: 'sterilized bandages', checkableItems: houses, checkedItems: []},
				{label: 'sterilized rags', checkableItems: houses, checkedItems: []},
				{label: 'suture needles', checkableItems: houses, checkedItems: []},
				{label: 'suture needle holders', checkableItems: houses, checkedItems: []},
				{label: 'tissues', checkableItems: houses, checkedItems: []},
				{label: 'tweezers', checkableItems: houses, checkedItems: []},
				{label: 'vitamins', checkableItems: houses, checkedItems: []}
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
