$(document).ready(function() {
  $("#seguro_form").bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          poliza: {
            validators: {
                notEmpty: {
                    message: 'Por favor selecciona un año'
                }
            }
          },
           edificio: {
             validators: {
                 notEmpty: {
                     message: 'Por favor elige un tipo de edificio'
                 }
             }
           },
           anio: {
               validators: {
                   notEmpty: {
                       message: 'Por favor introduce un año'
                   },
                   between: {
                        min: 1800,
                        max: 2014,
                        message: 'El año de construcción debe estar comprendido entre el año 1800 y el 2014'
                    },
                    stringLength: {
                       max: 4,
                   },
               }
           },
           superficie: {
               validators: {
                   notEmpty: {
                       message: 'Por favor introduce los m2 de la vivienda'
                   },
                   between: {
                        min: 21,
                        max:500,
                        message: 'El superficie de la vivienda ndebe estar entre los 21 y los 500 m2'
                    },
                    stringLength: {
                       max: 4,
                       message: 'Introduce un valor numérico entero'
                   },
               }
           },
          peligrosidad: {
            validators: {
                notEmpty: {
                    message: 'Por favor elige un tipo de peligrosidad'
                }
            }
          },

          material: {
              validators: {
                  notEmpty: {
                      message: 'Por favor introduce un tipo de material'
                  }
              }
          },

          pisos: {
              validators: {
                  notEmpty: {
                      message: 'Por favor introduce un valor'
                  },
                  stringLength: {
                     max: 2,
                 },
                 between: {
                      min: 1,
                      max:14,
                      message: 'El número mayor de pisos en Lorca es de 14 '
                  },
              }
          },

          valor: {
              validators: {
                  notEmpty: {
                      message: 'Por favor introduce un valor'
                  },
                  stringLength: {
                     max: 6,
                     message: "Por favor introduce un valor de 6 cifras"
                 }
              }
          },

          deductible: {
              validators: {
                  notEmpty: {
                      message: 'Por favor introduce un valor'
                  },
              }
          },

          objetos: {
              validators: {

                  notEmpty: {
                      message: 'Por favor seleccion una opción'
                  }

              }
          },

          bienes:{
            validators:{
              callback: {
                callback: function(value, validator, $field) {
                  //Obtenemos todos los radio buttons cuyo atributo name sea bienes
                  //Esta consulta en jquery te los ordena por orden de apariencia en
                  //el html, por tanto, en la posicion 0 esta el si y en el 1 el no
                  //pero pese ha eso ciertos navegadores a veces lo hacen de forma
                  //arbitraria por lo que es preferible comprobarlo.
                  var radioButtons= $('input[name=bienes]');
                  if(radioButtons[0].value==="si"){
                    if(radioButtons[0].checked)
                    document.getElementById("coberturebienes").removeAttribute('disabled');

                  }
                  if(radioButtons[1].value==="no"){
                    if(radioButtons[1].checked){
                    document.getElementById("coberturebienes").setAttribute('disabled', '');
                    $("#coberturebienes").val('0');
                   }
                  }
                    return true;
                }
              },
              notEmpty: {
                  message: 'Por favor seleccion una opción'
              }

            }
          },

          personales: {
              validators: {

                  notEmpty: {
                      message: 'Por favor introduce un valor'
                  },

              }
          },

          inhabitabilidad:{
            validators:{
              callback: {
                callback: function(value, validator, $field) {
                  //Obtenemos todos los radio buttons cuyo atributo name sea bienes
                  //Esta consulta en jquery te los ordena por orden de apariencia en
                  //el html, por tanto, en la posicion 0 esta el si y en el 1 el no
                  //pero pese ha eso ciertos navegadores a veces lo hacen de forma
                  //arbitraria por lo que es preferible comprobarlo.
                  var radioButtons= $('input[name=inhabitabilidad]');
                  if(radioButtons[0].value==="si"){
                    if(radioButtons[0].checked)
                    document.getElementById("coberturetemporal").removeAttribute('disabled');

                  }
                  if(radioButtons[1].value==="no"){
                    if(radioButtons[1].checked)
                    document.getElementById("coberturetemporal").setAttribute('disabled', '');
                    $("#coberturetemporal").val('0');
                  }
                    return true;
                }
              },
              notEmpty: {
                  message: 'Por favor seleccion una opción'
              }

            }
          },

          temporal: {
              validators: {

                  notEmpty: {
                      message: 'Por favor seleccion una opción'
                  }

              }
          },

          cliente:{
            validators:{
              callback: {
                callback: function(value, validator, $field) {
                  //Obtenemos todos los radio buttons cuyo atributo name sea bienes
                  //Esta consulta en jquery te los ordena por orden de apariencia en
                  //el html, por tanto, en la posicion 0 esta el si y en el 1 el no
                  //pero pese ha eso ciertos navegadores a veces lo hacen de forma
                  //arbitraria por lo que es preferible comprobarlo.
                  var radioButtons= $('input[name=cliente]');
                  if(radioButtons[0].value==="si"){
                    if(radioButtons[0].checked){
                    //Habilitamos
                    document.getElementById("insurance1").removeAttribute('disabled');
                    document.getElementById("insurance2").removeAttribute('disabled');
                    document.getElementById("insurance3").removeAttribute('disabled');
                  }
                }
                  if(radioButtons[1].value==="no"){
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
                    return true;
                }
              }
            }
          },
        }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#seguro_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

          // Use Ajax to submit form data
          $.post($form.attr('action'), $form.serialize(), function(result) {
              console.log(result);
          }, 'json');
      });
});
