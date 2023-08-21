sap.ui.define(["sap/ui/base/ManagedObject"], function (ManagedObject) {
  "use strict";

  return ManagedObject.extend(
    "com.br.aegea.wfaprovacao.workflowfornecedoresui.utils.formatDate",
    {
      format: function (dateString) {
        if (dateString?.toString()?.includes("/Date(")) {
          let digits;

          if (dateString?.includes("-") || dateString?.includes("+")) {
            digits = dateString.match(/\d+(?=[+-])/)?.[0];
          } else {
            digits = dateString.match(/\d+/g).join("");
          }

          const date = new Date(Number(digits));

          const year = date.getFullYear();
          const month = (date.getMonth() + 1)?.toString()?.padStart(2, "0");
          const day = date.getDate()?.toString()?.padStart(2, "0");

          return `${day}/${month}/${year}`;
        } else {
          const formattedDate = new Date(dateString)?.toISOString();

          const [year, month, day] = formattedDate?.split("T")?.[0]?.split("-");

          return `${day}/${month}/${year}`;
        }
      },

      fullStringDate: function () {
        const months = {
          0: "Janeiro",
          1: "Fevereiro",
          2: "Março",
          3: "Abril",
          4: "Maio",
          5: "Junho",
          6: "Julho",
          7: "Agosto",
          8: "Setembro",
          9: "Outubro",
          10: "Novembro",
          11: "Dezembro",
        };

        const today = new Date();

        const month = months?.[today?.getMonth()];

        const [date, time] = new Date()?.toISOString()?.split("T");

        const [year, _, day] = date?.split("-");

        return `${day} de ${month} de ${year}`;
      },
    }
  );
});
