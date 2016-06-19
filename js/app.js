 // definimos  nuestro path donde tomara nuestras Vistas y Controladores
 sap.ui.localResources("apps");
 sap.ui.getCore().attachInit(function () {
 // declaramos que las vistas serán desde un JS y se renderizan en el div content	
   sap.ui.jsview("idAppDH","apps.App").placeAt("content");
 }); 