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

          console.log({ oGlobalModel });
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

          console.log({ header: results });
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

          console.log({ items: results });
          return results?.results?.map((item) => ({
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
            QuantidadeMesAnterior: parseFloat(
              item?.QuantidadeMesAnterior || 0
            ).toFixed(3),
            ValorTotalPrevisto: (
              parseFloat(item?.QuantidadeMedida || 0) *
              parseFloat(item?.ValorUnitario || 0)
            )?.toFixed(2),
          }));
        },
      }
    );
  }
);
