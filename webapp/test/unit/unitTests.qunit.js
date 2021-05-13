/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"appl4desafio./app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
