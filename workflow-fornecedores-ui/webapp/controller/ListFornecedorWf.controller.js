let oNumeroMedicao = '';
let oContract = '';
let oCatalogModel = "";
let oHeader = "";
let oWfModel = "";
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.br.aegea.wfaprovacao.workflowfornecedoresui.controller.ListFornecedorWf", {
            onInit: function () {
                var that = this;
                if (oCatalogModel == "") {
                    oCatalogModel = this.getView().getModel();

                    this.getView().setModel(
                        new JSONModel(oCatalogModel),
                        "CatalogModel"
                    );
                }

                let oWf = window.taskModel;

                if (oWfModel == "") {
                    oWfModel = window.oModelWf;

                    this.getView().setModel(
                        new JSONModel(oWfModel),
                        "WfModel"
                    );
                }

                let oPath = "/TaskCollection(SAP__Origin='" +
                    oWf.SAP__Origin + "',InstanceID='" +
                    oWf.InstanceID + "')/CustomAttributeData";

                oWfModel.read(
                    oPath,
                    {
                        success: function (oData) {
                            var oModel = new JSONModel(oData.results[0]);
                            for (var i = 0; i < oData.results.length; i++) {
                                if (oData.results[i].Name == "NumeroMedicao") {
                                    oNumeroMedicao = oData.results[i].Value
                                }
                                if (oData.results[i].Name == "Contrato") {
                                    oContract = oData.results[i].Value
                                }
                            }
           
                            var aFilter = [];
                            if (oContract != "") {
                                aFilter.push(new Filter("Ebeln", FilterOperator.EQ, oContract));
                                aFilter.push(new Filter("NumeroMedicao", FilterOperator.EQ, oNumeroMedicao));
                            }

                            oCatalogModel.read(
                                "/Interactions_Header",
                                {
                                    filters: aFilter,
                                    success: function (oData) {
                                        var oModel = new JSONModel(oData.results[0]);
                                        oHeader = oData.results[0];
                                        that.getView().setModel(oModel, "HeaderModel");
                                    },
                                    error: function (oError) { },
                                },
                                true
                            )

                            oCatalogModel.read(
                                "/Interactions_Item",
                                {
                                    filters: aFilter,
                                    success: function (oData) {
                                        for (var i = 0; i < oData.results.length; i++) {
                                            oData.results[i].QtdMedir = 0;
                                            oData.results[i].QuantidadeMedida = parseFloat(
                                                oData.results[i].QuantidadeMedida
                                            ).toFixed(3);
                                            oData.results[i].ValorMedido = parseFloat(
                                                oData.results[i].ValorMedido
                                            ).toFixed(3);
                                            oData.results[i].Saldo = parseFloat(
                                                oData.results[i].Saldo
                                            ).toFixed(3);
                                            oData.results[i].QtdMedir = parseFloat(
                                                oData.results[i].QtdMedir
                                            ).toFixed(3);
                                            oData.results[i].QuantidadeOriginal = parseFloat(
                                                oData.results[i].QuantidadeOriginal
                                            ).toFixed(3);
                                            oData.results[i].ValorUnitario = parseFloat(
                                                oData.results[i].ValorUnitario
                                            ).toFixed(2);
                                            oData.results[i].QuantidadeMes = parseFloat(
                                                oData.results[i].QuantidadeMes
                                            ).toFixed(3);
                                            oData.results[i].ValorMes = parseFloat(
                                                oData.results[i].ValorMes
                                            ).toFixed(2);
                                            oData.results[i].QuantidadeMesAnterior = parseFloat(
                                                oData.results[i].QuantidadeMesAnterior
                                            ).toFixed(3);
                                            oData.results[i].ValorMesAnterior = parseFloat(
                                                oData.results[i].ValorMesAnterior
                                            ).toFixed(2);
                                        }
                                        var oModel = new JSONModel(oData.results);
                                        that.getView().setModel(oModel, "ListModel");
                                    },
                                    error: function (oError) { },
                                },
                                true
                            )


                        },
                        error: function (oError) { },
                    },
                    true
                )
            },

        });
    });
