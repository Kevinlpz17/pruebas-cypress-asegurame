const { seguroDeducible } = require("../../../../data/asegurame/asegurameCR");
const {
  nombres,
  nombres2,
  apellidos,
  apellidos2,
} = require("../../../../helpers/random/asegurame");
const {
  randomBeetwenInteger,
  identidades,
  randomBeetwenDecimal,
} = require("../../../../helpers/random/fechasYNumeros");
const { destinosRandom } = require("../../../../helpers/random/paises");
const administrativoCR = require("../../../pages/Asegurame/administrativoCR");
const cotizador = require("../../../pages/Asegurame/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";

describe("Caso 4 - Propio - Ver y filtrar cotizaciones", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // beforeEach(() => {
  //     cy.visit(Cypress.env("URL_ASUGURAMECR"));
  //     // //Iniciar sesion
  //     // Login.typeCorreo(correo);
  //     // Login.typePassword(password);
  //     // Login.clickIngresar();
  //     // cy.location("pathname").should("eq", "/");
  //   });


  it("Ir al administrador", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);


    //Entrar a Cotizaciones
    administrativoCR.clickBtnTabPrincipal(3);
    cy.wait(3000)
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(3);
    administrativoCR.typeInputSearch(0, "Pago");
    administrativoCR.typeInputSearch(0, "Cotización");
    administrativoCR.clickBtnVerCotizacion();
    administrativoCR.selectBitacoraState(0)
    cy.get('.MuiFormControl-root > .MuiInputBase-root').type("Hola, mi nombre es Mauricio :)" + "{enter}")
    cy.get('.col-span-1.grid > :nth-child(3)').find('a').click()
  });
});
