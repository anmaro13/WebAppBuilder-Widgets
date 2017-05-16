define(['dojo/_base/declare', "dijit/registry", "dojo/dom", "dojo/on", "esri/domUtils", 'dijit/_WidgetsInTemplateMixin', 'jimu/BaseWidgetSetting', 'dijit/TitlePane', 'dijit/form/NumberTextBox', 'dijit/form/TextBox', 'dijit/form/CheckBox'], function (declare, registry, dom, on, domUtils, _WidgetsInTemplateMixin, BaseWidgetSetting) {
  return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
    // Declaramos la clase CSS para los estilos
    baseClass: 'jimu-widget-heatmap-setting',

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
      domUtils.hide(dom.byId('parametros'));
      this.inherited(arguments);
      var config = this.config;
      // if config doesnt exisist we create it
      /*if(config === null){
        if (config.inPanelVar === null){
        config.inPanelVar = {};
        }else{
        config.inPanelVar = config.inPanelVar;
        }
      }*/

      config.params = config.params || {};
      this.setConfig(this.config);
    },

    // On open widget config
    setConfig: function setConfig(config) {
      this.config = config;
      // Load service URL if exisits
      if (this.config.anio) {
        //this.anio.set('value',this.config.anio);
      }
      return this.config;
    },

    getConfig: function getConfig() {
      var options = this.config.params;
      //options.anio = this.anio.get("value");
      return this.config;
    },

    onClick_Descripcion: function onClick_Descripcion() {
      domUtils.show(dom.byId('descripcion'));
      domUtils.hide(dom.byId('parametros'));
      domUtils.hide(dom.byId('predeterminado'));
    },

    onClick_Anio: function onClick_Anio() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<option>Selecciona un año</option>' + '<option>2015</option>' + '<option>2016</option>' + '<option>2017</option>';
    },

    onClick_Edificio: function onClick_Edificio() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<select class="form-control selectpicker" >' + '<option>Selecciona un tipo de edificio</option>' + '<option>Piso o Apartamento</option>' + '<option>Vivienda Unifamiliar</option>' + '</select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Tipo de Edificio";
      var informacion = dom.byId("informacion");
      informacion.value = "Tipo de Edificio";
    },

    onClick_Construccion: function onClick_Construccion() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<input name="anio" id = "construccion" placeholder="Introduce un año" max="2014" min="1800" class="form-control" type="text" pattern="/[1][8|9][0-9][0-9]|[2][0][1][4]/">';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Año de construcción";
      var informacion = dom.byId("informacion");
      informacion.value = "Año de construcción";
    },

    onClick_Superficie: function onClick_Superficie() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<input name="superficie" id = "superficie" placeholder="Introduce los m2" max="500" min="20" class="form-control" type="text" pattern="/[2-9][0-9]|[1-4][0-9][0-9]|[5][0][0]">';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Superficie de la vivienda";
      var informacion = dom.byId("informacion");
      informacion.value = "Superficie de la vivienda";
    },

    onClick_Peligrosidad: function onClick_Peligrosidad() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<select name="peligrosidad" id="peligrosidad" class="form-control selectpicker">' + '<option value="" >Selecciona una peligrosidad</option>' + '<option value= "Baja">Baja</option>' + '<option value= "Baja-Media">Baja-Media</option>' + '<option value= "Media">Media</option>' + '<option value ="Media-Alta">Media-Alta</option>' + '<option value = "Alta">Alta</option>' + '<option value = "Muy Alta">Muy Alta</option>' + '</select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Peligrosidad";
      var informacion = dom.byId("informacion");
      informacion.value = "Peligrosidad";
    },

    onClick_Material: function onClick_Material() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<select name="material" id = "material" class="form-control selectpicker">' + '<option value="" >Selecciona un tipo de material</option>' + '<option value= "Ladrillo con efecto diafragma">Ladrillo con efecto diafragma</option>' + '<option value= "Ladrillo sin efecto diafragma">Ladrillo sin efecto diafragma</option>' + '<option value= "Mamposteria">Mampostería</option>' + '<option value= "Porticos de Hormigon Armado CON diseño sismorresistente">Porticos de Hormigon Armado con diseño sismorresistente</option>' + '<option value= "Porticos de Hormigon Armado SIN diseño sismorresistente">Porticos de Hormigon Armado sin diseño sismorresistente</option>' + '</select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Tipo de Material";
      var informacion = dom.byId("informacion");
      informacion.value = "Tipo Material";
    },

    onClick_Pisos: function onClick_Pisos() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<input name="pisos" id="pisos" class="form-control" type="number" onkeydown="return false" min="1" max="14" value="1">';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Número de pisos";
      var informacion = dom.byId("informacion");
      informacion.value = "Número de pisos";
    },

    onClick_Mercado: function onClick_Mercado() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<input name="valor" id="mercado" placeholder="Introduce un valor" class="form-control" type="text">';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Valor de Mercado";
      var informacion = dom.byId("informacion");
      informacion.value = "Valor de Mercado";
    },

    onClick_Deductible: function onClick_Deductible() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<select name="deductible" id = "deductible" class="form-control selectpicker">' + '<option value="" >Selecciona un porcentaje</option>' + '<option value = "5%">5%</option>' + '<option value = "10%">10%</option>' + '<option value = "15%">15%</option>' + '<option value = "20%">20%</option>' + '<option value = "25%">25%</option></select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Deductible";
      var informacion = dom.byId("informacion");
      informacion.value = "Deductible";
    },

    onClick_Objetos: function onClick_Objetos() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.show(dom.byId('parametros'));
      domUtils.hide(dom.byId('valores'));
      domUtils.show(dom.byId('predeterminado'));
      var visibilidad = dom.byId("visibilidad");
      visibilidad.innerHTML = '<label class="col-md-6 control-label">Visible: </label>' + '<div class="col-md-6 inputGroupContainer">' + '<div class="input-group" id="visible"></div>' + '</div>';
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<div class="radio-inline">' + '<label><input type="radio" name="objetos" id="objetos" value="true" /> Si</label>' + '</div>' + '<div class="radio-inline">' + '<label><input type="radio" name="objetos" id ="objetos1" value="false" /> No</label>' + '</div>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Cobertura de Objetos";
      var informacion = dom.byId("informacion");
      informacion.value = "Cobertura de Objetos";
      var visible = dom.byId("visible");
      visible.innerHTML = '<div class="onoffswitch">' + '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked hidden>' + '<label class="onoffswitch-label" for="myonoffswitch">' + '<span class="onoffswitch-inner"></span>' + '<span class="onoffswitch-switch"></span>' + '</label></div>';
    },

    onClick_Personales: function onClick_Personales() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.show(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var valores = dom.byId("valores");
      valores.innerHTML = '<label class="col-md-6 control-label">Valor de la cobertura: </label>' + '<div class="col-md-6 inputGroupContainer">' + '<div class="input-group" id="valores2"></div>' + '</div>';
      var visibilidad = dom.byId("visibilidad");
      visibilidad.innerHTML = '<label class="col-md-6 control-label">Visible: </label>' + '<div class="col-md-6 inputGroupContainer">' + '<div class="input-group" id="visible"></div>' + '</div>';
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<div class="radio-inline">' + '<label><input type="radio" name="bienes" id="bienes" value="true" data-dojo-attach-event="onclick: onClick_bienes"/> Si</label>' + '</div>' + '<div class="radio-inline">' + '<label><input type="radio" name="bienes" id="bienes1" value="false" data-dojo-attach-event="onclick:bienes"/> No</label>' + '</div>';
      var valores2 = dom.byId("valores2");
      valores2.innerHTML = '<select name="personales" class="form-control selectpicker" id="coberturebienes" disabled>' + '<option value="" >Selecciona un valor</option>' + '<option value="5000">5.000€</option>' + '<option value="10000">10.000€</option>' + '<option value="15000">15.000€</option>' + '<option value="20000">20.000€</option>' + '<option value="25000">25.000€</option></select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Cobertura de bienes personales";
      var informacion = dom.byId("informacion");
      informacion.value = "Cobertura de bienes personales";
      var visible = dom.byId("visible");
      visible.innerHTML = '<div class="onoffswitch">' + '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked hidden>' + '<label class="onoffswitch-label" for="myonoffswitch">' + '<span class="onoffswitch-inner"></span>' + '<span class="onoffswitch-switch"></span>' + '</label></div>';
    },

    onClick_Temporal: function onClick_Temporal() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.show(dom.byId('valores'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var visibilidad = dom.byId("visibilidad");
      visibilidad.innerHTML = '<label class="col-md-6 control-label">Visible: </label>' + '<div class="col-md-6 inputGroupContainer">' + '<div class="input-group" id="visible"></div>' + '</div>';
      var valores = dom.byId("valores");
      valores.innerHTML = '<label class="col-md-6 control-label">Valor de la cobertura: </label>' + '<div class="col-md-6 inputGroupContainer">' + '<div class="input-group" id="valores2"></div>' + '</div>';
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<div class="radio-inline">' + '<label><input type="radio" name="inhabitabilidad" id ="temporal" value="true" /> Si</label>' + '</div>' + '<div class="radio-inline">' + '<label><input type="radio" name="inhabitabilidad" id ="temporal1" value="false" /> No</label>' + '</div>';
      var valores2 = dom.byId("valores2");
      valores2.innerHTML = '<select name="personales" class="form-control selectpicker" id="coberturebienes">' + '<option value="" >Selecciona un valor</option>' + '<option value="1000">1.000€</option>' + '<option value="5000">5.000€</option>' + '<option value="10000">10.000€</option>' + '<option value="20000">20.000€</option></select>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Cobertura por inhabitabilidad temporal";
      var informacion = dom.byId("informacion");
      informacion.value = "Cobertura por inhabitabilidad temporal";
      var visible = dom.byId("visible");
      visible.innerHTML = '<div class="onoffswitch">' + '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked hidden>' + '<label class="onoffswitch-label" for="myonoffswitch">' + '<span class="onoffswitch-inner"></span>' + '<span class="onoffswitch-switch"></span>' + '</label></div>';
    },

    onClick_Cliente: function onClick_Cliente() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.hide(dom.byId('valores'));
      domUtils.hide(dom.byId('visibilidad'));
      domUtils.show(dom.byId('parametros'));
      domUtils.show(dom.byId('predeterminado'));
      var contenido = dom.byId("contenido");
      contenido.innerHTML = '<div class="radio-inline">' + '<label><input type="radio" name="cliente" id = "cliente" value="true" /> Si</label>' + '</div>' + '<div class="radio-inline">' + '<label><input type="radio" name="cliente" id="cliente1" value="false" /> No</label>' + '</div>';
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Cliente";
      var informacion = dom.byId("informacion");
      informacion.value = "Cliente";
    },

    onClick_Salida: function onClick_Salida() {
      domUtils.hide(dom.byId('descripcion'));
      domUtils.show(dom.byId('parametros'));
      var etiqueta = dom.byId("etiqueta");
      etiqueta.value = "Edificios";
      var informacion = dom.byId("informacion");
      informacion.value = "Edificios";
      domUtils.hide(dom.byId('predeterminado'));
    }

  });
});
