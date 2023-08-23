sap.ui.define(
  [
    "sap/ui/base/ManagedObject",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/model/GlobalModel",
  ],
  function (ManagedObject, FilterOperator, Filter, GlobalModel) {
    "use strict";

    return ManagedObject.extend(
      "com.br.aegea.wfaprovacao.workflowfornecedoresui.model.CatalogModel",
      {
        getHeader: async function ({ sContrato, sNumeroMedicao }) {
          const oGlobalModel = GlobalModel.getInstance();
          const oCatalogModel = oGlobalModel.getoCatalogModel();

          const sPath = "/Interactions_Header";

          var aFilter = [];

          if (sContrato != "") {
            aFilter.push(new Filter("Ebeln", FilterOperator.EQ, sContrato));
            aFilter.push(
              new Filter("NumeroMedicao", FilterOperator.EQ, sNumeroMedicao)
            );
          }

          oCatalogModel?.setUseBatch(false);

          const results = await new Promise((res, rej) =>
            oCatalogModel.read(sPath, {
              filters: aFilter,
              success: function (oData) {
                res(oData);
              },
              error: function (oError) {
                rej(oError);
              },
            })
          );

          return results?.results;
        },

        getItems: async function ({ sContrato, sNumeroMedicao }) {
          const oGlobalModel = GlobalModel.getInstance();
          const oCatalogModel = oGlobalModel.getoCatalogModel();

          const sPath = "/Interactions_Item";

          var aFilter = [];

          if (sContrato != "") {
            aFilter.push(new Filter("Ebeln", FilterOperator.EQ, sContrato));
            aFilter.push(
              new Filter("NumeroMedicao", FilterOperator.EQ, sNumeroMedicao)
            );
          }

          oCatalogModel?.setUseBatch(false);

          const results = await new Promise((res, rej) =>
            oCatalogModel.read(sPath, {
              filters: aFilter,
              success: function (oData) {
                res(oData);
              },
              error: function (oError) {
                rej(oError);
              },
            })
          );

          const formattedResults = results?.results?.map((item) => ({
            ...item,
            QuantidadeMedida: parseFloat(item.QuantidadeMedida || 0).toFixed(3),
            ValorMedido: parseFloat(item.ValorMedido || 0).toFixed(3),
            Saldo: parseFloat(item?.Saldo || 0).toFixed(3),
            QtdMedir: parseFloat(item?.QtdMedir || 0).toFixed(3),
            QuantidadeOriginal: parseFloat(
              item?.QuantidadeOriginal || 0
            ).toFixed(3),
            ValorUnitario: parseFloat(item?.ValorUnitario || 0)?.toFixed(2),
            ValorMesAnterior: parseFloat(item?.ValorMesAnterior || 0)?.toFixed(
              2
            ),
            ValorMes: (
              Number(item?.QtdMedir) * Number(item?.ValorUnitario)
            ).toFixed(2),
            ValorMesConfirmacao: 0,
            MesConfirmacao: 0,
            QuantidadeMesAnterior: parseFloat(
              item?.QuantidadeMesAnterior || 0
            ).toFixed(3),
            ValorTotalPrevisto: (
              parseFloat(item?.QuantidadeMedida || 0) *
              parseFloat(item?.ValorUnitario || 0)
            )?.toFixed(2),
            StatusSelected: null,
          }));

          return formattedResults;
        },

        getDocuments: async function ({ sContrato, sNumeroMedicao }) {
          const oGlobalModel = GlobalModel.getInstance();
          const oCatalogModel = oGlobalModel.getoCatalogModel();

          const sPath = "/Files";

          var aFilter = [];

          if (sContrato != "") {
            aFilter.push(new Filter("Ebeln", FilterOperator.EQ, sContrato));
            aFilter.push(
              new Filter("NumeroMedicao", FilterOperator.EQ, sNumeroMedicao)
            );
          }

          oCatalogModel?.setUseBatch(false);

          oCatalogModel?.setUseBatch(false);

          const results = await new Promise((res, rej) =>
            oCatalogModel.read(sPath, {
              filters: aFilter,
              success: function (oData) {
                res(oData);
              },
              error: function (oError) {
                rej(oError);
              },
            })
          );

          return results?.results;
        },
      }
    );
  }
);
