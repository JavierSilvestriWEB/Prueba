
//===================================================SECCION AULAS===============================================


function mostrar(x){
    if(x == 'anfi'){
        document.getElementById('botones').style.display="none";
        document.getElementById('anfiteatro').style.display="block";
        document.getElementById('bloqueI').style.display="none";
        document.getElementById('bloqueII').style.display="none";
        document.getElementById('bloqueIV').style.display="none";
        document.getElementById('cu').style.display="none";
        document.getElementById('cyp').style.display="none";
    }else if(x == 'b1'){
        document.getElementById('botones').style.display="none";
        document.getElementById('anfiteatro').style.display="none";
        document.getElementById('bloqueI').style.display="block";
        document.getElementById('bloqueII').style.display="none";
        document.getElementById('bloqueIV').style.display="none";
        document.getElementById('cu').style.display="none";
        document.getElementById('cyp').style.display="none";
    }else if(x == 'b2'){
        document.getElementById('botones').style.display="none";
        document.getElementById('anfiteatro').style.display="none";
        document.getElementById('bloqueI').style.display="none";
        document.getElementById('bloqueII').style.display="block";
        document.getElementById('bloqueIV').style.display="none";
        document.getElementById('cu').style.display="none";
        document.getElementById('cyp').style.display="none";
    }else if(x == 'b4'){

    }else if(x == 'cu'){

    }else if(x == 'cyp'){

    }
}
function volver(){
    document.getElementById('botones').style.display="block";
    document.getElementById('anfiteatro').style.display="none";
    document.getElementById('bloqueI').style.display="none";
    document.getElementById('bloqueII').style.display="none";
    document.getElementById('bloqueIV').style.display="none";
    document.getElementById('cu').style.display="none";
    document.getElementById('cyp').style.display="none";
}

//===================================================SECCION HORARIOS===============================================

function horarioMateria(x){
    if(x == 'calcI'){
        document.getElementById('calculoI').style.display="block";
        document.getElementById('algebraI').style.display="none";
        document.getElementById('introMineria').style.display="none";
        document.getElementById('fundInformatica').style.display="none";
    }else if(x == 'introM'){
        document.getElementById('calculoI').style.display="none";
        document.getElementById('algebraI').style.display="none";
        document.getElementById('introMineria').style.display="block";
        document.getElementById('fundInformatica').style.display="none";
    }else if(x == 'fundI'){
        document.getElementById('calculoI').style.display="none";
        document.getElementById('algebraI').style.display="none";
        document.getElementById('introMineria').style.display="none";
        document.getElementById('fundInformatica').style.display="block";
    }else if(x == 'algeI'){
        document.getElementById('calculoI').style.display="none";
        document.getElementById('algebraI').style.display="block";
        document.getElementById('introMineria').style.display="none";
        document.getElementById('fundInformatica').style.display="none";
    }
}



//================================================FORMULARIO DEL CONTACTO======================================================


function controlDA(x){
    if(x == 'docentes'){
        document.getElementById('controlDoceAlumn').style.display="none";
        document.getElementById('f2').style.display="block";
        document.getElementById('formDocentes').style.display="block";
        document.getElementById('f1').style.display="none";
        document.getElementById('formAlumnos').style.display="none";
    }else if(x == 'alumnos'){
        document.getElementById('controlDoceAlumn').style.display="none";
        document.getElementById('f2').style.display="none";
        document.getElementById('formDocentes').style.display="none";
        document.getElementById('f1').style.display="block";
        document.getElementById('formAlumnos').style.display="block";   
    }else if(x == 'reservaAula'){
        document.getElementById('controlDoceAlumn').style.display="none";
        document.getElementById('f2').style.display="none";
        document.getElementById('formDocentes').style.display="none";
        document.getElementById('f1').style.display="none";
        document.getElementById('formAlumnos').style.display="none";
        document.getElementById('f3').style.display="block";
        document.getElementById('reservasAula').style.display="block";

    }
}

function validacion(correo, nombre, texto, form){
    var error1;
    var error2;
    var error3;
    
    if(nombre == ""){
        error1 = true;
    }else{
        error1 = false;
    }

    if(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(correo)){
        error2 = false;
    }else{
        error2 = true;
    }
    
    if(texto == ""){
        error3 = true;
    }else{
        error3 = false;
    }

    if(error1 == true){
        alert('El nombre es incorrecto');
    }
    if(error2 == true){
        alert('El e-mail es incorrecto');
    }
    if(error3 == true){
        alert('No realizo la consulta...');
    }
    if(error1 == false && error2 == false){
        if(form == 'f1'){
            document.f1.submit();
        }else{
            document.f2.submit();
        }
    }
}

/*==================================================================RESERVA AULA=====================================*/

function validacionReserva(m, c,  a, nC, cE, h){
    var errorMateria;
    var errorCorreo;
    var errorAnio;
    var errorNCarrera;
    var errorCEstudiantes;
    var errorHora;

    
    if(m == ""){
        errorMateria = true;
    }else{
        errorMateria = false;
    }

    if(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(c)){
        errorCorreo = false;
    }else{
        errorCorreo = true;
    }
    
    if(a > 5 || a < 1){
        errorAnio = true;
    }else{
        errorAnio = false;
    }

    if(nC == ''){
        errorNCarrera = true;
    }else{
        errorNCarrera = false;
    }

    if(cE < 1 || cE > 90){
        errorCEstudiantes = true;
    }else{
        errorCEstudiantes = false;
    }

    if(h <8 || h > 20){
        errorHora = true;
    }else{
        errorHora = false;
    }

    if(errorMateria == true){
        alert('Campo Nombre Materia Incorrecto');
    }
    if(errorCorreo == true){
        alert('Campo Correo Incorrecto');
    }
    if(errorAnio == true){
        alert('Campo Año Incorrecto');
    }
    if(errorNCarrera == true){
        alert('Campo Nombre Carrera Incorrecto');
    }
    if(errorCEstudiantes == true){
        alert('Campo Cantidad Estudiantes Incorrecto');
    }
    if(errorHora == true){
        alert('Campo Hora Incorrecto');
    }

    if(errorMateria == false && errorCorreo == false && errorAnio == false && errorNCarrera == false && errorCEstudiantes == false && errorHora == false){
        document.f3.submit();
    }
}
