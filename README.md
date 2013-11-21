ZomboidChecklist
================

Browser-based survival checklist for the game Project Zomboid.

This is based on a printable checklist posted by Qloos on the Steam Forums.  The original forum thread is here: http://steamcommunity.com/app/108600/discussions/0/648811852429348177

How to Use the Checklist
------------------------

There are a couple of ways you can use this checklist:

1. Download the package and host it on a server somewhere.
1. Download the package and open index.html in your modern browser of choice.
  * Note: This checklist uses HTML5 localStorage to save your changes. Some browsers may not be okay with using localStorage from a file:/// uri.  In my tests, this was only true with Internet Explorer, but I only tested on IE9. The most recent versions of Chrome and Firefox appeared to work just fine.

Development
-----------

Feel free to clone this repo and submit pull requests at will.  I probably won't be doing much more dev work on this myself, but will be happy to merge in any fixes.

The code isn't the prettiest in the world, but here's the basic idea:

* The meat of the app is in the `js/app` folder. The app uses a barebones AMD implementation to keep things separated into modules.  No asynchronous loading here.  The module scripts still need to be included on the page.
* Knockout is used for two-way databinding and templating.
* If all you want to do is add checklists or checklist items, the data defaults can be found in `js/app/data.js`.

Hack away and let me know if you have any questions.
