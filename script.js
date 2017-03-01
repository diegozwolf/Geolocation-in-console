//selecciona elsvg d ela brujula
const arrow = document.querySelector('.arrow');
//busca el span para agregar la velocidad
const speed = document.querySelector('.speed-value');
//búsqueda de coordenadas
navigator.geolocation.watchPosition((data)=>{
	console.log(data);
	speed.textContent = data.coords.speed;
	arrow.style.transform = `rotate(${data.coords.heading}deg)`;
	}, (err) => {
		console.error(err);
		alert("Gps disabled");
});