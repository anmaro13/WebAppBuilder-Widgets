define(['dojo/_base/declare',
          'jimu/BaseWidget',
          "dojo/dom",
          "dojo/_base/array",
          "esri/domUtils",
          "esri/tasks/Geoprocessor",
          "esri/dijit/Legend",
          "dijit/form/TextBox",
          "dijit/form/NumberTextBox",
          "dijit/layout/BorderContainer",
          "dijit/layout/ContentPane",
        'jimu/loaderplugins/jquery-loader!https://code.jquery.com/jquery-git1.min.js'],
  function(declare, BaseWidget, dom, array,
  domUtils, Geoprocessor, Legend, $) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-seguro',

      calcularseguro: function(){
        var anio = dom.byId("anio").value;
        var edificio = dom.byId("edificio").value;
        var construccion = dom.byId("construccion").value;
        var superficie = dom.byId("superficie").value;
        var peligrosidad = dom.byId("peligrosidad").value;
        var material = dom.byId("material").value;
        var  pisos = dom.byId("pisos").value;
        var mercado =  dom.byId("mercado").value;
        var deductible = dom.byId("deductible").value;
        var object= $('input[name=objetos]');
        if (object[0].value==="true"){
            var objetos = dom.byId("objetos").value;
          }
        else if(object[1].value==="false"){
          var objetos = dom.byId("objetos1").value;

        }
        var bien= $('input[name=bienes]');
        if (bien[0].value==="true"){
            var bienes = dom.byId("bienes").value;
          }
        else if(bien[1].value==="false"){
          var bienes = dom.byId("bienes1").value;

        }
        var valorbienes = dom.byId("coberturebienes").value;
        var tempo= $('input[name=inhabitabilidad]');
        if (tempo[0].value==="true"){
            var temporal = dom.byId("temporal").value;
          }
        else if(tempo[1].value==="false"){
          var temporal = dom.byId("temporal1").value;

        }

        var valortemporal = dom.byId("coberturetemporal").value;
        var clien= $('input[name=cliente]');
        if (clien[0].value==="true"){
            var cliente = dom.byId("cliente").value;
          }
        else if(clien[1].value==="false"){
          var cliente = dom.byId("cliente1").value;

        }
        var segurovida = dom.byId("insurance1").value;
        var seguroauto = dom.byId("insurance2").value;
        var segurodecesos = dom.byId("insurance3").value;

      var params = {
        "Año_Poliza": anio,
        "Tipo_Edificio": edificio,
        "Año_Construccion": construccion,
        "Superficie": superficie,
        "Peligrosidad": peligrosidad,
        "Tipo_Material": material,
        "Numero_Pisos": pisos,
        "Valor_Mercado": mercado,
        "Deductible": deductible,
        "Cobertura_Objetos_Fragiles": objetos,
        "Cobertura_Bienes_Personales": bienes,
        "Valor_Bienes_Personales": valorbienes,
        "Cobertura_Inhabitabilidad": temporal,
        "Valor_Inhabitabilidad": valortemporal,
        "Cliente": cliente,
        "Seguro_de_Vida": segurovida,
        "Seguro_de_Auto": seguroauto,
        "Seguro_de_Decesos": segurodecesos
      };
      this.cleanup();
      console.log(this.gp);
      this.gp.submitJob(params, this.gpJobComplete, this.gpJobStatus, this.gpJobFailed);
      window.$app.map = this.map;
      },

      gpJobComplete: function(jobinfo){
        //get the result map service layer and add to map
        window.$app.gp.getResultImageLayer(jobinfo.jobId, null, null, function(layer){
          layer.setOpacity(0.7);
          window.$app.map.addLayers([layer]);
          window.$app.gp.getResultData(jobinfo.jobId, "Capa_de_Salida", function(layer){
            console.log(layer)
            var seguro = layer.value.features[0].attributes.Seguro;
            var control = dom.byId("controls");
            control.className = 'controls';
            control.innerHTML = '<h3> Seguro de Hogar </h3>';
            var resultados =document.createElement("div");
            control.appendChild(resultados);
            resultados.innerHTML = "Valor del Seguro:  "+ seguro + "€/año";
            var extent = layer.value.features[0].geometry.getExtent();
            window.$app.map.setExtent(extent);
        });
        });
        window.$app.map.on("layers-add-result", function(evtObj) {
          domUtils.show(dom.byId('legendDiv'));
          if( !window.$app.legend ) {
            //add the legend to show the resulting layer.
            var layerInfo = array.map(evtObj.layers, function(layer,index){
              return {
                layer: layer.layer,
                title: layer.layer.name
              };
            });

          window.$app.legend = new Legend({
              map: window.$app.map,
              layerInfos: layerInfo
            },"legendDiv");
            window.$app.legend.startup();
          }
        });
      },

      gpJobStatus: function(jobinfo){
        domUtils.show(dom.byId('status'));
        var jobstatus = '';
        switch (jobinfo.jobStatus) {
          case 'esriJobSubmitted':
            jobstatus = 'Submitted...';
            break;
          case 'esriJobExecuting':
            jobstatus = 'Executing...';
            break;
          case 'esriJobSucceeded':
            domUtils.hide(dom.byId('status'));
            break;
        }
        dom.byId('status').innerHTML = jobstatus;
      },

      gpJobFailed: function(error){
        dom.byId('status').innerHTML = error;
        domUtils.hide(dom.byId('status'));
      },

      cleanup: function(){
              //hide the legend and remove the existing hotspot layer
              domUtils.hide(dom.byId('legendDiv'));

              var hotspotLayer = this.map.getLayer('HotspotLayer');
              if(hotspotLayer){
                this.map.removeLayer(hotspotLayer);
              }
            },

      startup: function() {
        var gpServiceUrl= "https://localhost:6443/arcgis/rest/services/Aseguradora/GPSeguros/GPServer/ScriptEdificios";
        this.gp = new Geoprocessor(gpServiceUrl);
        window.$app = {
          gp: this.gp
        }
      },

      onOpen: function(){

      },

      gp: null,
      legend:null
  });
});
