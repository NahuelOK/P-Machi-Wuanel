function ingresarForm(){
    window.location.href = "./AgregarE.html"
}

function agregarJugador(){
  const jugadores = []

  let nombreJ = document.getElementById("nombreJ").value
  let DNI = document.getElementById("DNI").value
  let dorsal = document.getElementById("dorsal").value

  let newJugador = 
  {
    nombreJ,
    DNI,
    dorsal,
  }

  jugadores.push(newJugador)
  console.log(jugadores)
}

function agregarCuerpoTecnico(){
  const CT = []

  let nombreCT = document.getElementById("nombreJ").value
  let ROL = document.getElementById("ROL").value

  let newCT = 
  {
    nombreCT,
    ROL
  }

  CT.push(newCT)
  console.log(CT)
}

function agregarEquipo(){
  const equipo = []

  let nombre = document.getElementById("nombre").value
  let localidad = document.getElementById("localidad").value

  let newEquipo = 
  {
    nombre,
    localidad
  }

  equipo.push(newEquipo)
  console.log(equipo)
}

function agregarParticipante(){
  const equipos = []

  
}