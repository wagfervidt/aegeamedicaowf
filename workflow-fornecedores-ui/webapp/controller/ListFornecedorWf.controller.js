sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/CatalogModel",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/model/GlobalModel",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/utils/formatDate",
    "../model/WfModel",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/Text",
    "sap/ui/core/library",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (
    Controller,
    JSONModel,
    CatalogModel,
    GlobalModel,
    FormatDate,
    WfModel,
    Dialog,
    Button,
    MobileLibrary,
    Text,
    CoreLibrary
  ) {
    "use strict";
    // shortcut for sap.m.ButtonType
    var ButtonType = MobileLibrary.ButtonType;

    // shortcut for sap.m.DialogType
    var DialogType = MobileLibrary.DialogType;

    // shortcut for sap.ui.core.ValueState
    var ValueState = CoreLibrary.ValueState;
    return Controller.extend(
      "com.br.aegea.wfaprovacao.workflowfornecedoresui.controller.ListFornecedorWf",
      {
        onInit: async function () {
          const oViewModel = new JSONModel({
            sContrato: "teste",
            sNumeroMedicao: "teste",
            sPeriod: "teste",
            StatusOptions: [
              { Name: "OK", OptionID: 1 },
              { Name: "NOK", OptionID: 2 },
            ],
            sObservation: "",
          });

          const headerData = [
            {
              Ebeln: "4600008757",
              VersaoMedicao: "1",
              NumeroMedicao: "1",
              UsuarioInclusao: "User",
              DtInclusao: "2023-08-16T18:52:59.000Z",
              Observacao: "",
              HrInclusao: {
                ms: 67979000,
                __edmType: "Edm.Time",
              },
              InicioMedicao: null,
              Operacao: null,
              Descricao: null,
              FimMedicao: "2023-08-20T02:59:59.000Z",
              CodUsuFor: "user",
              DataMedicao: "2023-08-16T03:00:00.000Z",
              StatusMedicao: null,
              VlrTotMedido: "0.02",
              ITEMS_Ebeln: null,
              ITEMS_Sequencial: null,
              ITEMS_VersaoMedicao: null,
              ITEMS_NumeroMedicao: null,
              ITEMS_Ebelp: null,
              ITEMS_Psphi: null,
              ITEMS_Extrow: null,
              ITEMS_Srvpos: null,
              ITEMS: {
                __deferred: {
                  uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Header(Ebeln='4600008757',VersaoMedicao='1',NumeroMedicao='1')/ITEMS",
                },
              },
              __metadata: {
                type: "CatalogService.Interactions_Header",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Header(Ebeln='4600008757',VersaoMedicao='1',NumeroMedicao='1')",
              },
            },
          ];

          const itemsData = [
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
              QuantidadeMedida: "5101.160",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "532.840",
              QtdMedir: "100.000",
              QuantidadeOriginal: "5734.000",
              ValorUnitario: "106.00",
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
              ValorMes: "10600.00",
              QuantidadeMesAnterior: "1098.000",
              ValorMesAnterior: "116388.00",
              ExtrowAux: "0010",
              Packno: "0000356141",
              Seq: "0001",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='1',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000010',Srvpos='6600282')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "540722.96",
              StatusSelected: null,
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
              QuantidadeMedida: "500.000",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "1337.000",
              QtdMedir: "1.000",
              QuantidadeOriginal: "1838.000",
              ValorUnitario: "206.00",
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
              ValorMes: "206.00",
              QuantidadeMesAnterior: "500.000",
              ValorMesAnterior: "103000.00",
              ExtrowAux: "0020",
              Packno: "0000356141",
              Seq: "0002",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='2',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000020',Srvpos='6600561')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "103000.00",
              StatusSelected: null,
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
              QuantidadeMedida: "3.000",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "95.000",
              QtdMedir: "2.000",
              QuantidadeOriginal: "100.000",
              ValorUnitario: "445.00",
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
              ValorMes: "890.00",
              QuantidadeMesAnterior: "3.000",
              ValorMesAnterior: "1335.00",
              ExtrowAux: "0050",
              Packno: "0000356141",
              Seq: "0003",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='3',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000050',Srvpos='6600688')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "1335.00",
              StatusSelected: null,
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
              QuantidadeMedida: "0.000",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "2847.000",
              QtdMedir: "3.000",
              QuantidadeOriginal: "2850.000",
              ValorUnitario: "25.00",
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
              ValorMes: "75.00",
              QuantidadeMesAnterior: "0.000",
              ValorMesAnterior: "0.00",
              ExtrowAux: "0060",
              Packno: "0000356141",
              Seq: "0004",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='4',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00010',Psphi='00002155',Extrow='0000000060',Srvpos='6600891')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "0.00",
              StatusSelected: null,
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
              QuantidadeMedida: "0.000",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "3849.000",
              QtdMedir: "4.000",
              QuantidadeOriginal: "3853.000",
              ValorUnitario: "40.00",
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
              ValorMes: "160.00",
              QuantidadeMesAnterior: "0.000",
              ValorMesAnterior: "0.00",
              ExtrowAux: "0010",
              Packno: "0000356143",
              Seq: "0005",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='5',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00020',Psphi='00002155',Extrow='0000000010',Srvpos='6600309')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "0.00",
              StatusSelected: null,
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
              QuantidadeMedida: "29.000",
              ValorMedido: "0.000",
              QuantidadeMedidaFiscal: null,
              Saldo: "289.000",
              QtdMedir: "5.000",
              QuantidadeOriginal: "323.000",
              ValorUnitario: "250.00",
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
              ValorMes: "1250.00",
              QuantidadeMesAnterior: "0.000",
              ValorMesAnterior: "0.00",
              ExtrowAux: "0020",
              Packno: "0000356143",
              Seq: "0006",
              SKdate: null,
              SKdatb: null,
              __metadata: {
                type: "CatalogService.Interactions_Item",
                uri: "https://bwz-dev-1uefcawu.workzone.cfapps.us10.hana.ondemand.com/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/v2/odata/v4/catalog/Interactions_Item(Ebeln='4600008757',Sequencial='6',VersaoMedicao='1',NumeroMedicao='1',Ebelp='00020',Psphi='00002155',Extrow='0000000020',Srvpos='6600687')",
              },
              ValorMesConfirmacao: 0,
              MesConfirmacao: 0,
              ValorTotalPrevisto: "7250.00",
              StatusSelected: null,
            },
          ];
          this.getView().setModel(oViewModel, "oViewModel");

          const oHeaderModel = new JSONModel(headerData);
          this.getView().setModel(oHeaderModel, "HeaderModel");

          const oItemsModel = new JSONModel(itemsData);
          this.getView().setModel(oItemsModel, "ListModel");

          // this?._instanceModels();

          // await this._getCatalogData();
        },

        _instanceModels: function () {
          const oGlobalModel = GlobalModel.getInstance();

          oGlobalModel.setoCatalogModel(
            this?.getOwnerComponent?.()?.getModel?.("oCatalogModel")
          );
          oGlobalModel.setoWfModel(
            this?.getOwnerComponent?.()?.getModel?.("wf")
          );
        },

        _getCatalogData: async function () {
          const oCatalogModel = new CatalogModel();
          const formatDate = new FormatDate();

          const oWfModel = new WfModel();

          const { SAP__Origin, InstanceID } =
            this?.getOwnerComponent?.()?.getComponentData?.()?.startupParameters
              ?.taskModel?.oData || { SAP__Origin: "", InstanceID: "" };

          try {
            const { sContrato, sNumeroMedicao } = await oWfModel.getData({
              sSapOrigin: SAP__Origin,
              sInstanceID: InstanceID,
            });

            const headerData = await oCatalogModel.getHeader({
              sContrato,
              sNumeroMedicao,
            });

            const itemsData = await oCatalogModel.getItems({
              sContrato,
              sNumeroMedicao,
            });

            const documents = await oCatalogModel.getDocuments({
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
              sObservation: "",
              documents,
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

        handleChangeMonthConfirmation: function (oEvent) {
          const sValue = oEvent.getParameters()?.value;
          console.log({ sValue });
        },

        handleChangeStatus: function (oEvent) {
          const oCatalogModel = this.getView()?.getModel("ListModel");

          const sPath =
            oEvent?.getParameters()?.selectedItem?.oPropagatedProperties
              ?.oBindingContexts?.ListModel?.sPath;
          const rowData = oCatalogModel?.getProperty(sPath);
          if (
            oEvent?.getParameters()?.selectedItem?.mProperties?.text === "OK"
          ) {
            oCatalogModel.setProperty(sPath, {
              ...rowData,
              ValorMesConfirmacao: rowData?.ValorMes,
              MesConfirmacao: rowData?.QtdMedir,
              StatusSelected:
                oEvent?.getParameters()?.selectedItem?.mProperties?.text,
            });
          } else {
            oCatalogModel.setProperty(sPath, {
              ...rowData,
              StatusSelected:
                oEvent?.getParameters()?.selectedItem?.mProperties?.text,
            });
          }
          const oTable =
            this.byId(
              "__component1---ListFornecedorWf--idEditMedicao-listUl"
            ) || this.byId("idEditMedicao");

          oTable.getBinding("items").getModel().refresh(true);
        },

        handleAccept: function () {
          const oListModel = this.getView().getModel("ListModel");

          const aListData = oListModel?.getData();

          if (aListData?.some((i) => !i?.StatusSelected)) {
            this._handleCreateErrorDialog(
              "Todos os itens da lista precisam ter o Status definido."
            );
          }
        },

        handleReject: function () {
          if (!this._oRejectReasonDialog) {
            this._oRejectReasonDialog = this.loadFragment({
              name: "com.br.aegea.wfaprovacao.workflowfornecedoresui.fragments.dialogs.RejectDialog",
            });

            this._oRejectReasonDialog.then((oDialog) => {
              oDialog.open();
            });
          }
        },

        handleCancelRejectDialog: function () {
          this._oRejectReasonDialog.then((oDialog) => {
            oDialog.close();
          });
        },

        handleFinishRejectDialog: function () {
          this._oRejectReasonDialog.then((oDialog) => {
            oDialog.close();
          });
        },

        //=============================== DIALOGS ======================================//

        _handleCreateErrorDialog: function (sMsg) {
          if (!this.oErrorMessageDialog) {
            this.oErrorMessageDialog = new Dialog({
              type: DialogType.Message,
              title: "Erro",
              state: ValueState.Error,
              content: new Text({
                text: sMsg,
              }),
              beginButton: new Button({
                type: ButtonType.Emphasized,
                text: "OK",
                press: function () {
                  this.oErrorMessageDialog.close();
                  this.oErrorMessageDialog = undefined;
                }.bind(this),
              }),
            });
          }

          this.oErrorMessageDialog?.open?.();
        },

        onOpenPressed: function (oEvent) {
          oEvent.preventDefault();
          var item = oEvent.getSource();
          this._fileName = item.getFileName();
          let domain = window.location.href;
          var pieces = domain.split("/");

          var oUrl =
            pieces[0] +
            "//" +
            pieces[2] +
            "/" +
            "7e1c46bb-38a2-4467-ba03-60fe865980fe.aegeamedicoes.brcomaegeamedicoesaegeaportalmedicao-1.2.2" +
            "/v2" +
            item.getUrl();
          item.setUrl(oUrl);
          this._download(item)
            .then((blob) => {
              var url = window.URL.createObjectURL(blob);
              var link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", this._fileName);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        _download: function (item) {
          var settings = {
            url: item.getUrl(),
            method: "GET",
            xhrFields: {
              responseType: "blob",
            },
          };

          return new Promise((resolve, reject) => {
            $.ajax(settings)
              .done((result, textStatus, request) => {
                resolve(result);
              })
              .fail((err) => {
                reject(err);
              });
          });
        },
      }
    );
  }
);
