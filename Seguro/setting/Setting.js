

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

      onClick_Anio: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select class="form-control selectpicker" >' +
        '<option>Selecciona un año</option>' + '<option>2015</option>' + '<option>2016</option>' +
        '<option>2017</option>' + '</select>';
      },

      onClick_Edificio: function() {
        domUtils.hide(dom.byId('descripcion'));
        domUtils.show(dom.byId('parametros'));
        var contenido = dom.byId("contenido");
        contenido.innerHTML = '<select class="form-control selectpicker" >' +
        '<option>Selecciona un tipo de edificio</option>' + '<option>Piso o Apartamento</option>' +
        '<option>Vivienda Unifamiliar</option>' + '</select>';
        var etiqueta = dom.byId("etiqueta");
        etiqueta.value = "Tipo de Edificio";
        var informacion = dom.byId("informacion");
        informacion.value = "Tipo de Edificio";
      },

              /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        myFunction: function() {
            document.getElementById("myDropdown").classList.toggle("show");
        },



      // Al abrir la configuración del widget
      setConfig: function() {

      },

      // Al cerrar la configuración del widget
      getConfig: function() {

      }

    });
  });
