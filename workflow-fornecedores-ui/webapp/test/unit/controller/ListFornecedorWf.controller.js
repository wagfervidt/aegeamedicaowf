/*global QUnit*/

sap.ui.define([
	"combraegeawfaprovacao/workflow-fornecedores-ui/controller/ListFornecedorWf.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListFornecedorWf Controller");

	QUnit.test("I should test the ListFornecedorWf controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
