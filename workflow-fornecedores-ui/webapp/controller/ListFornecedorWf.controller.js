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
          this?._instanceModels();

          await this._getCatalogData();
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
          const { SAP__Origin, InstanceID } =
            this.getOwnerComponent().getComponentData()?.startupParameters
              ?.taskModel?.oData;

          try {
            const oCatalogModel = new CatalogModel();
            const formatDate = new FormatDate();

            const oWfModel = new WfModel();

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
              ValorMesConfirmação: rowData?.ValorMes,
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

          console.log(oTable.getBinding("items").getModel());
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
      }
    );
  }
);
