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

describe("Caso 6 - Propio: Crear un nuevo aliado", () => {
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


  it("Sistema administrativo - Modulo Aliados", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);


    //Entrar a Cotizaciones
    administrativoCR.clickBtnTabPrincipal(4);
    cy.wait(3000)
    cy.get('svg[data-testid="AddCircleIcon"]').click()
    administrativoCR.typeInputAliado(1, nombres)
    administrativoCR.typeInputAliado(2, identidades)
    administrativoCR.typeInputAliado(3, nombres.split(' ')[0] + "@gmail.com")
    administrativoCR.typeInputAliado(4, "99999999")
    administrativoCR.clickBtnCrearAliado()
    cy.wait(3000)
    administrativoCR.typeInputSearch(0,nombres)   
    administrativoCR.clickBtnVerAliado()
    administrativoCR.openFilter()
    administrativoCR.selectFilterOption(randomBeetwenInteger(1,10))
    cy.get('.p-16 > :nth-child(2) > .items-center > .cursor-pointer').click()
    administrativoCR.typeInputAliado(3, nombres)
    administrativoCR.typeInputAliado(4, identidades)
    administrativoCR.typeInputAliado(5, nombres.split(' ')[1] + "@gmail.com")
    administrativoCR.typeInputAliado(6, "8888888")
    administrativoCR.clickBtnCrearAliado()
  });
});
