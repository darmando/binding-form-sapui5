sap.ui.jsview("apps.App", {
	getControllerName: function() {
		return "apps.App";
	},
	createContent: function(oController) {
		var currentView,footer,miFooter,miPagina,miApp,oForm;
		currentView=this;

        miFooter = new sap.m.Bar("idMiBar");
		miPagina = new sap.m.Page("idMiPagina", {
            title: "Desarrollo Hidrocálido",
            showNavButton: false,
            showHeader: true,
            showFooter: true
        });
        /*************************************************************/
        /**************DECLARAMOS NUESTRO FORMULARIO******************/
        /*************************************************************/
        oForm = new sap.ui.layout.form.SimpleForm("miFormEjemplo", {
            editable: true,
            maxContainerCols: 1,
            title: "Ejemplo - Binding Form",
            layout: "ResponsiveGridLayout"          
        });
        var lblNombreCompleto = new sap.m.Label({text: 'Nombre Completo',design : "Bold"});
        oForm.addContent(lblNombreCompleto);        
        var txtNombreCompleto = new sap.m.Input("txtNombreCompleto",{value: "{alumnos>/nombre}"});
        oForm.addContent(txtNombreCompleto);        
        var lblFechaAlta = new sap.m.Label({text: 'Fecha Alta',design : "Bold"});
        oForm.addContent(lblFechaAlta);                
        var txtFechaAlta = new sap.m.Input("txtFechaAlta",{value: "{alumnos>/fecha_alta}"});
        oForm.addContent(txtFechaAlta);
        var lblSexo = new sap.m.Label({text: 'Sexo',design : "Bold"});
        oForm.addContent(lblSexo);                      
        var selSexo = new sap.m.Select("selSexo",{items :[
                                                            new sap.ui.core.Item("M",{text:"M",key:"M"}),
                                                            new sap.ui.core.Item("F",{text:"F",key:"F"})
                                                         ], selectedKey:"{alumnos>/sexo}"});
        oForm.addContent(selSexo);
        var lblActivo = new sap.m.Label({text: 'Activo',design : "Bold"});
        oForm.addContent(lblActivo);                
        var swtActivo = new sap.m.Switch("swtActivo",{
           customTextOn : "A",
           customTextOff : "I",
           state: "{alumnos>/activo}"
        });
        /*************************************************************/
        /**************DECLARAMOS NUESTRO FORMULARIO******************/
        /*************************************************************/
        oForm.addContent(swtActivo);
        miPagina.setFooter(miFooter);
        miPagina.addContent(oForm);
     
        miApp = new sap.m.App("idMiApp");
        miApp.addPage(miPagina);

        currentView.destroyContent();
        currentView.addContent(miApp);
    }    
});