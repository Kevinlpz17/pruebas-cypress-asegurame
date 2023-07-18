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

describe("Caso 8: Cotizar deducible vehículo con el url del aliado", () => {
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

  it("Sistema administrativo, modulo de aliados", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);
    cy.readFile("perfil.json").then(function (text) {
        administrativoCR.typeValUser(text.nombre);
    });
    administrativoCR.clickBtnTabPrincipal(4);
    
    cy.get(':nth-child(3) > :nth-child(1) > .grid-iniciales > .MuiTypography-root').then($value => {
      cy.readFile("archivo.json").then(function (data) {
        cy.writeFile("archivo.json", { ...data, nombreAliado: $value.text()})
    });
    })
    administrativoCR.clickCopyUrl(3)
    cy.window().its('navigator.clipboard').invoke('readText').then( (text) =>
      cy.readFile("archivo.json").then(function (data) {
        cy.writeFile("archivo.json", { ...data, clipboardURL: text});
      })
    )

  });

  it("Sistema cotizador, modulo de aliados", () => {
    cy.viewport(414,896)
    cy.readFile("archivo.json").then(function (data) {
      cy.visit(data.clipboardURL)
    })
    cy.wait(1200);
    cotizador.clickSelectSeguro(1)
    cy.seleccionarSeguro(1);
    cy.wait(800);
    cy.get(':nth-child(3) > .bg-card > .py-10 > .MuiButtonBase-root').click()
    cotizador.clickBtnConfirmar();
    cotizador.clickBtnAceptOrCancel();
    cy.wait(20000);
    cotizador.typeInputPago(".pt-10", 1, nombres + apellidos);
    cotizador.typeInputPago(".pt-10", 2, "4111111111111111");
    cotizador.typeInputPago(".grid", 1, "25/12");
    cotizador.typeInputPago(".grid", 2, "999");
    cotizador.clickBtnFinalizarPago();
    cotizador.clickBtnCheckbox();
    cotizador.clickBtnAceptar();
    
  });

  it("Ir al administrador", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);

    cy.readFile("perfil.json").then(function (text) {
      administrativoCR.typeValUser(text.nombre);
    });

    //Entrar a Cotizaciones
    administrativoCR.clickBtnTabPrincipal(2);
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(2);
    
    cy.readFile("archivo.json").then(function (data) {
      administrativoCR.typeInputSearch(1, data.primerNombre);
      administrativoCR.clickBtnVerCotizacion();
      cy.get('.pt-10 > .gap-4 > :nth-child(2)').contains(data.nombreAliado)
      administrativoCR.clickBtnTabPrincipal(4);
      administrativoCR.typeInputSearch(0, data.nombreAliado);
      administrativoCR.clickBtnVerAliado()
      cy.wait(2000)
      cy.get('.p-16 > :nth-child(2)').find('button').eq(1).should($btn => {
        expect($btn).to.contain("Ver cotizaciones")
      })
      cy.get('.p-16 > :nth-child(2)').find('button').eq(2).should($btn => {
        expect($btn).to.contain("Ver oportunidades")
      })
      administrativoCR.clickBtnInfoAliado(2)
      cy.wait(10000)
      administrativoCR.typeInputSearch(1, data.primerNombre);
      administrativoCR.clickBtnVerCotizacion();
      cy.get('.col-span-1.grid > :nth-child(3)').find('a').should($a => {
        expect($a.first()).to.contain(data.nombreAliado)
      })
    });

  });
});
