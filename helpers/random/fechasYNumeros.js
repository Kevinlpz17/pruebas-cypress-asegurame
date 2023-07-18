//---------------------------------------------------------------------------------------------
//Datos aleatorios para fechas
//---------------------------------------------------------------------------------------------

//Fechas
const fecha = new Date(); //Mon Oct 24 2022 10:07:47 GMT-0600 (hora estándar central)
const horaActual = fecha.getHours() + ":" + fecha.getMinutes();

const anioActual = fecha.getFullYear(); //2022

const hoy = fecha.getDate(); //24 (dia de hoy)

let mesActual = fecha.toLocaleString("es-es", { month: "long" });
mesActual = mesActual[0].toUpperCase() + mesActual.substring(1); //Octubre

const fecha2 = new Date();
let mesActual2 = fecha2.getMonth() + 1;

//Generar mes en espanol
const meses = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
const mesRandom = meses[Math.floor(Math.random() * 12)];

//Generar mes en espanol
const meses2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const mesRandom2 = meses2[Math.floor(Math.random() * 12)];


const mesesConAbreviacion = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  'Dic'
]


let randIndiceMesAbr = Math.floor(Math.random() * mesesConAbreviacion.length);
const MesAbrRandom = mesesConAbreviacion[randIndiceMesAbr];


const mesesConNombre = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const mesRandomConNombre = mesesConNombre[mesRandom2];

const mesesConNombreIngles = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septiembre",
  "October",
  "November",
  "December",
];
const mesRandomConNombreIngles = mesesConNombreIngles[mesRandom2];

const dias = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const diasRandom = dias[Math.floor(Math.random() * 30)]; //Lo cambie a 30 porque no veo ningun validacion para revisar los meses de 30 o 31
//---------------------------------------------------------------------------------------------
//Datos aleatorios para numeros
//---------------------------------------------------------------------------------------------

//Genera un numero de dos cifras decimales aleatorio en un rango dado
const randomBeetwenDecimal = (num1, num2) => {
  let result = (Math.random() * num2).toFixed(2);
  while (result < num1) {
    result = (Math.random() * num2).toFixed(2);
  }
  return result;
};

import { faker } from "@faker-js/faker";

//Genera un numero entero aleatorio en un rango dado
const randomBeetwenInteger = (num1, num2) => {
  let result = Math.floor(Math.random() * num2);
  while (result < num1) {
    result = Math.floor(Math.random() * num2);
  }
  return result;
};

const boolean = [
  0,
  1
];
const randomBooleanNumber = boolean[Math.floor(Math.random() * boolean.length)];

const identidades = faker.phone.number(
  `9999${randomBeetwenInteger(1920, 2023)}#####`
);


export {
  identidades,
  anioActual,
  hoy,
  horaActual,
  mesActual,
  mesActual2,
  MesAbrRandom,
  diasRandom,
  mesRandom,
  randomBeetwenDecimal,
  randomBeetwenInteger,
  mesRandomConNombre,
  mesRandom2,
  mesRandomConNombreIngles,
  randomBooleanNumber
};
