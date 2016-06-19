// sap.ui.controller("apps.App", {
//     onInit : function () {

// 	},
// 	eventoPress : function () {
// 		var txtNombre;
// 		txtNombre = sap.ui.getCore("txtNombre");
// 		if (txtNombre.getValue()!=''){
// 			MessageToast.show("Hola: "+txtNombre.getValue());			
// 		}else{
// 			MessageToast.show("Hello World");			
// 		}
// 	}
// });

sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/layout/form/SimpleForm"	
], function (Controller, MessageToast, JSONModel) {
	"use strict"; // nos ponemos rudos con use strict
	return Controller.extend("apps.App", {
		onInit : function () {
	        /**Evento OnInit Ejecutado despùes de instanciar la vista**/
	        
	        // Creamos un Objeto
			var obAlumno = {
							"idAlumno": "1",
							"nombre": "Diego Armando Lira Rodríguez",
							"fecha_alta":"05-03-2016",
							"activo": true,
							"sexo": "M"
						   };
		    // el Objeto lo converimos en un Modelo
		    var oModel = new sap.ui.model.json.JSONModel(obAlumno);
		    // Instanciamos el Form
	        var miFormEjemplo = sap.ui.getCore().byId("miFormEjemplo");
	        // Asignamos el Modelo a Nuestro formulario y a ese Modelo le asignamos un 
	        // path que será llamado "alumnos"
	        miFormEjemplo.setModel(oModel,"alumnos");
		}
	});

});