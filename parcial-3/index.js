var Concesionario = [
    {carro: "Toyota", modelo: "Corolla Cross", carrocería: "SUV", transmisión: "Automatica", combustible: "Gasolina"},
    {carro: "Chevrolet", modelo: "Equinox", carrocería: "Camioneta", transmisión: "Automatica", combustible: "Gasolina"},
    {carro: "Toyota", modelo: "Corolla HEV", carrocería: "SUV", transmisión: "Automatica", combustible: "Electrico"},
    {carro: "Chevrolet", modelo: "SUV", carrocería: "SUV", transmisión: "Manual", combustible: "Gasolina"},
];

Concesionario.forEach(function(Concesionario) {
    console.log("carro: " + Concesionario.carro);
    console.log("modelo: " + Concesionario.modelo);
    console.log("carrocería: " + Concesionario.carrocería);
    console.log("transmisión: " + Concesionario.transmisión);
    console.log("combustible: " + Concesionario.combustible);
});