/*datos iniciales ejecicio en clases */

document.write('<p>Estadisticas del Centro Medico Ñuñoa, version 2</p>');

let radiologia = [
    { hora : '1100', especialista : 'Ignacio Schulz', nombre : 'Francisca Rojas', rut : '9878782-1', prevision : 'FONASA',},
    { hora : '1130', especialista : 'Federico Subercaseaux', nombre : 'Pamela Estrada', rut : '15345241-3', prevision : 'ISAPRE',},
    { hora : '1500', especialista : 'Fernando Wurthz', nombre : 'Armando Luna', rut : '16445345-9', prevision : 'ISAPRE',},
    { hora : '1530', especialista : 'Ana Maria Godoy', nombre : 'Manuel Godoy', rut : '17666419-0', prevision : 'FONASA',},
    { hora : '1600', especialista : 'Patricia Suazo', nombre : 'Ramon Ulloa', rut : '14989389-k', prevision : 'FONASA',},
]
let traumatologia = [
    { hora : '0800', especialista : 'Maria Paz Altuzarra', nombre : 'Paula Sanchez', rut : '1554774-5', prevision : 'FONASA',},
    { hora : '1000', especialista : 'Raul Araya', nombre : 'Angelica Navas', rut : '15444147-9', prevision : 'ISAPRE',},
    { hora : '1030', especialista : 'Maria Arriagada', nombre : 'Ana Klapp', rut : '17879423-9', prevision : 'ISAPRE',},
    { hora : '1100', especialista : 'Alejandro Badilla', nombre : 'Felipe Mardones', rut : '1547423-6', prevision : 'ISAPRE',},
    { hora : '1130', especialista : 'Cecilia Budnik', nombre : 'Diego Marre', rut : '16554741-k', prevision : 'FONASA',},
    { hora : '1200', especialista : 'Arturo Cavagnaro', nombre : 'Cecilia Medez', rut : '9747535-8', prevision : 'ISAPRE',},
    { hora : '1230', especialista : 'Andres Kanacri', nombre : 'Marcial Suazo', rut : '11254785-5', prevision : 'ISAPRE',},
]
let dental = [
    { hora : '0830', especialista : 'Andrea Zuñiga', nombre : 'Marcela Retamal', rut : '11123425-6', prevision : 'ISAPRE',},
    { hora : '1100', especialista : 'Maria Pia Zañartu', nombre : 'Angel Muñoz', rut : '9878789-2', prevision : 'ISAPRE',},
    { hora : '1130', especialista : 'Scarlett Witting', nombre : 'Mario Kast', rut : '7998789-5', prevision : 'FONASA',},
    { hora : '1300', especialista : 'Francisco Von Teuber', nombre : 'Karin Fernandez', rut : '18887662-k', prevision : 'FONASA',},
    { hora : '1330', especialista : 'Eduardo Viñuela', nombre : 'Hugo Sanchez', rut : '17665461-4', prevision : 'FONASA',},
    { hora : '1400', especialista : 'Raquel Villaseca', nombre : 'Ana Sepulveda', rut : '14441281-0', prevision : 'ISAPRE',},
]
let cmnunoa = [radiologia,traumatologia,dental]

/*desarrollo ejercicio 1*/
console.log(traumatologia);
traumatologia.push({hora : '0900', especialista : 'Rene Poblete', nombre : 'Ana Gellona', rut : '13123329-7', prevision : 'ISAPRE'});
traumatologia.push({hora : '0930', especialista : 'Maria Solar', nombre : 'Ramiro Andrade', rut : '12221451-k', prevision : 'FONASA'});
traumatologia.push({hora : '1000', especialista : 'Raul Loyola', nombre : 'Carmen Isla', rut : '10112348-3', prevision : 'ISAPRE'});
traumatologia.push({hora : '1030', especialista : 'Antonio Larenas', nombre : 'Pablo Loayza', rut : '13453234-1', prevision : 'ISAPRE'});
traumatologia.push({hora : '0900', especialista : 'Matias Aravena', nombre : 'Susana Poblete', rut : '14354646-6', prevision : 'FONASA'});
console.log(traumatologia)

/*desarrollo ejercicio 2*/
console.log(radiologia);
radiologia.pop();
radiologia.shift();
console.log(radiologia);

/*desarrollo ejercicio 3*/
document.write('<h2>3.- Listado de pacientes dentales</h2>');
document.write(`Paciente de las ${dental[0].hora} horas: ${dental[0].especialista} - ${dental[0].nombre} - ${dental[0].rut} - ${dental[0].prevision} <br>`);
document.write(`Paciente de las ${dental[1].hora} horas: ${dental[1].especialista} - ${dental[1].nombre} - ${dental[1].rut} - ${dental[1].prevision} <br>`);
document.write(`Paciente de las ${dental[2].hora} horas: ${dental[2].especialista} - ${dental[2].nombre} - ${dental[2].rut} - ${dental[2].prevision} <br>`);
document.write(`Paciente de las ${dental[3].hora} horas: ${dental[3].especialista} - ${dental[3].nombre} - ${dental[3].rut} - ${dental[3].prevision} <br>`);
document.write(`Paciente de las ${dental[4].hora} horas: ${dental[4].especialista} - ${dental[4].nombre} - ${dental[4].rut} - ${dental[4].prevision} <br>`);
document.write(`Paciente de las ${dental[5].hora} horas: ${dental[5].especialista} - ${dental[5].nombre} - ${dental[5].rut} - ${dental[5].prevision} <br>`);
document.write('<hr>')

/*desarrollo ejercicio 4*/
let nombres = [].concat(traumatologia, dental, radiologia)
console.log(nombres)


const inprint = nombres.filter(function(kapo0){
    return kapo0.nombre != ""
});  
console.log(inprint)


/*desarrollo ejercicio 5*/
let dentisapre = dental.filter(function(kapo1){
    return kapo1.prevision == 'ISAPRE' 
});
console.log(dentisapre)

document.write('<h2>5.- Listado de pacientes dentales por ISAPRE</h2>');
document.write(`Paciente ${dentisapre[0].nombre} - ${dentisapre[0].prevision}<br>`);
document.write(`Paciente ${dentisapre[1].nombre} - ${dentisapre[1].prevision}<br>`);
document.write(`Paciente ${dentisapre[2].nombre} - ${dentisapre[2].prevision}<br>`);
document.write('<hr>')

/*desarrollo ejercicio 6*/
let traumafonasa = traumatologia.filter(function(kapo2){
    return kapo2.prevision == 'FONASA' 
});
console.log(traumafonasa)

document.write('<h2>6.- Listado de pacientes traumatologicos por FONASA</h2>');
document.write(`Paciente ${traumafonasa[0].nombre} - ${traumafonasa[0].prevision}<br>`)
document.write(`Paciente ${traumafonasa[1].nombre} - ${traumafonasa[1].prevision}<br>`)
document.write(`Paciente ${traumafonasa[2].nombre} - ${traumafonasa[2].prevision}<br>`)
document.write(`Paciente ${traumafonasa[3].nombre} - ${traumafonasa[3].prevision}<br>`)
document.write('<hr>')

