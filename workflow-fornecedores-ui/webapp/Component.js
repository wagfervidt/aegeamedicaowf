sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/br/aegea/wfaprovacao/workflowfornecedoresui/model/models",
  ],
  function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend(
      "com.br.aegea.wfaprovacao.workflowfornecedoresui.Component",
      {
        metadata: {
          manifest: "json",
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
          console.log("Passou no Component31");
          // call the base component's init function
          UIComponent?.prototype?.init?.apply?.(this, arguments);
          window.oModelWf = this?.getModel?.("wf");

          // enable routing
          this?.getRouter?.()?.initialize?.();

          // set the device model
          this?.setModel(models?.createDeviceModel?.(), "device");

          if (!this.getComponentData()) return;

          // 1. Get the Task Properties
          var startupParameters = this.getComponentData().startupParameters;
          var taskModel = startupParameters.taskModel;
          var taskData = taskModel.getData();
          var taskId = taskData.InstanceID;

          // 2. Read the Task Data
          var that = this;
          var contextModel = new sap.ui.model.json.JSONModel(
            "/WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/bpmworkflowruntime/v1/task-instances/" +
              taskId +
              "/context"
          );
          var contextData = contextModel.getData();

          // 3. Update UI Context Model with Task Properties Data
          contextModel.attachRequestCompleted(function () {
            contextData = contextModel.getData();

            var processContext = {};
            processContext.context = contextData;
            processContext.context.task = {};
            processContext.context.task.Title = taskData.TaskTitle;
            processContext.context.task.Priority = taskData.Priority;
            processContext.context.task.Status = taskData.Status;
            processContext.context.task.CreatedByName = taskData.CreatedByName;
            processContext.context.task.TaskDefinitionName =
              taskData.TaskDefinitionName;
            processContext.context.task.TaskId = taskId;

            if (taskData.Priority === "HIGH") {
              processContext.context.task.PriorityState = "Warning";
            } else if (taskData.Priority === "VERY HIGH") {
              processContext.context.task.PriorityState = "Error";
            } else {
              processContext.context.task.PriorityState = "Success";
            }

            processContext.context.task.CreatedOn =
              taskData.CreatedOn.toLocaleDateString("pt-BR");

            // get task description and add it to the model
            startupParameters.inboxAPI
              .getDescription("NA", taskData.InstanceID)
              .done(function (dataDescr) {
                processContext.context.task.Description = dataDescr.Description;
                contextModel.setProperty(
                  "/task/Description",
                  dataDescr.Description
                );
              })
              .fail(function (errorText) {});

            contextModel.setData(processContext.context);

            that.setModel(contextModel);
          });
        },
      }
    );
  }
);
