{
	"contents": {
		"033da8de-6ca0-410a-9838-7787538e90f1": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "com.br.aegea.workflowfornecedores.workflowfornecedores",
			"subject": "WorkflowFornecedores",
			"name": "WorkflowFornecedores",
			"documentation": "",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "Medição Inserida"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "Final fluxo fiscal"
				}
			},
			"activities": {
				"c6d6df65-087b-4905-84fc-a390198d8166": {
					"name": "Ação Fiscal"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"ab8c0ff7-5b1f-4713-bcf1-0220f1943f3f": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "Medição Inserida",
			"sampleContextRefs": {
				"c6830806-ecfd-43dc-87a5-c4656d6a3e2c": {}
			}
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "Final fluxo fiscal",
			"eventDefinitions": {
				"dede8bd4-79de-4c85-84c4-95f8ff33efec": {}
			}
		},
		"c6d6df65-087b-4905-84fc-a390198d8166": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "Medição ${context.Contrato} Inserida",
			"description": "\n",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://WorkflowRouter.combraegeawfaprovacaoworkflowfornecedoresui/com.br.aegea.wfaprovacao.workflowfornecedoresui",
			"recipientUsers": "wagner.fernandes@seidor.com; marcos.domingos@seidor.com",
			"customAttributes": [{
				"id": "Contrato",
				"label": "Contrato",
				"type": "string",
				"value": "${context.Contrato}"
			}, {
				"id": "NumeroMedicao",
				"label": "NumeroMedição",
				"type": "string",
				"value": " ${context.NumeroMedicao}"
			}],
			"id": "usertask1",
			"name": "Ação Fiscal"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "c6d6df65-087b-4905-84fc-a390198d8166"
		},
		"ab8c0ff7-5b1f-4713-bcf1-0220f1943f3f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "c6d6df65-087b-4905-84fc-a390198d8166",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"089d68a9-720c-4643-9f16-062045d47ea8": {},
				"99add7a3-cd5d-4268-ae86-2d9d9ba6d541": {}
			}
		},
		"c6830806-ecfd-43dc-87a5-c4656d6a3e2c": {
			"classDefinition": "com.sap.bpm.wfs.SampleContext",
			"reference": "/sample-data/sample_data.json",
			"id": "default-start-context"
		},
		"dede8bd4-79de-4c85-84c4-95f8ff33efec": {
			"classDefinition": "com.sap.bpm.wfs.TerminateEventDefinition",
			"id": "terminateeventdefinition2"
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 540,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,116.375 336.2414728659385,116.375",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "089d68a9-720c-4643-9f16-062045d47ea8",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"089d68a9-720c-4643-9f16-062045d47ea8": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 286.2414728659385,
			"y": 86.75,
			"width": 100,
			"height": 60,
			"object": "c6d6df65-087b-4905-84fc-a390198d8166"
		},
		"99add7a3-cd5d-4268-ae86-2d9d9ba6d541": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "336.2414728659385,117.125 557.5,117.125",
			"sourceSymbol": "089d68a9-720c-4643-9f16-062045d47ea8",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "ab8c0ff7-5b1f-4713-bcf1-0220f1943f3f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"terminateeventdefinition": 2,
			"sequenceflow": 3,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1,
			"exclusivegateway": 1
		}
	}
}