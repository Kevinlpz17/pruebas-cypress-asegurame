const destinosDeViaje = [
    "Estados Unidos",
    "Canadá",
    "Honduras",
    "Guatemala",
    "Nicaragua",
    "Belice",
    "Costa Rica"
  ]
  
  
  let randDestinos = Math.floor(Math.random() * destinosDeViaje.length);
  const destinosRandom = destinosDeViaje[randDestinos];



  export {
    destinosRandom
  }