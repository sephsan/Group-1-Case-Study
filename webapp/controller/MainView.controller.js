sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",    

], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("ordermanagementgrp1.controller.MainView", {
        onInit() {
           var oModel = this.getOwnerComponent().getModel("productModel"); 

           this.getView().setModel(oModel);


        },
        toDetailPage:function(id){
            
  
            // // Set selected product details to another model or directly to controls
            // var oDetailModel = new JSONModel(oProductData);
            // this.getView().setModel(oDetailModel, "productsModel");



            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("Create", { id :id });
        }
    });
});