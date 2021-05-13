sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("app.l4desafio.app.controller.Menu", {
			onInit: function () {

            },
             onNavRelatorio: function(){
                this.getRouter().navTo("Relatorio");
            },
            
            
            onNavGerenciar: function(){
                this.getRouter().navTo("Gerenciar");
            }
		});
	});
