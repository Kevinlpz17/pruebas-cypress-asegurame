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
    administrativoCR.clickBtnTabPrincipal(2);
    cy.wait(3000)
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(4);
    administrativoCR.clickBtnVerCotizacion();
    cy.wait(3000)
    administrativoCR.clickDescargarArchivo()
    cy.get('.pt-10 > .gap-4 > :nth-child(1) > :nth-child(3)').click()
    cy.get('.pt-10 > .gap-4 > :nth-child(2) > :nth-child(3)').click()
    // cy.readFile("archivo.json").then(function (data) {
    //   administrativoCR.typeInputSearch(1, data.primerNombre);
    
    //   cy.get('.pt-10 > .gap-4 > :nth-child(2)').contains(data.nombreAliado)
    //   administrativoCR.clickBtnTabPrincipal(4);
    //   administrativoCR.typeInputSearch(0, data.nombreAliado);
    //   administrativoCR.clickBtnVerAliado()
    //   cy.wait(1000)
    //   cy.get('.p-16 > :nth-child(2)').find('button').eq(1).should($btn => {
    //     expect($btn).to.contain("Ver cotizaciones")
    //   })
    //   cy.get('.p-16 > :nth-child(2)').find('button').eq(2).should($btn => {
    //     expect($btn).to.contain("Ver oportunidades")
    //   })
    //   administrativoCR.clickBtnInfoAliado(2)
    //   administrativoCR.typeInputSearch(1, data.primerNombre);
    //   administrativoCR.clickBtnVerCotizacion();
    //   cy.get('.col-span-1.grid > :nth-child(3)').find('a').should($a => {
    //     expect($a.first()).to.contain(data.nombreAliado)
    //   })
    // });

  });
});