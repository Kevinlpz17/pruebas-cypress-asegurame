import { faker } from "@faker-js/faker";

const nombres = faker.name.firstName() + " " + faker.name.firstName();
const apellidos = lastNameValidator() + " " + lastNameValidator();
const nombres2 = faker.name.firstName() + " " + faker.name.firstName();
const apellidos2 = lastNameValidator() + " " + lastNameValidator();
const nombres3 = faker.name.firstName() + " " + faker.name.firstName();
const apellidos3 = lastNameValidator() + " " + lastNameValidator();

function lastNameValidator() {
    let apellidoFaker = faker.name.lastName();
    while (apellidoFaker.includes("'")) {
      apellidoFaker = faker.name.lastName();
    }
  
    return apellidoFaker;
}

const correo = nombres.split(" ").join("").toLocaleLowerCase() + "@gmail.com"

export {
    nombres,
    nombres2,
    apellidos,
    apellidos2,
    correo
}