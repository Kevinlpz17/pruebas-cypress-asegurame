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
const administrativoCR = require("../../../pages/AsegurameCR/administrativoCR");
const cotizador = require("../../../pages/AsegurameCR/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";

describe("Caso 7: Ver perfil del contacto", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);
  })
  // beforeEach(() => {
  //     cy.visit(Cypress.env("URL_ASUGURAMECR"));
  //     // //Iniciar sesion
  //     // Login.typeCorreo(correo);
  //     // Login.typePassword(password);
  //     // Login.clickIngresar();
  //     // cy.location("pathname").should("eq", "/");
  //   });


  it("Entrar a numero de cotizaciones, opurtunidades y perfil de una oportunidad", () => {
    //Entrar a Contactos
    administrativoCR.clickBtnTabPrincipal(5);
    cy.wait(3000)
    cy.get(':nth-child(1) > .px-3.flex > .MuiButtonBase-root').eq(0).click()
    cy.wait(4000)
    cy.get('.pt-10 > .gap-4 > :nth-child(1) > :nth-child(3)').click()
  
    administrativoCR.clickBtnTabPrincipal(5);
    cy.wait(3000)
    cy.get(':nth-child(1) > .px-3.flex > .MuiButtonBase-root').eq(0).click()
    cy.wait(4000)
    cy.get('.pt-10 > .gap-4 > :nth-child(2) > :nth-child(3)').click()
    
    administrativoCR.clickBtnTabPrincipal(5);
    cy.wait(3000)
    cy.get(':nth-child(1) > .px-3.flex > .MuiButtonBase-root').eq(0).click()
    cy.wait(4000)
    cy.get('.shadow-table > .justify-center').children().click()
  });
});
