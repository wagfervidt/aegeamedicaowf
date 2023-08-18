let oNumeroMedicao = "";
let oContract = "";
let oCatalogModel = "";
let oHeader = "";
let oWfModel = "";
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/CatalogModel",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/model/GlobalModel",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/utils/formatDate",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, CatalogModel, GlobalModel, FormatDate) {
    "use strict";

    return Controller.extend(
      "com.br.aegea.wfaprovacao.workflowfornecedoresui.controller.ListFornecedorWf",
      {
        onInit: async function () {
          if (oWfModel == "") {
            oWfModel = window.oModelWf;

            this.getView().setModel(new JSONModel(oWfModel), "WfModel");
          }
          const oItemsModel = new JSONModel([
            {
              Ebeln: "4600008757",
              Sequencial: "1",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00010",
              Psphi: "00002155",
              Extrow: "0000000010",
              Srvpos: "6600282",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.E.RC.I.002",
              Kostl: "",
              Matnr: "",
              Txz01: "REDE COLETORA DE ESGOTO",
              Ktext1: "SV DE IMPL DE REDE COLET DN 150 TERRA",
              Meins: "M",
              QuantidadeMedida: "5101.16",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "532.84",
              QtdMedir: "100",
              QuantidadeOriginal: "5734",
              ValorUnitario: "106",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "1098",
              ValorMesAnterior: "116388",
              ExtrowAux: "0010",
              Packno: "0000356141",
              Seq: "0001",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='1',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000010',Srvpos='6600282')",
              },
            },
            {
              Ebeln: "4600008757",
              Sequencial: "2",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00010",
              Psphi: "00002155",
              Extrow: "0000000020",
              Srvpos: "6600561",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.E.RC.I.002",
              Kostl: "",
              Matnr: "",
              Txz01: "REDE COLETORA DE ESGOTO",
              Ktext1: "SV DE IMPL RDE COL DN 150 ASFALTO",
              Meins: "M",
              QuantidadeMedida: "500",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "1337",
              QtdMedir: "1",
              QuantidadeOriginal: "1838",
              ValorUnitario: "206",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "500",
              ValorMesAnterior: "103000",
              ExtrowAux: "0020",
              Packno: "0000356141",
              Seq: "0002",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='2',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000020',Srvpos='6600561')",
              },
            },
            {
              Ebeln: "4600008757",
              Sequencial: "3",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00010",
              Psphi: "00002155",
              Extrow: "0000000050",
              Srvpos: "6600688",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.E.LE.I.001",
              Kostl: "",
              Matnr: "",
              Txz01: "REDE COLETORA DE ESGOTO",
              Ktext1: "SV DE LIGACAO DOMICILIAR ESGOTO ASFALTO",
              Meins: "UA",
              QuantidadeMedida: "3",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "95",
              QtdMedir: "2",
              QuantidadeOriginal: "100",
              ValorUnitario: "445",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "3",
              ValorMesAnterior: "1335",
              ExtrowAux: "0050",
              Packno: "0000356141",
              Seq: "0003",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='3',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000050',Srvpos='6600688')",
              },
            },
            {
              Ebeln: "4600008757",
              Sequencial: "4",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00010",
              Psphi: "00002155",
              Extrow: "0000000060",
              Srvpos: "6600891",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.E.RC.I.002",
              Kostl: "",
              Matnr: "",
              Txz01: "REDE COLETORA DE ESGOTO",
              Ktext1: "SV DE TROCA DE SOLO",
              Meins: "M3",
              QuantidadeMedida: "0",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "2847",
              QtdMedir: "3",
              QuantidadeOriginal: "2850",
              ValorUnitario: "25",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "0",
              ValorMesAnterior: "0",
              ExtrowAux: "0060",
              Packno: "0000356141",
              Seq: "0004",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='4',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000060',Srvpos='6600891')",
              },
            },
            {
              Ebeln: "4600008757",
              Sequencial: "5",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00020",
              Psphi: "00002155",
              Extrow: "0000000010",
              Srvpos: "6600309",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.A.RD.M.001",
              Kostl: "",
              Matnr: "",
              Txz01: "REBAIXAMENTO REDE DE ÁGUA - MELHORIAS",
              Ktext1: "SV DE IMPL DE REDE DISTRIBUICAO DN 50",
              Meins: "M",
              QuantidadeMedida: "0",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "3849",
              QtdMedir: "4",
              QuantidadeOriginal: "3853",
              ValorUnitario: "40",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "0",
              ValorMesAnterior: "0",
              ExtrowAux: "0010",
              Packno: "0000356143",
              Seq: "0005",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='5',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00020',Psphi='00002155',Extrow='0000000010',Srvpos='6600309')",
              },
            },
            {
              Ebeln: "4600008757",
              Sequencial: "6",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              Ebelp: "00020",
              Psphi: "00002155",
              Extrow: "0000000020",
              Srvpos: "6600687",
              Knttp: "P",
              Pstyp: "9",
              ObjetoCusto: "O/CPG.23201.A.LA.M.001",
              Kostl: "",
              Matnr: "",
              Txz01: "REBAIXAMENTO REDE DE ÁGUA - MELHORIAS",
              Ktext1: "SV DE LIGACAO DOMICILIAR AGUA TERRA",
              Meins: "UA",
              QuantidadeMedida: "29",
              ValorMedido: null,
              QuantidadeMedidaFiscal: null,
              Saldo: "289",
              QtdMedir: "5",
              QuantidadeOriginal: "323",
              ValorUnitario: "250",
              DataMedicaoItem: null,
              PedidoSap: null,
              ItemPedidoSap: null,
              Status: null,
              FiscalAprov: null,
              DtAprovFiscal: null,
              HrAprovFiscal: null,
              GestorAprov: null,
              DtAprovGestor: null,
              HrAprovGestor: null,
              QuantidadeMes: "0",
              ValorMes: "0",
              QuantidadeMesAnterior: "0",
              ValorMesAnterior: "0",
              ExtrowAux: "0020",
              Packno: "0000356143",
              Seq: "0006",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='6',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00020',Psphi='00002155',Extrow='0000000020',Srvpos='6600687')",
              },
            },
          ]);
          const oViewModel = new JSONModel({
            sContrato: "",
            sNumeroMedicao: "",
            sPeriod: "",
            StatusOptions: [
              { Name: "OK", OptionID: 1 },
              { Name: "NOK", OptionID: 2 },
            ],
          });
          this.getView().setModel(oViewModel, "oViewModel");
          this.getView().setModel(oItemsModel, "ListModel");
          this?._instanceModels();

          await this._getCatalogData();
        },

        _instanceModels: function () {
          const oGlobalModel = GlobalModel.getInstance();

          oGlobalModel.setoCatalogModel(
            this?.getOwnerComponent?.()?.getModel?.("oCatalogModel")
          );
        },

        _wfPromisefied: async function (oWf) {
          const oWfModel = window.oModelWf;

          let sPath =
            "/TaskCollection(SAP__Origin='" +
            oWf?.SAP__Origin +
            "',InstanceID='" +
            oWf?.InstanceID +
            "')/CustomAttributeData";

          const result = await new Promise((res, rej) =>
            oWfModel.read(sPath, {
              success: function (oData) {
                res(oData);
              },
              error: function (oError) {
                console.log("Error WF", oError);
                rej(oError);
              },
            })
          );

          let sNumeroMedicao = "";
          let sContrato = "";
          result?.results?.forEach((item) => {
            if (item?.Name === "NumeroMedicao") {
              sNumeroMedicao = item?.Value;
            }
            if (item?.Name === "Contrato") {
              sContrato = item?.Value;
            }
          });

          return {
            sContrato,
            sNumeroMedicao,
          };
        },

        _getCatalogData: async function () {
          try {
            const oCatalogModel = new CatalogModel();
            const formatDate = new FormatDate();
            let oWf = window.taskModel;
            const { sContrato, sNumeroMedicao } = await this._wfPromisefied(
              oWf
            );

            const headerData = await oCatalogModel.getHeader({
              sContrato,
              sNumeroMedicao,
            });

            const itemsData = await oCatalogModel.getItems({
              sContrato,
              sNumeroMedicao,
            });

            const sPeriod =
              formatDate.format(headerData?.[0]?.DataMedicao) +
              " à " +
              formatDate.format(headerData?.[0]?.FimMedicao);

            const oViewModel = new JSONModel({
              sContrato,
              sNumeroMedicao,
              sPeriod,
              StatusOptions: [
                { Name: "OK", OptionID: 1 },
                { Name: "NOK", OptionID: 2 },
              ],
            });
            this.getView().setModel(oViewModel, "oViewModel");

            const oHeaderModel = new JSONModel(headerData);
            this.getView().setModel(oHeaderModel, "HeaderModel");

            const oItemsModel = new JSONModel(itemsData);
            this.getView().setModel(oItemsModel, "ListModel");
          } catch (error) {
            return sap.m.MessageToast.show(
              typeof error === "string" ? error : JSON.stringify(error || {})
            );
          }
        },

        handleChangeStatus: function (oEvent) {
          const oCatalogModel = this.getView()?.getModel("oCatalogModel");
          const sPath =
            oEvent?.getParameters()?.selectedItem?.oPropagatedProperties
              ?.oBindingContexts?.ListModel?.sPath;

          const rowData = oCatalogModel?.getProperty(sPath);

          oCatalogModel.setProperty(sPath, {
            ...rowData,
            StatusSelected:
              oEvent?.getParameters()?.selectedItem?.mProperties?.text,
          });
        },
      }
    );
  }
);
