define(['dojo/_base/declare', "dijit/registry", "dojo/dom", "dojo/on", "esri/domUtils", 'dijit/_WidgetsInTemplateMixin', 'jimu/BaseWidgetSetting', 'dijit/TitlePane', 'dijit/form/NumberTextBox', 'dijit/form/TextBox', 'dijit/form/CheckBox'], function (declare, registry, dom, on, domUtils, _WidgetsInTemplateMixin, BaseWidgetSetting) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

    baseClass: 'jimu-widget-seguro-setting',

    onClick_bienes: function onClick_bienes() {
      var radioButtons = document.getElementsByName("bienes");
      if (radioButtons[0].value === "true") {
        if (radioButtons[0].checked) {
          document.getElementById("coberturebienes").removeAttribute('disabled');
        }
      }
      if (radioButtons[1].value === "false") {
        if (radioButtons[1].checked) {
          document.getElementById("coberturebienes").setAttribute('disabled', '');
          document.getElementById("coberturebienes").value = '0';
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
          document.getElementById("coberturetemporal").value = '0';
        } else {
          document.getElementById("coberturetemporal").removeAttribute('disabled');
        }
      }
    },

    cliente: function cliente() {
      var radioButtons = document.getElementsByName("cliente");
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

    postCreate: function postCreate() {
      this.setConfig(this.config);
    },

    // On open widget config
    setConfig: function setConfig(config) {
      this.insyear.value = config.iyear;
      this.infoinsyear.value = config.infoiyear;
      this.valueinsyear.value = config.valueiyear;

      this.building.value = config.build;
      this.infobuilding.value = config.infobuild;
      this.valuebuilding.value = config.valuebuild;

      this.consyear.value = config.cyear;
      this.infoconsyear.value = config.infocyear;
      this.helpconsyear.value = config.helpcyear;
      this.valueconsyear.value = config.valuecyear;

      this.housespace.value = config.space;
      this.infohousespace.value = config.infospace;
      this.helphousespace.value = config.helpspace;
      this.valuehousespace.value = config.valuespace;

      this.quakedanger.value = config.danger;
      this.infoquakedanger.value = config.infodanger;
      this.valuequakedanger.value = config.valuedanger;

      this.consmaterial.value = config.material;
      this.infoconsmaterial.value = config.infomaterial;
      this.valueconsmaterial.value = config.valuematerial;

      this.numberfloors.value = config.floors;
      this.infonumberfloors.value = config.infofloors;
      this.valuenumberfloors.value = config.valuefloors;

      this.pricemarket.value = config.market;
      this.infopricemarket.value = config.infomarket;
      this.helppricemarket.value = config.helpmarket;
      this.valuepricemarket.value = config.valuemarket;

      this.taxdeductible.value = config.deductible;
      this.infotaxdeductible.value = config.infodeductible;
      this.valuetaxdeductible.value = config.valuedeductible;

      this.objectcoverage.value = config.objecttext;
      this.infoobjectcoverage.value = config.infoobject;

      this.personcoverage.value = config.persontext;
      this.infopersoncoverage.value = config.infoperson;
      this.valuepersoncoverage.value = config.valueperson;
      this.propertycoverage.value = config.propervalue;

      this.temporalcoverage.value = config.temporaltext;
      this.infotemporalcoverage.value = config.infotemporal;
      this.valuetemporalcoverage.value = config.valuetemporal;
      this.inhabitabilitycoverage.value = config.inhabivalue;

      this.clientecoverage.value = config.clientetext;
      this.infoclientecoverage.value = config.infocliente;
      this.customercoverage.value = config.customervalue;
    },

    getConfig: function getConfig() {
      //WAB will get config object through this method

      var visibleobjectButton = document.getElementById("visiobject");
      if (visibleobjectButton.checked) {
        this.visibleobj.value = "optional1";
        var visibleob = this.visibleobj.value;
      } else {
        this.visibleobj.value = "optional2";
        var visibleob = this.visibleobj.value;
      }

      var ObjectButtons = document.getElementsByName("objetos");
      if (ObjectButtons[0].value === "true") {
        if (ObjectButtons[0].checked) {
          this.covobject.value = "checked";
          this.covobjection.value = " ";
          var obje = this.covobjection.value;
          var obj = this.covobject.value;
        }
      }
      if (ObjectButtons[1].value === "false") {
        if (ObjectButtons[1].checked) {
          this.covobject.value = " ";
          this.covobjection.value = "checked";
          var obj = this.covobject.value;
          var obje = this.covobjection.value;
        }
      }

      var personalobjectButton = document.getElementById("visiperson");
      if (personalobjectButton.checked) {
        this.visiblepers.value = "optional3";
        var visiblepe = this.visiblepers.value;
      } else {
        this.visiblepers.value = "optional4";
        var visiblepe = this.visiblepers.value;
      }

      var PersonalButtons = document.getElementsByName("bienes");
      if (PersonalButtons[0].value === "true") {
        if (PersonalButtons[0].checked) {
          this.covperson.value = "checked";
          this.covpersonal.value = " ";
          var per = this.covperson.value;
          var pers = this.covpersonal.value;
        }
      }
      if (PersonalButtons[1].value === "false") {
        if (PersonalButtons[1].checked) {
          this.covperson.value = " ";
          this.covpersonal.value = "checked";
          var per = this.covperson.value;
          var pers = this.covpersonal.value;
        }
      }

      var temporaltextobjectButton = document.getElementById("visitempo");
      if (temporaltextobjectButton.checked) {
        this.visibletemp.value = "optional6";
        var visiblete = this.visibletemp.value;
      } else {
        this.visibletemp.value = "optional7";
        var visiblete = this.visibletemp.value;
      }

      var TemporalButtons = document.getElementsByName("inhabitabilidad");
      if (TemporalButtons[0].value === "true") {
        if (TemporalButtons[0].checked) {
          this.covtempo.value = "checked";
          this.covtemporal.value = " ";
          var tem = this.covtempo.value;
          var temp = this.covtemporal.value;
        }
      }
      if (TemporalButtons[1].value === "false") {
        if (TemporalButtons[1].checked) {
          this.covtempo.value = " ";
          this.covtemporal.value = "checked";
          var tem = this.covtempo.value;
          var temp = this.covtemporal.value;
        }
      }

      var clientetextobjectButton = document.getElementById("visiclient");
      if (clientetextobjectButton.checked) {
        this.visiblecliente.value = "optional9";
        var visiblecli = this.visiblecliente.value;
      } else {
        this.visiblecliente.value = "optional10";
        var visiblecli = this.visiblecliente.value;
      }

      var ClienteButtons = document.getElementsByName("cliente");
      if (ClienteButtons[0].value === "true") {
        if (ClienteButtons[0].checked) {
          this.covclien.value = "checked";
          this.covcliente.value = " ";
          var cli = this.covclien.value;
          var clie = this.covcliente.value;
        }
      }
      if (ClienteButtons[1].value === "false") {
        if (ClienteButtons[1].checked) {
          this.covclien.value = " ";
          this.covcliente.value = "checked";
          var cli = this.covclien.value;
          var clie = this.covcliente.value;
        }
      }

      var Insurance1Button = document.getElementById("insurance1");
      if (Insurance1Button.checked) {
        this.insurance1value.value = "checked";
        var insu1 = this.insurance1value.value;
      } else {
        this.insurance1value.value = " ";
        var insu1 = this.insurance1value.value;
      }

      var Insurance2Button = document.getElementById("insurance2");
      if (Insurance2Button.checked) {
        this.insurance2value.value = "checked";
        var insu2 = this.insurance2value.value;
      } else {
        this.insurance2value.value = " ";
        var insu2 = this.insurance2value.value;
      }

      var Insurance3Button = document.getElementById("insurance3");
      if (Insurance3Button.checked) {
        this.insurance3value.value = "checked";
        var insu3 = this.insurance3value.value;
      } else {
        this.insurance3value.value = " ";
        var insu3 = this.insurance3value.value;
      }

      return {
        iyear: this.insyear.value,
        infoiyear: this.infoinsyear.value,
        valueiyear: this.valueinsyear.value,

        build: this.building.value,
        infobuild: this.infobuilding.value,
        valuebuild: this.valuebuilding.value,

        cyear: this.consyear.value,
        infocyear: this.infoconsyear.value,
        helpcyear: this.helpconsyear.value,
        valuecyear: this.valueconsyear.value,

        space: this.housespace.value,
        infospace: this.infohousespace.value,
        helpspace: this.helphousespace.value,
        valuespace: this.valuehousespace.value,

        danger: this.quakedanger.value,
        infodanger: this.infoquakedanger.value,
        valuedanger: this.valuequakedanger.value,

        material: this.consmaterial.value,
        infomaterial: this.infoconsmaterial.value,
        valuematerial: this.valueconsmaterial.value,

        floors: this.numberfloors.value,
        infofloors: this.infonumberfloors.value,
        valuefloors: this.valuenumberfloors.value,

        market: this.pricemarket.value,
        infomarket: this.infopricemarket.value,
        helpmarket: this.helppricemarket.value,
        valuemarket: this.valuepricemarket.value,

        deductible: this.taxdeductible.value,
        infodeductible: this.infotaxdeductible.value,
        valuedeductible: this.valuetaxdeductible.value,

        objecttext: this.objectcoverage.value,
        infoobject: this.infoobjectcoverage.value,
        visobj: visibleob,
        object: obj,
        objection: obje,

        persontext: this.personcoverage.value,
        infoperson: this.infopersoncoverage.value,
        vispers: visiblepe,
        person: per,
        personal: pers,
        valueperson: this.valuepersoncoverage.value,
        propervalue: this.propertycoverage.value,

        temporaltext: this.temporalcoverage.value,
        infotemporal: this.infotemporalcoverage.value,
        vistemp: visiblete,
        tempo: tem,
        temporal: temp,
        valuetemporal: this.valuetemporalcoverage.value,
        inhabivalue: this.inhabitabilitycoverage.value,

        clientetext: this.clientecoverage.value,
        infocliente: this.infoclientecoverage.value,
        client: visiblecli,
        clien: cli,
        cliente: clie,
        customervalue: this.customercoverage.value,
        insuran1: insu1,
        insuran2: insu2,
        insuran3: insu3
      };
    },

    onClick_Descripcion: function onClick_Descripcion() {
      if (document.getElementById("interfacedescription").offsetParent === null) {
        document.getElementById("interfacedescription").style.display = "block";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Anio: function onClick_Anio() {
      if (document.getElementById("interfaceanio").offsetParent === null) {
        document.getElementById("interfaceanio").style.display = "block";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Edificio: function onClick_Edificio() {
      if (document.getElementById("interfaceedificio").offsetParent === null) {
        document.getElementById("interfaceedificio").style.display = "block";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Construccion: function onClick_Construccion() {
      if (document.getElementById("interfaceconstruccion").offsetParent === null) {
        document.getElementById("interfaceconstruccion").style.display = "block";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Superficie: function onClick_Superficie() {
      if (document.getElementById("interfacesuperficie").offsetParent === null) {
        document.getElementById("interfacesuperficie").style.display = "block";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Peligrosidad: function onClick_Peligrosidad() {
      if (document.getElementById("interfacepeligrosidad").offsetParent === null) {
        document.getElementById("interfacepeligrosidad").style.display = "block";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Material: function onClick_Material() {
      if (document.getElementById("interfacematerial").offsetParent === null) {
        document.getElementById("interfacematerial").style.display = "block";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Pisos: function onClick_Pisos() {
      if (document.getElementById("interfacepisos").offsetParent === null) {
        document.getElementById("interfacepisos").style.display = "block";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Mercado: function onClick_Mercado() {
      if (document.getElementById("interfacemercado").offsetParent === null) {
        document.getElementById("interfacemercado").style.display = "block";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Deductible: function onClick_Deductible() {
      if (document.getElementById("interfacedeductible").offsetParent === null) {
        document.getElementById("interfacedeductible").style.display = "block";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Objetos: function onClick_Objetos() {
      if (document.getElementById("interfaceobjetos").offsetParent === null) {
        document.getElementById("interfaceobjetos").style.display = "block";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Personales: function onClick_Personales() {
      if (document.getElementById("interfacepersonales").offsetParent === null) {
        document.getElementById("interfacepersonales").style.display = "block";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Temporal: function onClick_Temporal() {
      if (document.getElementById("interfacetemporal").offsetParent === null) {
        document.getElementById("interfacetemporal").style.display = "block";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
        document.getElementById("interfacecliente").style.display = "none";
      }
    },

    onClick_Cliente: function onClick_Cliente() {
      if (document.getElementById("interfacecliente").offsetParent === null) {
        document.getElementById("interfacecliente").style.display = "block";
        document.getElementById("interfacetemporal").style.display = "none";
        document.getElementById("interfacepersonales").style.display = "none";
        document.getElementById("interfaceobjetos").style.display = "none";
        document.getElementById("interfacedeductible").style.display = "none";
        document.getElementById("interfacemercado").style.display = "none";
        document.getElementById("interfacepisos").style.display = "none";
        document.getElementById("interfacematerial").style.display = "none";
        document.getElementById("interfacepeligrosidad").style.display = "none";
        document.getElementById("interfacesuperficie").style.display = "none";
        document.getElementById("interfaceconstruccion").style.display = "none";
        document.getElementById("interfaceedificio").style.display = "none";
        document.getElementById("interfacedescription").style.display = "none";
        document.getElementById("interfaceanio").style.display = "none";
      }
    },

    onClick_Salida: function onClick_Salida() {}

  });
});
