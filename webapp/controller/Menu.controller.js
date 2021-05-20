sap.ui.define([
	"./BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("app.l4desafio.app.controller.Menu", {
			onInit: function () {

            },
            onNavGerenciar: function(){
               this.getRouter().navTo("Gerenciar");
            },
             onNavRelatorio: function(){
                this.getRouter().navTo("Relatorio");
            },
            onNavRegra: function(){
                this.getRouter().navTo("Regra");
            }
            
	});
});