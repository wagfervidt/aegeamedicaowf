/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"combraegeawfaprovacaoworkflowadminui/workflow-administrador-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
