jQuery.sap.declare("sap.m.sample.P13nDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.P13nDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.P13nDialog.Page",
		dependencies : {
			libs : [
				"sap.m",
				"sap.ui.layout"
			]
		},
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				]
			}
		}
	}
});