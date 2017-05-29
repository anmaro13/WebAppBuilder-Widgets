define(['dojo/_base/declare',
"dijit/registry", "dojo/dom", "dojo/on", "esri/domUtils",
'dijit/_WidgetsInTemplateMixin', 'jimu/BaseWidgetSetting', 'dijit/TitlePane', 'dijit/form/NumberTextBox',
'dijit/form/TextBox', 'dijit/form/CheckBox'],
function (declare, registry, dom, on, domUtils, _WidgetsInTemplateMixin, BaseWidgetSetting) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {

    baseClass: 'jimu-widget-seguro-setting',

    onClick_property: function(){
      var radioButtons= document.getElementsByName("property");
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
        document.getElementById("personalvalue").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
          document.getElementById("personalvalue").setAttribute('disabled', '');
          document.getElementById("personalvalue").value ='0';
        }else{
          document.getElementById("personalvalue").removeAttribute('disabled');
          }
        }
    },

    inhabitability: function(){
      var radioButtons= document.getElementsByName("inhabitability");
      if(radioButtons[0].value==="true"){
        if(radioButtons[0].checked){
        document.getElementById("inhabitabilityvalue").removeAttribute('disabled');
        }
      }
      if(radioButtons[1].value==="false"){
        if(radioButtons[1].checked){
          document.getElementById("inhabitabilityvalue").setAttribute('disabled', '');
          document.getElementById("inhabitabilityvalue").value ='0';
        }else{
          document.getElementById("inhabitabilityvalue").removeAttribute('disabled');
          }
        }
    },

    customer: function(){
      var radioButtons= document.getElementsByName("customer");
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

      this.clientcoverage.value = config.customertext;
      this.infocustomercoverage.value = config.infocustomer;
      this.customercoverage.value = config.customervalue;

    },

    getConfig: function getConfig() {
    //WAB will get config object through this method

      var visibleobjectButton= document.getElementById("visiobject");
      if(visibleobjectButton.checked){
          this.visibleobj.value = "optional1";
          var visibleob = this.visibleobj.value;
      }else{
        this.visibleobj.value = "optional2";
        var visibleob = this.visibleobj.value;
      }

      var ObjectButtons= document.getElementsByName("items");
      if(ObjectButtons[0].value==="true"){
        if(ObjectButtons[0].checked){
          this.covobject.value = "checked";
          this.covobjection.value = " ";
          var obje = this.covobjection.value;
          var obj = this.covobject.value;
        }
      }
      if(ObjectButtons[1].value==="false"){
        if(ObjectButtons[1].checked){
          this.covobject.value = " ";
          this.covobjection.value = "checked";
          var obj = this.covobject.value;
          var obje = this.covobjection.value;
        }
      }

      var personalobjectButton= document.getElementById("visiperson");
      if(personalobjectButton.checked){
          this.visiblepers.value = "optional3";
          var visiblepe = this.visiblepers.value;
      }else{
        this.visiblepers.value = "optional4";
        var visiblepe = this.visiblepers.value;
      }

      var PersonalButtons= document.getElementsByName("property");
      if(PersonalButtons[0].value==="true"){
        if(PersonalButtons[0].checked){
          this.covperson.value = "checked";
          this.covpersonal.value = " ";
          var per = this.covperson.value;
          var pers = this.covpersonal.value;
        }
      }
      if(PersonalButtons[1].value==="false"){
        if(PersonalButtons[1].checked){
          this.covperson.value = " ";
          this.covpersonal.value = "checked";
          var per = this.covperson.value;
          var pers = this.covpersonal.value;
        }
      }

      var temporaltextobjectButton= document.getElementById("visitempo");
      if(temporaltextobjectButton.checked){
            this.visibletemp.value = "optional6";
            var visiblete = this.visibletemp.value;
        }else{
          this.visibletemp.value = "optional7";
          var visiblete = this.visibletemp.value;
        }

      var TemporalButtons= document.getElementsByName("inhabitability");
      if(TemporalButtons[0].value==="true"){
          if(TemporalButtons[0].checked){
            this.covtempo.value = "checked";
            this.covtemporal.value = " ";
            var tem = this.covtempo.value;
            var temp = this.covtemporal.value;
          }
        }
      if(TemporalButtons[1].value==="false"){
          if(TemporalButtons[1].checked){
            this.covtempo.value = " ";
            this.covtemporal.value = "checked";
            var tem = this.covtempo.value;
            var temp = this.covtemporal.value;
          }
      }

      var clientetextobjectButton= document.getElementById("visiclient");
      if(clientetextobjectButton.checked){
            this.visiblecustomer.value = "optional9";
            var visiblecli = this.visiblecustomer.value;
        }else{
          this.visiblecustomer.value = "optional10";
          var visiblecli = this.visiblecustomer.value;
        }

      var ClienteButtons= document.getElementsByName("customer");
        if(ClienteButtons[0].value==="true"){
            if(ClienteButtons[0].checked){
              this.covclien.value = "checked";
              this.covcliente.value = " ";
              var cli = this.covclien.value;
              var clie = this.covcliente.value;
            }
          }
        if(ClienteButtons[1].value==="false"){
            if(ClienteButtons[1].checked){
              this.covclien.value = " ";
              this.covcliente.value = "checked";
              var cli = this.covclien.value;
              var clie = this.covcliente.value;
            }
        }

      var Insurance1Button= document.getElementById("insurance1");
        if(Insurance1Button.checked){
              this.insurance1value.value = "checked";
              var insu1 = this.insurance1value.value;
          }else{
            this.insurance1value.value = " ";
            var insu1 = this.insurance1value.value;
          }

        var Insurance2Button= document.getElementById("insurance2");
          if(Insurance2Button.checked){
                this.insurance2value.value = "checked";
                var insu2 = this.insurance2value.value;
            }else{
              this.insurance2value.value = " ";
              var insu2 = this.insurance2value.value;
            }

        var Insurance3Button= document.getElementById("insurance3");
          if(Insurance3Button.checked){
                this.insurance3value.value = "checked";
                var insu3 = this.insurance3value.value;
            }else{
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

        customertext: this.clientcoverage.value,
        infocustomer: this.infocustomercoverage.value,
        custom: visiblecli,
        custo: cli,
        customer: clie,
        customervalue: this.customercoverage.value,
        insuran1: insu1,
        insuran2: insu2,
        insuran3: insu3
      };

    },

    onClick_Description: function() {
      if (document.getElementById("interfacedescription").offsetParent===null){
        document.getElementById("interfacedescription").style.display="block";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Year: function() {
      if (document.getElementById("interfaceyear").offsetParent===null){
        document.getElementById("interfaceyear").style.display="block";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Building: function() {
      if (document.getElementById("interfacebuilding").offsetParent===null){
        document.getElementById("interfacebuilding").style.display="block";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Construction: function() {
      if (document.getElementById("interfaceconstruction").offsetParent===null){
        document.getElementById("interfaceconstruction").style.display="block";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Area: function() {
      if (document.getElementById("interfacearea").offsetParent===null){
        document.getElementById("interfacearea").style.display="block";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Hazard: function() {
      if (document.getElementById("interfacehazard").offsetParent===null){
        document.getElementById("interfacehazard").style.display="block";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Material: function() {
      if (document.getElementById("interfacematerial").offsetParent===null){
        document.getElementById("interfacematerial").style.display="block";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Floors: function() {
      if (document.getElementById("interfacefloors").offsetParent===null){
        document.getElementById("interfacefloors").style.display="block";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Market: function() {
      if (document.getElementById("interfacemarket").offsetParent===null){
        document.getElementById("interfacemarket").style.display="block";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Deductible: function() {
      if (document.getElementById("interfacedeductible").offsetParent===null){
        document.getElementById("interfacedeductible").style.display="block";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Items: function() {
      if (document.getElementById("interfaceitems").offsetParent===null){
        document.getElementById("interfaceitems").style.display="block";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Property: function() {
      if (document.getElementById("interfaceproperty").offsetParent===null){
        document.getElementById("interfaceproperty").style.display="block";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Inhabitability: function() {
      if (document.getElementById("interfaceinhabitability").offsetParent===null){
        document.getElementById("interfaceinhabitability").style.display="block";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
        document.getElementById("interfacecustomer").style.display="none";
      }
    },

    onClick_Customer: function() {
      if (document.getElementById("interfacecustomer").offsetParent===null){
        document.getElementById("interfacecustomer").style.display="block";
        document.getElementById("interfaceinhabitability").style.display="none";
        document.getElementById("interfaceproperty").style.display="none";
        document.getElementById("interfaceitems").style.display="none";
        document.getElementById("interfacedeductible").style.display="none";
        document.getElementById("interfacemarket").style.display="none";
        document.getElementById("interfacefloors").style.display="none";
        document.getElementById("interfacematerial").style.display="none";
        document.getElementById("interfacehazard").style.display="none";
        document.getElementById("interfacearea").style.display="none";
        document.getElementById("interfaceconstruction").style.display="none";
        document.getElementById("interfacebuilding").style.display="none";
        document.getElementById("interfacedescription").style.display="none";
        document.getElementById("interfaceyear").style.display="none";
      }
    },

    onClick_Salida: function() {

    }

  });
});
