//Se define la varibale para saber la posición del array
var posicion = 1; 
var ultimaFoto = 1; 
var fotoSinMarco = 1; 

window.onload = function() { //tras cargar la página ...
	ultimaFoto = document.images.length - 1; 
	mititulo=document.getElementById("titulo"); //referencia al pie de foto
}

function fotoPais(pais, numFoto) { //cambiar la imagen
	posicion = numFoto; 
	document.images["moneda" + fotoSinMarco].style='border: 0px solid #000000;'; 
	imagen = "../../imagenes/MonedasPais/" + pais + "/" + pais + numFoto + ".jpg"; //ruta de la nueva imagen
    	document.images["fotoVisor"].src = imagen; //cambiar imagen
/*	document.images["fotoVisor"].style='border: 1px solid #2B535D;'; */
	document.images["moneda" + numFoto].style='border: 1px solid #2B535D;'; 
    	texto = document.images["moneda" + numFoto].alt; //texto de pie de foto
    	mititulo.innerHTML = texto; //cambiar pie de foto
	fotoSinMarco = numFoto;
}

function anteriorFoto(pais) {
	if (posicion == 1) { posicion = ultimaFoto; } 
	else { --posicion; }
	fotoPais(pais, posicion);
}

function siguienteFoto(pais) {
	if (posicion == ultimaFoto) { posicion = 1; } 
	else { ++posicion; } 
	fotoPais(pais, posicion);
}

function fotoAnno(anno, numFoto) { //cambiar la imagen
	posicion = numFoto; 
	document.images["anno" + fotoSinMarco].style='border: 0px solid #000000;'; 
	imagen = "../../imagenes/MonedasAnno/" + anno + "/" + anno + numFoto + ".jpg"; //ruta de la nueva imagen
    	document.images["fotoVisor"].src = imagen; //cambiar imagen
/*	document.images["fotoVisor"].style='border: 1px solid #2B535D;'; */
	document.images["anno" + numFoto].style='border: 1px solid #2B535D;'; 
    	texto = document.images["anno" + numFoto].alt; //texto de pie de foto
    	mititulo.innerHTML = texto; //cambiar pie de foto
	fotoSinMarco = numFoto;
}

function anteriorAnno(anno) {
	if (posicion == 1) { posicion = ultimaFoto; } 
	else { --posicion; }
	fotoAnno(anno, posicion);
}

function siguienteAnno(anno) {
	if (posicion == ultimaFoto) { posicion = 1; } 
	else { ++posicion; } 
	fotoAnno(anno, posicion);
}
