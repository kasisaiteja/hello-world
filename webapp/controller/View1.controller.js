sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) { 
	"use strict";
	return Controller.extend("HelloWorld.controller.View1", {
		
		
	checkDone1: function(oEvent){
		var checkV = this.byId("cb1").getSelected();
		if(checkV === true)
		{
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.alert("Your gender is Male");
		}
	},
	
	checkDone2: function(oEvent){
		var checkV = this.byId("cb2").getSelected();
		if(checkV === true)
		{
		jQuery.sap.require("sap.m.MessageBox");
		sap.m.MessageBox.alert("Your gender is Female.");
		}
	},
	
	onObjectListItemPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("NewView");
	},
	
	onPressContinue: function(oEvent){
		// collect input controls
			var view = this.getView();
			var inputs = [
				view.byId("input-fname"),
				view.byId("input-lname"),
				view.byId("input-address")
			];
			
			// check that inputs are not empty
			// this does not happen during data binding as this is only triggered by changes
			jQuery.each(inputs, function (i, input) {
				if (!input.getValue()) {
					input.setValueState("Error");
				}
			});
 
			// check states of inputs
			var canContinue = true;
			jQuery.each(inputs, function (i, input) {
				if (input.getValueState() === "Error") {
					canContinue = false;
					return false;
				}
			});
 
			// output result
			if (canContinue) {
				jQuery.sap.require("sap.m.MessageToast");
				sap.m.MessageToast.show("Welcome "+ inputs[0].getValue() + "The final product will be sent to " + inputs[2].getValue());
			} else {
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.alert("Complete your input first." + inputs[0]);
			}
			
		}
	});
});