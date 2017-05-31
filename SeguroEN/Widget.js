define(['dojo/_base/declare', 'jimu/BaseWidget', "dojo/dom", "esri/domUtils", "esri/tasks/Geoprocessor", "esri/dijit/Legend", "dijit/form/TextBox", "dijit/form/NumberTextBox", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", 'bootstrap/Dropdown', 'bootstrap/Tab', 'bootstrap/Modal'], function (declare, BaseWidget, dom, domUtils, Geoprocessor, Legend) {

  return declare([BaseWidget], {

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

    property: function property() {
      var radioButtons = document.getElementsByName("property");
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          document.getElementById("personalvalue").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
          document.getElementById("personalvalue").setAttribute('disabled', '');
          $("#personalvalue").val('0');
        } else {
          document.getElementById("personalvalue").removeAttribute('disabled');
        }
      }
    },

    inhabitability: function inhabitability() {
      var radioButtons = document.getElementsByName("inhabitability");
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          document.getElementById("inhabitabilityvalue").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
          document.getElementById("inhabitabilityvalue").setAttribute('disabled', '');
          $("#inhabitabilityvalue").val('0');
        } else {
          document.getElementById("inhabitabilityvalue").removeAttribute('disabled');
        }
      }
    },

    customer: function customer() {
      var radioButtons = $('input[name=customer]');
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
      this.inhabitability();
      this.property();
      this.customer();
      var gpServiceUrl = "https://localhost:6443/arcgis/rest/services/Aseguradora/GPSeguros/GPServer/ScriptEdificios";
      this.gp = new Geoprocessor(gpServiceUrl);
      window.$app = {
        gp: this.gp,
        legend: this.legend,
        layer2: this.layer2
      };

      if (dom.byId("iyear").title === "2015") {
        document.getElementById("2015").setAttribute('selected', '');
      } else if (dom.byId("iyear").title === "2016") {
        document.getElementById("2016").setAttribute('selected', '');
      } else if (dom.byId("iyear").title === "2017") {
        document.getElementById("2017").setAttribute('selected', '');
      }

      if (dom.byId("building").title === "Apartment") {
        document.getElementById("Apartment").setAttribute('selected', '');
      } else if (dom.byId("building").title === "Single-Family Home") {
        document.getElementById("SingleHome").setAttribute('selected', '');
      }

      if (dom.byId("danger").title === "Low") {
        document.getElementById("Low").setAttribute('selected', '');
      } else if (dom.byId("danger").title === "Low-Medium") {
        document.getElementById("Low-Medium").setAttribute('selected', '');
      } else if (dom.byId("danger").title === "Medium") {
        document.getElementById("Medium").setAttribute('selected', '');
      } else if (dom.byId("danger").title === "Medium-High") {
        document.getElementById("Medium-High").setAttribute('selected', '');
      } else if (dom.byId("danger").title === "High") {
        document.getElementById("High").setAttribute('selected', '');
      } else if (dom.byId("danger").title === "Very High") {
        document.getElementById("Very High").setAttribute('selected', '');
      }

      if (dom.byId("material").title === "Brick with diagram effect") {
        document.getElementById("Material1").setAttribute('selected', '');
      } else if (dom.byId("material").title === "Brick without diagram effect") {
        document.getElementById("Material2").setAttribute('selected', '');
      } else if (dom.byId("material").title === "Masonry") {
        document.getElementById("Material3").setAttribute('selected', '');
      } else if (dom.byId("material").title === "Concrete Porticoes with Earthquake Resistant design") {
        document.getElementById("Material4").setAttribute('selected', '');
      } else if (dom.byId("material").title === "Concrete Porticoes without Earthquake Resistant design") {
        document.getElementById("Material5").setAttribute('selected', '');
      }

      if (dom.byId("deductible").title === "5%") {
        document.getElementById("5").setAttribute('selected', '');
      } else if (dom.byId("deductible").title === "10%") {
        document.getElementById("10").setAttribute('selected', '');
      } else if (dom.byId("deductible").title === "15%") {
        document.getElementById("15").setAttribute('selected', '');
      } else if (dom.byId("deductible").title === "20%") {
        document.getElementById("20").setAttribute('selected', '');
      } else if (dom.byId("deductible").title === "25%") {
        document.getElementById("25").setAttribute('selected', '');
      }

      if (dom.byId("items").checked) {
        document.getElementById("items1").removeAttribute('checked');
      } else if (dom.byId("items1").checked) {
        document.getElementById("items").removeAttribute('checked');
      }

      if (dom.byId("optional2")) {
        document.getElementById("optional2").remove();
      }

      if (dom.byId("optional4")) {
        document.getElementById("optional4").remove();
        document.getElementById("optional5").remove();
      }

      if (dom.byId("optional7")) {
        document.getElementById("optional7").remove();
        document.getElementById("optional8").remove();
      }

      if (dom.byId("personalvalue").title === "5000") {
        document.getElementById("5000").setAttribute('selected', '');
      } else if (dom.byId("personalvalue").title === "10000") {
        document.getElementById("10000").setAttribute('selected', '');
      } else if (dom.byId("personalvalue").title === "15000") {
        document.getElementById("15000").setAttribute('selected', '');
      } else if (dom.byId("personalvalue").title === "20000") {
        document.getElementById("20000").setAttribute('selected', '');
      } else if (dom.byId("personalvalue").title === "25000") {
        document.getElementById("25000").setAttribute('selected', '');
      }

      if (dom.byId("inhabitabilityvalue").title === "5000") {
        document.getElementById("1.000").setAttribute('selected', '');
      } else if (dom.byId("inhabitabilityvalue").title === "15000") {
        document.getElementById("5.000").setAttribute('selected', '');
      } else if (dom.byId("inhabitabilityvalue").title === "20000") {
        document.getElementById("10.000").setAttribute('selected', '');
      } else if (dom.byId("inhabitabilityvalue").title === "25000") {
        document.getElementById("20.000").setAttribute('selected', '');
      }
    },

    calculator: function calculator() {
      var year = dom.byId("iyear").value;
      var building = dom.byId("building").value;
      var construction = dom.byId("cyear").value;
      var area = dom.byId("area").value;
      var danger = dom.byId("danger").value;
      var material = dom.byId("material").value;
      var floors = dom.byId("floors").value;
      var market = dom.byId("market").value;
      var deductible = dom.byId("deductible").value;
      var object = document.getElementById('items');
      if (object.checked) {
        var items = dom.byId("items").value;
      }

      var object1 = document.getElementById('items1');
      if (object1.checked) {
        var items = dom.byId("items1").value;
      }

      var persproperty = document.getElementById('property');
      if (persproperty.checked) {
        var property = dom.byId("property").value;
      }

      var persproperty1 = document.getElementById('property1');
      if (persproperty1.checked) {
        var property = dom.byId("property1").value;
      }

      var personalvalue = dom.byId("personalvalue").value;
      var inhab = document.getElementById('inhabitability');
      if (inhab.checked) {
        var inhabitability = dom.byId("inhabitability").value;
      }

      var inhab1 = document.getElementById('inhabitability1');
      if (inhab1.checked) {
        var inhabitability = dom.byId("inhabitability1").value;
      }

      var inhabitabilityvalue = dom.byId("inhabitabilityvalue").value;
      var clien = document.getElementById('customer');
      if (clien.checked) {
        var customer = dom.byId("customer").value;
      }

      var clien1 = document.getElementById('customer1');
      if (clien1.checked) {
        var customer = dom.byId("customer1").value;
      }

      var insur = document.getElementById('insurance1');
      if (insur.checked) {
        var life = dom.byId("insurance1").value = "true";
        var lifeinsurance = dom.byId("insurance1").value;
      } else {
        var life1 = dom.byId("insurance1").value = "false";
        var lifeinsurance = dom.byId("insurance1").value;
      }

      var insur1 = document.getElementById('insurance2');
      if (insur1.checked) {
        var auto = dom.byId("insurance2").value = "true";
        var automobileinsurance = dom.byId("insurance2").value;
      } else {
        var auto1 = dom.byId("insurance2").value = "false";
        var automobileinsurance = dom.byId("insurance2").value;
      }

      var insur2 = document.getElementById('insurance3');
      if (insur2.checked) {
        var death = dom.byId("insurance3").value = "true";
        var deathinsurance = dom.byId("insurance3").value;
      } else {
        var death1 = dom.byId("insurance3").value = "false";
        var deathinsurance = dom.byId("insurance3").value;
      }

      var params = {
        "Año_Poliza": year,
        "Tipo_Edificio": building,
        "Año_Construccion": construction,
        "Superficie": area,
        "Peligrosidad": danger,
        "Tipo_Material": material,
        "Numero_Pisos": floors,
        "Valor_Mercado": market,
        "Deductible": deductible,
        "Cobertura_Objetos_Fragiles": items,
        "Cobertura_Bienes_Personales": property,
        "Valor_Bienes_Personales": personalvalue,
        "Cobertura_Inhabitabilidad": inhabitability,
        "Valor_Inhabitabilidad": inhabitabilityvalue,
        "Cliente": customer,
        "Seguro_de_Vida": lifeinsurance,
        "Seguro_de_Auto": automobileinsurance,
        "Seguro_de_Decesos": deathinsurance
      };

      this.cleanup();
      if (year === "" | building === "" | danger === "" | material === "" | deductible === "" | market > 1000000 | construction === "" | area === "" | market === "" | items === "" | property === "" | inhabitability === "" | customer === "") {
        jobstatus = 'Checks incoming data';
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
          var insurance = layer.value.features[0].attributes.Seguro;
          var control = dom.byId("controls");
          control.className = 'controls';
          control.innerHTML = '<h5> Home Insurance </h5>';
          var results = document.createElement("div");
          control.appendChild(results);
          resultados.innerHTML = "Insurance value:  " + insurance + "€/año";
        });
      });
      window.$app.map.on("layers-add-result", function (evtObj) {
        domUtils.show(dom.byId('legendDiv'));
        if (!window.$app.legend) {
          //add the legend to show the resulting layer.
          var layerInfo = array.map(evtObj.layers, function (layer, index) {
            return {
              layer: layer.layer,
              title: "Legend",
              name: "Feature Layer"
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
          jobstatus = 'Calculator has started...';
          status.className = 'start';
          break;
        case 'esriJobExecuting':
          jobstatus = 'Are you ready?';
          status.classList.remove("start");
          status.className = 'intermediate';
          break;
        case 'esriJobFailed':
          jobstatus = 'Checks incoming data';
          status.classList.remove("intermediate");
          status.className = 'error';
          break;
        case 'esriJobSucceeded':
          jobstatus = 'Everything is in order! ';
          status.classList.remove("error");
          status.className = "correct";
          domUtils.hide(dom.byId('status'));
          break;
      }
      dom.byId('status').innerHTML = jobstatus;
    },

    gpJobFailed: function gpJobFailed(error) {
      error = "Technical problems, try it again...";
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
