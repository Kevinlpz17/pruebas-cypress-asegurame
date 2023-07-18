import { faker } from "@faker-js/faker";
import { randomBeetwenInteger } from "../../helpers/random/fechasYNumeros";

// const nombreEmail = faker.name.firstName() + faker.name.lastName(); 

const primerNombre = faker.name.firstName();
const primerApellido = faker.name.firstName();
const nombreEmail = primerNombre + primerApellido;

const seguroDeducible = {
    Placa: faker.phone.number("###-###"),
    Identificacion: faker.phone.number("999#"+randomBeetwenInteger(1970, 2023)+"#"),
    PrimerNombre: primerNombre,
    SegundoNombre: faker.name.lastName(),
    PrimerApellido: primerApellido,
    SegundoApellido: faker.name.lastName(),
    Celular: faker.phone.number("9###-####"),
    Correo: nombreEmail.toLocaleLowerCase() + "@gmail.com"
}

const newUserAdmin = {
    Nombre: primerNombre,
    Correo: primerNombre.toLocaleLowerCase() + "@gmail.com",
    Password: "M3d1cos-M3dicatel-2021",
    NewPassword: "M3d1cos-M3dicatel-2023"
}

export {
    newUserAdmin,
    seguroDeducible
}