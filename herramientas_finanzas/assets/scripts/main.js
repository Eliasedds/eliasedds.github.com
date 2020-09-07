// DOM
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
})*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
	td.addEventListener('click', function(){
		console.log(this);
	});
});

let links = document.querySelectorAll(".close");

links.forEach(function(link){

	// Agregar un  evento click a cada uno de ellos
	link.addEventListener("click",function(ev){
		ev.preventDefault();
		let content = document.querySelector('.content');

		//Quitarle las clases de animación que ya tiene
		content.classList.remove("animate__zoomIn");
		content.classList.remove("animate__animated");

		// Agregar clases para animar salida
		content.classList.add("animate__fadeOutUp");
		content.classList.add("animate__animated");

		setTimeout(function(){
			location.href = "/";
		},600);

		return false;
	});
});

let iconos = document.querySelectorAll("i");

/*iconos.forEach(function(icono){
	icono.classList.remove("fa-chart-bar");
})*/