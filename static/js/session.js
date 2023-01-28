/**
 * Implements cookie-less JavaScript session variables
 * v1.0
 * Original code by Craig Buckler, optimalworks.net, featured on sitepoint.com
 * Adapted by Dae Selcer for Bookshelf
*
 * Usage:
 *
 * // store a session value/object
 * Session.set(name, object);
 *
 * // retrieve a session value/object
 * Session.get(name);
 *
 * // clear all session data
 * Session.clear();
 *
 * // dump session data
 * Session.dump();
 */

 if (JSON && JSON.stringify && JSON.parse) var session = session || (function () {

	 // window object
	 var win = window.top || window;

	 // session store
	 var store = (win.name ? JSON.parse(win.name) : {});

	 // save store on page submit
	 function Save() {
		 win.name = JSON.stringify(store);
	 }

	 // submit form event
	 if (window.addEventListener) window.addEventListener('submit', Save, false);
	 else window.onsubmit = Save;

	 // public methods
	 return {

		 // set a session variable
		 set: function (name, value) {
			 store[name] = value;
		 },

		 // get a session value
		 get: function (name) {
			 return (store[name] ? store[name] : undefined);
		 },

		 // clear session
		 clear: function () {
			 store = {};
			 console.log("yay")
		 },


	 };

 })();