sap.ui.define(
  [
    "sap/ui/base/ManagedObject",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/model/GlobalModel",
  ],
  function (ManagedObject, GlobalModel) {
    "use strict";

    return ManagedObject.extend(
      "com.br.aegea.wfaprovacao.workflowfornecedoresui.model.WfModel",
      {
        getData: async function ({ sSapOrigin, sInstanceID }) {
          const oGlobalModel = GlobalModel.getInstance();
          const oWfModel = oGlobalModel.getoWfModel();

          const sPath = `/TaskCollection(SAP__Origin='${sSapOrigin}',InstanceID='${sInstanceID}')/CustomAttributeData`;
          oWfModel?.setUseBatch(false);
          const results = await new Promise((res, rej) =>
            oWfModel.read(sPath, {
              success: function (oData) {
                res(oData?.results);
              },
              error: function (oError) {
                rej(oError);
              },
            })
          );

          let sNumeroMedicao = "";
          let sContrato = "";
          results?.forEach((item) => {
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
      }
    );
  }
);
