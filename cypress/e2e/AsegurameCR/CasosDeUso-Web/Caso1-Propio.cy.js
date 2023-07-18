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

const correo = "antonio@correo.com";
const password = "Diosesamor17.";

describe("Caso 1: Editar perfil del usuario (Datos personales)", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.loginAsegurame(correo, password);
    });


  it("Módulo Perfil - Sistema Administrativo", () => {
    //Entrar al Perfil
    administrativoCR.clickBtnSubTabPrincipal(1);

    administrativoCR.clickBtnEditPerfil();
    cy.wait(1000)
    administrativoCR.typeInputDefault("KevinAsesor", 0);
    administrativoCR.typeInputDefault("antonio@correo.com", 1);
    cy.wait(500);
    administrativoCR.clickSaveCambios();
    cy.wait(1000);
    
    administrativoCR.typeLblValNameUserProfile("KevinAsesor");
    cy.wait(500);
    administrativoCR.typeLblCorreoProfile("antonio@correo.com");

    administrativoCR.clickBtnCambiarPass();
    administrativoCR.typeInputDefault(password, 0);
    administrativoCR.typeInputDefault("Diosesamor1703.", 1);
    administrativoCR.typeInputDefault("Diosesamor1703.", 2);
    administrativoCR.clickSaveCambios();
    cy.wait(3000);

    administrativoCR.clickBtnLogout();

    cy.loginAsegurame("antonio@correo.com", "Diosesamor1703.")
  });
});