define(['dojo/_base/declare', 'jimu/BaseWidget', "dojo/dom", "dojo/_base/array", "esri/domUtils", "esri/tasks/Geoprocessor", "esri/dijit/Legend", "dijit/form/TextBox", "dijit/form/NumberTextBox", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", 'bootstrap/Dropdown', 'bootstrap/Tab', 'bootstrap/Modal'], function (declare, BaseWidget, dom, array, domUtils, Geoprocessor, Legend) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // Custom widget code goes here

    baseClass: 'jimu-widget-seguro',

    change: function change() {
      if (document.getElementById("interface1").style.display === "none") {
        document.getElementById("interface1").style.display = "block";
        document.getElementById("interface2").style.display = "none";
      } else {
        document.getElementById("interface1").style.display = "none";
        document.getElementById("interface2").style.display = "block";
      }
    },

    bienes: function bienes() {
      var radioButtons = document.getElementsByName("bienes");
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          document.getElementById("coberturebienes").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
          document.getElementById("coberturebienes").setAttribute('disabled', '');
          $("#coberturebienes").val('0');
        } else {
          document.getElementById("coberturebienes").removeAttribute('disabled');
        }
      }
    },

    temporal: function temporal() {
      var radioButtons = document.getElementsByName("inhabitabilidad");
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          document.getElementById("coberturetemporal").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
          document.getElementById("coberturetemporal").setAttribute('disabled', '');
          $("#coberturetemporal").val('0');
        } else {
          document.getElementById("coberturetemporal").removeAttribute('disabled');
        }
      }
    },

    cliente: function cliente() {
      var radioButtons = $('input[name=cliente]');
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          //Habilitamos
          document.getElementById("insurance1").removeAttribute('disabled');
          document.getElementById("insurance2").removeAttribute('disabled');
          document.getElementById("insurance3").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
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

    startup: function startup() {
      var gpServiceUrl = "https://localhost:6443/arcgis/rest/services/Aseguradora/GPSeguros/GPServer/ScriptEdificios";
      this.gp = new Geoprocessor(gpServiceUrl);
      window.$app = {
        gp: this.gp,
        legend: this.legend,
        layer2: this.layer2
      };
      //dom.byId("anio").value = this.config.inPanelVar.params.anio;
    },

    calcularseguro: function calcularseguro() {
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

    gpJobComplete: function gpJobComplete(jobinfo) {
      console.log(jobinfo);
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

    gpJobStatus: function gpJobStatus(jobinfo) {
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

    gpJobFailed: function gpJobFailed(error) {
      error = "Problemas técnicos, vuelve a intentarlo...";
      document.getElementById('status').className = "error";
      dom.byId('status').innerHTML = error;
    },

    cleanup: function cleanup() {
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
