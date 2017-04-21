

define([
    'dojo/_base/declare',
      "dojo/dom",
      "esri/domUtils",
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidgetSetting',
    'dijit/TitlePane',
    'dijit/form/NumberTextBox',
    'dijit/form/TextBox',
    'dijit/form/CheckBox'
  ],
  function(
    declare, dom, domUtils,
    _WidgetsInTemplateMixin,
    BaseWidgetSetting) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
      // Declaramos la clase CSS para los estilos
      baseClass: 'jimu-widget-heatmap-setting',

      startup: function() {
      domUtils.hide(dom.byId('parametros'));
      },

      onClick_Descripcion: function() {
        domUtils.show(dom.byId('descripcion'));
        domUtils.hide(dom.byId('parametros'));
        domUtils.hide(dom.byId('predeterminado'));
      },

      onClick_Anio: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select class="form-control selectpicker" >' +
        '<option>Selecciona un año</option>' + '<option>2015</option>' + '<option>2016</option>' +
        '<option>2017</option>' + '</select>';
      },

      onClick_Edificio: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select class="form-control selectpicker" >' +
        '<option>Selecciona un tipo de edificio</option>' + '<option>Piso o Apartamento</option>' +
        '<option>Vivienda Unifamiliar</option>' + '</select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Tipo de Edificio";
        var informacion = dom.byId("informacion");
        informacion.value = "Tipo de Edificio";
      },

      onClick_Construccion: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<input name="anio" id = "construccion" placeholder="Introduce un año" max="2014" min="1800" class="form-control" type="text" pattern="/[1][8|9][0-9][0-9]|[2][0][1][4]/">';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Año de construcción";
        var informacion = dom.byId("informacion");
        informacion.value = "Año de construcción";
      },

      onClick_Superficie: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<input name="superficie" id = "superficie" placeholder="Introduce los m2" max="500" min="20" class="form-control" type="text" pattern="/[2-9][0-9]|[1-4][0-9][0-9]|[5][0][0]">';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Superficie de la vivienda";
        var informacion = dom.byId("informacion");
        informacion.value = "Superficie de la vivienda";
      },

      onClick_Peligrosidad: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select name="peligrosidad" id="peligrosidad" class="form-control selectpicker">'+
        '<option value="" >Selecciona una peligrosidad</option>'+
          '<option value= "Baja">Baja</option>'+
          '<option value= "Baja-Media">Baja-Media</option>'+
          '<option value= "Media">Media</option>'+
          '<option value ="Media-Alta">Media-Alta</option>'+
          '<option value = "Alta">Alta</option>'+
          '<option value = "Muy Alta">Muy Alta</option>'+
          '</select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Peligrosidad";
        var informacion = dom.byId("informacion");
        informacion.value = "Peligrosidad";
      },

      onClick_Material: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select name="material" id = "material" class="form-control selectpicker">'+
        '<option value="" >Selecciona un tipo de material</option>'+
        '<option value= "Ladrillo con efecto diafragma">Ladrillo con efecto diafragma</option>'+
        '<option value= "Ladrillo sin efecto diafragma">Ladrillo sin efecto diafragma</option>'+
        '<option value= "Mamposteria">Mampostería</option>'+
        '<option value= "Porticos de Hormigon Armado CON diseño sismorresistente">Porticos de Hormigon Armado con diseño sismorresistente</option>'+
        '<option value= "Porticos de Hormigon Armado SIN diseño sismorresistente">Porticos de Hormigon Armado sin diseño sismorresistente</option>'+
        '</select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Tipo de Material";
        var informacion = dom.byId("informacion");
        informacion.value = "Tipo Material";
      },

      onClick_Pisos: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<input name="pisos" id="pisos" class="form-control" type="number" onkeydown="return false" min="1" max="14" value="1">';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Número de pisos";
        var informacion = dom.byId("informacion");
        informacion.value = "Número de pisos";
      },

      onClick_Mercado: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<input name="valor" id="mercado" placeholder="Introduce un valor" class="form-control" type="text">';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Valor de Mercado";
        var informacion = dom.byId("informacion");
        informacion.value = "Valor de Mercado";
      },

      onClick_Deductible: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select name="deductible" id = "deductible" class="form-control selectpicker">'+
        '<option value="" >Selecciona un porcentaje</option>'+
        '<option value = "5%">5%</option>'+
        '<option value = "10%">10%</option>'+
        '<option value = "15%">15%</option>'+
        '<option value = "20%">20%</option>'+
        '<option value = "25%">25%</option></select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Deductible";
        var informacion = dom.byId("informacion");
        informacion.value = "Deductible";
      },

      onClick_Objetos: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<div class="radio-inline">'+
        '<label><input type="radio" name="objetos" id="objetos" value="true" /> Si</label>'+
        '</div>'+
        '<div class="radio-inline">'+
        '<label><input type="radio" name="objetos" id ="objetos1" value="false" /> No</label>'+
        '</div>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Cobertura de Objetos";
        var informacion = dom.byId("informacion");
        informacion.value = "Cobertura de Objetos";
      },

      onClick_Personales: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var valores = dom.byId("valores");
        valores.innerHTML='<label class="col-md-6 control-label">Valor de la cobertura: </label>'+
        '<div class="col-md-6 inputGroupContainer">'+'<div class="input-group" id="valores2"></div>'+
        '</div>';
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<div class="radio-inline">'+
        '<label><input type="radio" name="bienes" id="bienes" value="true" /> Si</label>'+
        '</div>'+
        '<div class="radio-inline">'+
        '<label><input type="radio" name="bienes" id="bienes1" value="false" /> No</label>'+
        '</div>';
        var valores2 = dom.byId("valores2");
        valores2.innerHTML = '<select name="personales" class="form-control selectpicker" id="coberturebienes">'+
        '<option value="" >Selecciona un valor</option>'+
        '<option value="5000">5.000€</option>'+
        '<option value="10000">10.000€</option>'+
        '<option value="15000">15.000€</option>'+
        '<option value="20000">20.000€</option>'+
        '<option value="25000">25.000€</option></select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Cobertura de bienes personales";
        var informacion = dom.byId("informacion");
        informacion.value = "Cobertura de bienes personales";
      },

      onClick_Temporal: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var valores = dom.byId("valores");
        valores.innerHTML='<label class="col-md-6 control-label">Valor de la cobertura: </label>'+
        '<div class="col-md-6 inputGroupContainer">'+'<div class="input-group" id="valores2"></div>'+
        '</div>';
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<div class="radio-inline">'+
        '<label><input type="radio" name="inhabitabilidad" id ="temporal" value="true" /> Si</label>'+
        '</div>'+
        '<div class="radio-inline">'+
        '<label><input type="radio" name="inhabitabilidad" id ="temporal1" value="false" /> No</label>'+
        '</div>';
        var valores2 = dom.byId("valores2");
        valores2.innerHTML = '<select name="personales" class="form-control selectpicker" id="coberturebienes">'+
        '<option value="" >Selecciona un valor</option>'+
        '<option value="1000">1.000€</option>'+
        '<option value="5000">5.000€</option>'+
        '<option value="10000">10.000€</option>'+
        '<option value="20000">20.000€</option></select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Cobertura por inhabitabilidad temporal";
        var informacion = dom.byId("informacion");
        informacion.value = "Cobertura por inhabitabilidad temporal";
      },

      onClick_Cliente: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        domUtils.show(dom.byId('predeterminado'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<div class="radio-inline">'+
        '<label><input type="radio" name="cliente" id = "cliente" value="true" /> Si</label>'+
        '</div>'+
        '<div class="radio-inline">'+
        '<label><input type="radio" name="cliente" id="cliente1" value="false" /> No</label>'+
        '</div>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Cliente";
        var informacion = dom.byId("informacion");
        informacion.value = "Cliente";
      },

      onClick_Salida: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Edificios";
        var informacion = dom.byId("informacion");
        informacion.value = "Edificios";
        domUtils.hide(dom.byId('predeterminado'));
      },

      // Al abrir la configuración del widget
      setConfig: function() {

      },

      // Al cerrar la configuración del widget
      getConfig: function() {

      }

    });
  });
