limpiarCamposEntropia();
limpiarCamposEntalpia();
limpiarCamposGases();
limpiarCamposGibbs();
imagenFix();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});

$('#listaFormulas').change(function() {
    cambiarCampos();
});

$(document).on('click', '#btnCalcularEntropia', function () {
    calcularEntropia();
});
$(document).on('click', '#btnLimpiarEntropia', function () {
    limpiarCamposEntropia();
});
$(document).on('click', '#btnCalcularEntalpia', function () {
    calcularEntalpia();
});
$(document).on('click', '#btnLimpiarEntalpia', function () {
   limpiarCamposEntalpia();
});
$(document).on('click', '#btnCalcularGases', function () {
    calcularGases();
});
$(document).on('click', '#btnLimpiarGases', function () {
   limpiarCamposGases();
});
$(document).on('click', '#btnCalcularGibbs', function () {
    calcularGibbs();
});
$(document).on('click', '#btnLimpiarGibbs', function () {
   limpiarCamposGibbs();
});

function calcularEntropia(){
    let varE=getById("variacionEntropia");
    let energiaCal=getById("energiaCal");
    let gradosKelvin=getById("gradosKelvin");

        if(varE==""){
            if(!isNaN(energiaCal) && !isNaN(gradosKelvin) && energiaCal!="" && gradosKelvin!=""){
                let resultado=energiaCal/gradosKelvin;
                document.getElementById("resultado").value = parseFloat(resultado.toFixed(5));
            }else{
                $("#mi-modal-del").modal('show');
                $("#modal-del-btn-cerrar").on("click", function () {
                $("#mi-modal-del").modal('hide');
                });
            }
        }else if(energiaCal==""){
            if(!isNaN(varE) && !isNaN(gradosKelvin) && varE!="" && gradosKelvin!=""){
                //Calculo energia caloririfica
                let resultado=varE*gradosKelvin;
                document.getElementById("resultado").value = parseFloat(resultado.toFixed(5));
            }else{
                $("#mi-modal-del").modal('show');
                $("#modal-del-btn-cerrar").on("click", function () {
                $("#mi-modal-del").modal('hide');
                });
            }
        }else if(gradosKelvin==""){
            if(!isNaN(varE) && !isNaN(energiaCal) && varE!="" && energiaCal!=""){
                //Calcular temperatura
                let resultado=energiaCal/varE;
                document.getElementById("resultado").value = parseFloat(resultado.toFixed(5));
            }else{
                $("#mi-modal-del").modal('show');
                $("#modal-del-btn-cerrar").on("click", function () {
                $("#mi-modal-del").modal('hide');
                });
            }
        }
        /*
            $("#mi-modal-camposVacios").modal('show');
            $("#modal-del-btn-close").on("click", function () {
                $("#mi-modal-camposVacios").modal('hide');
            });
        */
    
}

function calcularEntalpia(){
    let res="";
    let entalpia=getById("txtEntalpia");
    let energiaInterna=getById("txtEnergiaInterna");
    let presion=getById("txtPresion");
    let volumen=getById("txtVolumen");
  
    if(entalpia==""){
        if(!isNaN(energiaInterna) && !isNaN(presion) && !isNaN(volumen) && energiaInterna!="" && presion!="" && volumen!=""){
            res=parseFloat(energiaInterna)+presion*volumen;
            document.getElementById("resultadoEntalpia").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(energiaInterna==""){
        if(!isNaN(entalpia) && !isNaN(presion) && !isNaN(volumen) && entalpia!="" && presion!="" && volumen!=""){
            //Calculo energia interna
            res=entalpia-presion*volumen;
            document.getElementById("resultadoEntalpia").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(presion==""){
        if(!isNaN(entalpia) && !isNaN(energiaInterna) && !isNaN(volumen) && entalpia!="" && energiaInterna!="" && volumen!=""){
            //Calculo presion
            res=(entalpia-energiaInterna)/volumen;
            document.getElementById("resultadoEntalpia").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(volumen==""){
        if(!isNaN(entalpia) && !isNaN(energiaInterna) && !isNaN(presion) && entalpia!="" && energiaInterna!="" && presion!=""){
            //Calculo presion
            res=(entalpia-energiaInterna)/presion;
            document.getElementById("resultadoEntalpia").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }
}

function calcularGases(){
    let res="";
    let presion=getById("txtPresionG");
    let volumen=getById("txtVolumenG");
    let sustancia=getById("txtCantidadSustancia");
    let constanteGases=getById("txtConstanteG");
    let temperatura=getById("txtTemperaturaG");
    //FORMULA 2
    let masaMol=getById("txtMasaMolecular");
    let masa=getById("txtMasa");
    var formula = document.getElementById("listaFormulas").value;
    var seleccionCalcular = document.getElementById("listaConceptos").value;
    if(formula==1){
        switch(seleccionCalcular){
            case '1':
                if(!isNaN(sustancia) && !isNaN(constanteGases) && !isNaN(temperatura) && !isNaN(volumen)
                && sustancia!="" && constanteGases!="" && temperatura!="" && volumen!=""){
                    res=(sustancia*constanteGases*temperatura)/volumen;
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" atm";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '2':
                if(!isNaN(sustancia) && !isNaN(constanteGases) && !isNaN(temperatura) && !isNaN(presion)
                && sustancia!="" && constanteGases!="" && temperatura!="" && presion!=""){
                    res=(sustancia*constanteGases*temperatura)/presion;
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" L";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '3':
                if(!isNaN(sustancia) && !isNaN(constanteGases) && !isNaN(volumen) && !isNaN(presion)
                && sustancia!="" && constanteGases!="" && volumen!="" && presion!=""){
                    res=(presion*volumen)/(sustancia*constanteGases);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" °K";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '4':
                if(!isNaN(temperatura) && !isNaN(constanteGases) && !isNaN(volumen) && !isNaN(presion)
                && temperatura!="" && constanteGases!="" && volumen!="" && presion!=""){
                    res=(presion*volumen)/(temperatura*constanteGases);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5)) +" mol";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '5':
            break;
        }
    }else{
        switch(seleccionCalcular){
            case '1':
                if(!isNaN(masa) && !isNaN(constanteGases) && !isNaN(temperatura) && !isNaN(volumen) && !isNaN(masaMol)
                && masa!="" && constanteGases!="" && temperatura!="" && volumen!="" && masaMol!=""){
                    res=(masa*constanteGases*temperatura)/(volumen*masaMol);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5)) +" atm";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '2':
                if(!isNaN(masa) && !isNaN(constanteGases) && !isNaN(temperatura) && !isNaN(presion) && !isNaN(masaMol)
                && masa!="" && constanteGases!="" && temperatura!="" && presion!="" && masaMol!=""){
                    res=(masa*constanteGases*temperatura)/(presion*masaMol);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" L";
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '3':
                if(!isNaN(masa) && !isNaN(constanteGases) && !isNaN(volumen) && !isNaN(presion) && !isNaN(masaMol)
                && masa!="" && constanteGases!="" && volumen!="" && presion!="" && masaMol!=""){
                    res=(presion*volumen*masaMol)/(masa*constanteGases);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" °K";
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case '5':
                if(!isNaN(temperatura) && !isNaN(constanteGases) && !isNaN(volumen) && !isNaN(presion) && !isNaN(masaMol)
                && temperatura!="" && constanteGases!="" && volumen!="" && presion!="" && masaMol!=""){
                    res=(presion*volumen*masaMol)/(temperatura*constanteGases);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5))+" g";
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
            case 6:
                //PESO MOLECULAR, NO LO USO PERO SIRVE 
                if(!isNaN(masa) && !isNaN(constanteGases) && !isNaN(temperatura) && !isNaN(volumen) && !isNaN(presion)
                && masa!="" && constanteGases!="" && temperatura!="" && volumen!="" && presion!=""){
                    res=(masa*constanteGases*temperatura)/(volumen*presion);
                    document.getElementById("resultadoGases").value = parseFloat(res.toFixed(5)) +" atm";
                    //atm 
                }else{
                    $("#mi-modal-del").modal('show');
                    $("#modal-del-btn-cerrar").on("click", function () {
                    $("#mi-modal-del").modal('hide');
                    }); 
                }
            break;
        }
    }
 
}

function calcularGibbs(){
    let res=0;
    let energiaGibbs=getById("txtEnergiaGibbs");
    let entalpia=getById("txtCambioEntalpia");
    let temperatura=getById("txtTemperaturaGibbs");
    let entropia=getById("txtCambioEntropia");
    //document.getElementById("resultadoGibbs").value = parseFloat(resultado.toFixed(5));
    if(energiaGibbs==""){
        
        if(!isNaN(entalpia) && !isNaN(temperatura) && !isNaN(entropia) && entalpia!="" && temperatura!="" && entropia!=""){
            res=entalpia-temperatura*(entropia/1000);
            document.getElementById("resultadoGibbs").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(entalpia==""){
        if(!isNaN(energiaGibbs) && !isNaN(temperatura) && !isNaN(entropia) && energiaGibbs!="" && temperatura!="" && entropia!=""){
            res=parseFloat(energiaGibbs)+temperatura*(entropia/1000);
            document.getElementById("resultadoGibbs").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(temperatura==""){
        if(!isNaN(energiaGibbs) && !isNaN(entalpia) && !isNaN(entropia) && energiaGibbs!="" && entalpia!="" && entropia!=""){
            res=((energiaGibbs-entalpia)/(entropia/1000))*(-1);
            document.getElementById("resultadoGibbs").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }else if(entropia==""){
        if(!isNaN(energiaGibbs) && !isNaN(entalpia) && !isNaN(temperatura) && energiaGibbs!="" && entalpia!="" && temperatura!=""){
            res=(energiaGibbs-entalpia)/temperatura;
            res=res*1000*-1;
            document.getElementById("resultadoGibbs").value = parseFloat(res.toFixed(5));
        }else{
            $("#mi-modal-del").modal('show');
            $("#modal-del-btn-cerrar").on("click", function () {
            $("#mi-modal-del").modal('hide');
            });
        }
    }     
}

function cambiarCampos(){
    var seleccionFor = document.getElementById("listaFormulas").value;
    if(seleccionFor==2){
        var campo1 = document.getElementById("campo1");
        var campo2 = document.getElementById("campo2");
        var campo3 = document.getElementById("campo3");
        campo2.style.display = "block";
        campo3.style.display = "block";
        campo1.style.display = "none";
    }else{
        var campo1 = document.getElementById("campo1");
        var campo2 = document.getElementById("campo2");
        var campo3 = document.getElementById("campo3");
        campo2.style.display = "none";
        campo3.style.display = "none";
        campo1.style.display = "block";
    }
}

function limpiarCamposEntropia(){
    inputsTask("variacionEntropia","");
    inputsTask("energiaCal","");
    inputsTask("gradosKelvin","");
    inputsTask("resultado","");
}

function limpiarCamposEntalpia(){
    inputsTask("txtEntalpia","");
    inputsTask("txtEnergiaInterna","");
    inputsTask("txtPresion","");
    inputsTask("txtVolumen","");
    inputsTask("resultadoEntalpia","");
}

function limpiarCamposGibbs(){
    inputsTask("txtEnergiaGibbs","");
    inputsTask("txtCambioEntalpia","");
    inputsTask("txtTemperaturaGibbs","");
    inputsTask("txtCambioEntropia","");
    inputsTask("resultadoGibbs","");
}

function limpiarCamposGases(){
    inputsTask("txtPresionG","");
    inputsTask("txtVolumenG","");
    inputsTask("txtCantidadSustancia","");
    inputsTask("txtConstanteG","0.082");
    inputsTask("txtTemperaturaG","");
    inputsTask("txtMasaMolecular","");
    inputsTask("txtMasa","");
    inputsTask("resultadoGases","");
}

function modalCal(){
    $("#mi-modal-calculadora").modal('show');
    $("#modal-del-btn-cerrar-cal").on("click", function () {
    $("#mi-modal-calculadora").modal('hide');
    });
}

//metodo para obtner los datos de los componentes
function getById(id) {
    return document.getElementById(id).value;
}

//Metodo para limpiar los campos
function inputsTask(id, res) {
    return document.getElementById(id).value = res;
}

//AJUSTAR imagen
function imagenFix(){
    var img = document.getElementById('nav-tabContent').firstChild;
    img.onload = function() {
        if(img.height > img.width) {
            img.height = '100%';
            img.width = 'auto';
        }
    };
}