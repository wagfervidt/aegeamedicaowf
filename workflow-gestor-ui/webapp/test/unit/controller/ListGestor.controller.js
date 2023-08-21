/*global QUnit*/

sap.ui.define([
	"combraegeawfaprovacaoworkflowgestorui/workflow-gestor-ui/controller/ListGestor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListGestor Controller");

	QUnit.test("I should test the ListGestor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
