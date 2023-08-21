/*global QUnit*/

sap.ui.define([
	"combraegeawfaprovacaoworkflowadminui/workflow-administrador-ui/controller/ListAdmin.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListAdmin Controller");

	QUnit.test("I should test the ListAdmin controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
