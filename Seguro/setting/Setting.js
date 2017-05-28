define(['dojo/_base/declare',
"dijit/registry", "dojo/dom", "dojo/on", "esri/domUtils",
'dijit/_WidgetsInTemplateMixin', 'jimu/BaseWidgetSetting', 'dijit/TitlePane', 'dijit/form/NumberTextBox',
'dijit/form/TextBox', 'dijit/form/CheckBox'],
function (declare, registry, dom, on, domUtils, _WidgetsInTemplateMixin, BaseWidgetSetting) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

    baseClass: 'jimu-widget-seguro-setting',

    onClick_bienes: function(){
      var radioButtons= document.getElementsByName("bienes");
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
        document.getElementById("coberturebienes").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
          document.getElementById("coberturebienes").setAttribute('disabled', '');
          document.getElementById("coberturebienes").value ='0';
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
          document.getElementById("coberturetemporal").value ='0';
        }else{
          document.getElementById("coberturetemporal").removeAttribute('disabled');
          }
        }
    },

    cliente: function(){
      var radioButtons= document.getElementsByName("cliente");
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

    postCreate: function() {
      this.setConfig(this.config);
    },

    // On open widget config
    setConfig: function(config) {
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
    },

    getConfig: function getConfig() {
    //WAB will get config object through this method
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

      };
    },

    onClick_Descripcion: function() {
      if (document.getElementById("interfacedescription").offsetParent===null){
        document.getElementById("interfacedescription").style.display="block";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Anio: function() {
      if (document.getElementById("interfaceanio").offsetParent===null){
        document.getElementById("interfaceanio").style.display="block";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Edificio: function() {
      if (document.getElementById("interfaceedificio").offsetParent===null){
        document.getElementById("interfaceedificio").style.display="block";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Construccion: function() {
      if (document.getElementById("interfaceconstruccion").offsetParent===null){
        document.getElementById("interfaceconstruccion").style.display="block";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Superficie: function() {
      if (document.getElementById("interfacesuperficie").offsetParent===null){
        document.getElementById("interfacesuperficie").style.display="block";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Peligrosidad: function() {
      if (document.getElementById("interfacepeligrosidad").offsetParent===null){
        document.getElementById("interfacepeligrosidad").style.display="block";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Material: function() {
      if (document.getElementById("interfacematerial").offsetParent===null){
        document.getElementById("interfacematerial").style.display="block";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Pisos: function() {
      if (document.getElementById("interfacepisos").offsetParent===null){
        document.getElementById("interfacepisos").style.display="block";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Mercado: function() {
      if (document.getElementById("interfacemercado").offsetParent===null){
        document.getElementById("interfacemercado").style.display="block";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Deductible: function() {
      if (document.getElementById("interfacedeductible").offsetParent===null){
        document.getElementById("interfacedeductible").style.display="block";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Objetos: function() {
      if (document.getElementById("interfaceobjetos").offsetParent===null){
        document.getElementById("interfaceobjetos").style.display="block";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Personales: function() {
      if (document.getElementById("interfacepersonales").offsetParent===null){
        document.getElementById("interfacepersonales").style.display="block";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Temporal: function() {
      if (document.getElementById("interfacetemporal").offsetParent===null){
        document.getElementById("interfacetemporal").style.display="block";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
        document.getElementById("interfacecliente").style.display="none";
      }
    },

    onClick_Cliente: function() {
      if (document.getElementById("interfacecliente").offsetParent===null){
        document.getElementById("interfacecliente").style.display="block";
        document.getElementById("interfacetemporal").style.display="none";
        document.getElementById("interfacepersonales").style.display="none";
        document.getElementById("interfaceobjetos").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemercado").style.display="none";
        document.getElementById("interfacepisos").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacepeligrosidad").style.display="none";
        document.getElementById("interfacesuperficie").style.display="none";
        document.getElementById("interfaceconstruccion").style.display="none";
        document.getElementById("interfaceedificio").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceanio").style.display="none";
      }
    },

    onClick_Salida: function() {

    }

  });
});
