sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ordermanagementgrp1.controller.Create", {
        onInit() {
            
              var oModel = this.getOwnerComponent().getModel("productModel"); 

           this.getView().setModel(oModel);
        },
        toDetailPage:function(){
            var oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("", { id :"111" });
        }
    });
});