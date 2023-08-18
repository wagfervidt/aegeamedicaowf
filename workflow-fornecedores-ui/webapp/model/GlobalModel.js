sap.ui.define(["sap/ui/base/Object"], function (Object) {
  "use strict";
  let instance;

  const GlobalModel = Object.extend(
    "com.br.aegea.wfaprovacao.workflowfornecedoresui.model.GlobalModel",
    {
      constructor: function () {
        this.oCatalogModel = null;
      },

      setoCatalogModel: function (model) {
        this.oCatalogModel = model;
      },

      getoCatalogModel: function () {
        return this.oCatalogModel;
      },
    }
  );
  return {
    getInstance: function () {
      if (!instance) {
        instance = new GlobalModel();
      }

      return instance;
    },
  };
});
