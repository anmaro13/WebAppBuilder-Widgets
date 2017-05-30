define(['dojo/_base/declare', 'jimu/BaseWidget', "dojo/dom", "esri/domUtils",
"esri/tasks/Geoprocessor", "esri/dijit/Legend", "dijit/form/TextBox", "dijit/form/NumberTextBox",
"dijit/layout/BorderContainer", "dijit/layout/ContentPane", 'bootstrap/Dropdown', 'bootstrap/Tab',
'bootstrap/Modal'], function (declare, BaseWidget, dom, domUtils, Geoprocessor, Legend) {

  return declare([BaseWidget], {


    baseClass: 'jimu-widget-seguro',

    change: function(){
        if (document.getElementById("interface1").style.display==="none"){
          document.getElementById("interface1").style.display="block";
          document.getElementById("interface2").style.display="none";
        } else{
          document.getElementById("interface1").style.display="none";
          document.getElementById("interface2").style.display="block";
        }
    },

    bienes: function(){
      var radioButtons= document.getElementsByName("bienes");
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
        document.getElementById("coberturebienes").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
          document.getElementById("coberturebienes").setAttribute('disabled', '');
          $("#coberturebienes").val(' ');
        }else{
          document.getElementById("coberturebienes").removeAttribute('disabled');
          }
        }
    },

    temporal: function(){
      var radioButtons= document.getElementsByName("inhabitabilidad");
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
        document.getElementById("coberturetemporal").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
          document.getElementById("coberturetemporal").setAttribute('disabled', '');
          $("#coberturetemporal").val(' ');
        }else{
          document.getElementById("coberturetemporal").removeAttribute('disabled');
          }
        }
    },

    cliente: function(){
      var radioButtons= $('input[name=cliente]');
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
              //Habilitamos
              document.getElementById("insurance1").removeAttribute('disabled');
              document.getElementById("insurance2").removeAttribute('disabled');
              document.getElementById("insurance3").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
              //Desabilitamos
              document.getElementById("insurance1").setAttribute('disabled', '');
              document.getElementById("insurance2").setAttribute('disabled', '');
              document.getElementById("insurance3").setAttribute('disabled', '');
              //Deschequeamos
              $('#insurance1').prop('checked', false);
              $('#insurance2').prop('checked', false);
              $('#insurance3').prop('checked', false);

        }
      }
    },

    startup: function () {
      this.temporal();
      this.bienes();
      this.cliente();
      var gpServiceUrl = "https://localhost:6443/arcgis/rest/services/Aseguradora/GPSeguros/GPServer/ScriptEdificios";
      this.gp = new Geoprocessor(gpServiceUrl);
      window.$app = {
        gp: this.gp,
        legend: this.legend,
        layer2: this.layer2
      };

      if (dom.byId("anio").title === "2015"){
        document.getElementById("2015").setAttribute('selected', '');
      } else if(dom.byId("anio").title === "2016"){
        document.getElementById("2016").setAttribute('selected', '');
      } else if(dom.byId("anio").title === "2017"){
        document.getElementById("2017").setAttribute('selected', '');
      }

      if (dom.byId("edificio").title === "Piso o Apartamento"){
        document.getElementById("build1").setAttribute('selected', '');
      } else if(dom.byId("edificio").title === "Vivienda Unifamiliar"){
        document.getElementById("build2").setAttribute('selected', '');
      }

      if (dom.byId("peligrosidad").title === "Baja"){
        document.getElementById("Baja").setAttribute('selected', '');
      } else if(dom.byId("peligrosidad").title === "Baja-Media"){
        document.getElementById("Baja-Media").setAttribute('selected', '');
      }else if(dom.byId("peligrosidad").title === "Media"){
        document.getElementById("Media").setAttribute('selected', '');
      }else if(dom.byId("peligrosidad").title === "Media-Alta"){
        document.getElementById("Media-Alta").setAttribute('selected', '');
      }else if(dom.byId("peligrosidad").title === "Alta"){
        document.getElementById("Alta").setAttribute('selected', '');
      }else if(dom.byId("peligrosidad").title === "Muy Alta"){
        document.getElementById("Muy Alta").setAttribute('selected', '');
      }

      if (dom.byId("material").title === "Ladrillo con efecto diafragma"){
        document.getElementById("Material1").setAttribute('selected', '');
      } else if(dom.byId("material").title === "Ladrillo sin efecto diafragma"){
        document.getElementById("Material2").setAttribute('selected', '');
      }else if(dom.byId("material").title === "Mamposteria"){
        document.getElementById("Material3").setAttribute('selected', '');
      }else if(dom.byId("material").title === "Porticos de Hormigon Armado CON diseño sismorresistente"){
        document.getElementById("Material4").setAttribute('selected', '');
      }else if(dom.byId("material").title === "Porticos de Hormigon Armado SIN diseño sismorresistente"){
        document.getElementById("Material5").setAttribute('selected', '');
      }

      if (dom.byId("deductible").title === "5%"){
        document.getElementById("5").setAttribute('selected', '');
      } else if(dom.byId("deductible").title === "10%"){
        document.getElementById("10").setAttribute('selected', '');
      }else if(dom.byId("deductible").title === "15%"){
        document.getElementById("15").setAttribute('selected', '');
      }else if(dom.byId("deductible").title === "20%"){
        document.getElementById("20").setAttribute('selected', '');
      }else if(dom.byId("deductible").title === "25%"){
        document.getElementById("25").setAttribute('selected', '');
      }

      if (dom.byId("objetos").checked){
        document.getElementById("objetos1").removeAttribute('checked');
      } else if(dom.byId("objetos1").checked){
        document.getElementById("objetos").removeAttribute('checked');
      }

      if (dom.byId("optional2")){
        document.getElementById("optional2").remove();
      }

      if (dom.byId("optional4")){
        document.getElementById("optional4").remove();
        document.getElementById("optional5").remove();
      }

      if (dom.byId("optional7")){
        document.getElementById("optional7").remove();
        document.getElementById("optional8").remove();
      }

      if (dom.byId("coberturebienes").title === "5000"){
        document.getElementById("5000").setAttribute('selected', '');
      } else if(dom.byId("coberturebienes").title === "10000"){
        document.getElementById("10000").setAttribute('selected', '');
      }else if(dom.byId("coberturebienes").title === "15000"){
        document.getElementById("15000").setAttribute('selected', '');
        document.getElementById("20000").setAttribute('selected', '');
      }else if(dom.byId("coberturebienes").title === "25000"){
        document.getElementById("25000").setAttribute('selected', '');
      }

      if (dom.byId("coberturetemporal").title === "5000"){
        document.getElementById("1.000").setAttribute('selected', '');
      } else if(dom.byId("coberturetemporal").title === "15000"){
        document.getElementById("5.000").setAttribute('selected', '');
      }else if(dom.byId("coberturetemporal").title === "20000"){
        document.getElementById("10.000").setAttribute('selected', '');
      }else if(dom.byId("coberturetemporal").title === "25000"){
        document.getElementById("20.000").setAttribute('selected', '');
      }
    },

    onOpen: function(){
      var share = this.map.getLayer("Edificios_seguro_165");
      share.hide();
    },

    onClose: function(){
      var share = this.map.getLayer("Edificios_seguro_165");
      share.show();
    },

    calcularseguro: function() {
      var anio = dom.byId("anio").value;
      var edificio = dom.byId("edificio").value;
      var construccion = dom.byId("construccion").value;
      var superficie = dom.byId("superficie").value;
      var peligrosidad = dom.byId("peligrosidad").value;
      var material = dom.byId("material").value;
      var pisos = dom.byId("pisos").value;
      var mercado = dom.byId("mercado").value;
      var deductible = dom.byId("deductible").value;
      var object = document.getElementById('objetos');
      if (object.checked) {
        var objetos = dom.byId("objetos").value;
      }

      var object1 = document.getElementById('objetos1');
      if (object1.checked) {
        var objetos = dom.byId("objetos1").value;
      }

      var bien = document.getElementById('bienes');
      if (bien.checked) {
        var bienes = dom.byId("bienes").value;
      }

      var bien1 = document.getElementById('bienes1');
      if (bien1.checked) {
        var bienes = dom.byId("bienes1").value;
      }

      var valorbienes = dom.byId("coberturebienes").value;
      var tempo = document.getElementById('temporal');
      if (tempo.checked) {
        var temporal = dom.byId("temporal").value;
      }

      var tempo1 = document.getElementById('temporal1');
      if (tempo1.checked) {
        var temporal = dom.byId("temporal1").value;
      }

      var valortemporal = dom.byId("coberturetemporal").value;
      var clien = document.getElementById('cliente');
      if (clien.checked) {
        var cliente = dom.byId("cliente").value;
      }

      var clien1 = document.getElementById('cliente1');
      if (clien1.checked) {
        var cliente = dom.byId("cliente1").value;
      }

      var segur = document.getElementById('insurance1');
      if (segur.checked) {
        var vida = dom.byId("insurance1").value = "true";
        var segurovida = dom.byId("insurance1").value;
      } else {
        var vida1 = dom.byId("insurance1").value = "false";
        var segurovida = dom.byId("insurance1").value;
      }

      var segur1 = document.getElementById('insurance2');
      if (segur1.checked) {
        var auto = dom.byId("insurance2").value = "true";
        var seguroauto = dom.byId("insurance2").value;
      } else {
        var auto1 = dom.byId("insurance2").value = "false";
        var seguroauto = dom.byId("insurance2").value;
      }

      var segur2 = document.getElementById('insurance3');
      if (segur2.checked) {
        var decesos = dom.byId("insurance3").value = "true";
        var segurodecesos = dom.byId("insurance3").value;
      } else {
        var decesos1 = dom.byId("insurance3").value = "false";
        var segurodecesos = dom.byId("insurance3").value;
      }

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
      if (anio === "" | edificio === "" | peligrosidad === "" | material === "" | deductible === "" | mercado > 1000000 | construccion === "" | superficie === "" | mercado === "" | objetos === "" | bienes === "" | temporal === "" | cliente === "") {
        jobstatus = 'Revisa los valores de entrada';
        var error = document.getElementById('error');
        error.className = 'error';
        dom.byId('error').innerHTML = jobstatus;
      } else {
        var error = document.getElementById('error');
        error.classList.remove("error");
        while (error.firstChild) {
          error.removeChild(error.firstChild);
        }
        this.gp.submitJob(params, this.gpJobComplete, this.gpJobStatus, this.gpJobFailed);
        window.$app.map = this.map;
      }
    },

    gpJobComplete: function (jobinfo) {
      //get the result map service layer and add to map
      window.$app.gp.getResultImageLayer(jobinfo.jobId, null, null, function (layer) {
        if (window.$app.layer2) {
          window.$app.map.removeLayer(window.$app.layer2);
        }
        window.$app.layer2 = layer;
        layer.setOpacity(0.7);
        window.$app.map.addLayers([layer]);
        //setTimeout(function(){
        //var extent = layer.fullExtent;
        //window.$app.map.setExtent(extent);
        //},1000);

        window.$app.gp.getResultData(jobinfo.jobId, "Capa_de_Salida", function (layer) {
          var seguro = layer.value.features[0].attributes.Seguro;
          var control = dom.byId("controls");
          control.className = 'controls';
          control.innerHTML = '<h5> Seguro de Hogar </h5>';
          var resultados = document.createElement("div");
          control.appendChild(resultados);
          resultados.innerHTML = "Valor del Seguro:  " + seguro + "€/año";
        });
      });
      window.$app.map.on("layers-add-result", function (evtObj) {
        domUtils.show(dom.byId('legendDiv'));
        if (!window.$app.legend) {
          //add the legend to show the resulting layer.
          var layerInfo = array.map(evtObj.layers, function (layer, index) {
            return {
              layer: layer.layer,
              title: "Leyenda",
              name: "Capa resultante"
            };
          });

          window.$app.legend = new Legend({
            map: window.$app.map,
            layerInfos: layerInfo
          }, "legendDiv");
          window.$app.legend.startup();
        }
      });
    },

    gpJobStatus: function (jobinfo) {
      domUtils.show(dom.byId('status'));
      var jobstatus = '';
      var status = document.getElementById('status');
      switch (jobinfo.jobStatus) {
        case 'esriJobSubmitted':
          jobstatus = 'El cálculo ha comenzado...';
          status.className = 'comienzo';
          break;
        case 'esriJobExecuting':
          jobstatus = '¿Estás preparado?';
          status.classList.remove("comienzo");
          status.className = 'intermedio';
          break;
        case 'esriJobFailed':
          jobstatus = 'Revisa los valores de entrada';
          status.classList.remove("intermedio");
          status.className = 'error';
          break;
        case 'esriJobSucceeded':
          jobstatus = 'Todo correcto!';
          status.classList.remove("error");
          status.className = "correcto";
          domUtils.hide(dom.byId('status'));
          break;
      }
      dom.byId('status').innerHTML = jobstatus;
    },

    gpJobFailed: function(error) {
      error = "Problemas técnicos, vuelve a intentarlo...";
      document.getElementById('status').className = "error";
      dom.byId('status').innerHTML = error;
    },

    cleanup: function() {
      //hide the legend and remove the existing hotspot layer
      domUtils.hide(dom.byId('legendDiv'));
      domUtils.hide(dom.byId('status'));
      var result = dom.byId("controls");
      result.classList.remove("controls");
      var result1 = document.getElementById('controls');
      while (result1.firstChild) {
        result1.removeChild(result1.firstChild);
      }
      var hotspotLayer = this.map.getLayer('HotspotLayer');
      if (hotspotLayer) {
        this.map.removeLayer(hotspotLayer);
      }
    }
  });
});
