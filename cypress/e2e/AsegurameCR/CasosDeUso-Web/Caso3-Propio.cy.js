const { seguroDeducible, newUserAdmin } = require("../../../../data/asegurame/asegurameCR");
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

describe("Caso 3: Configurar un usuario administrador", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.loginAsegurame(correo, password);
    });


  it("Módulo Configuración - Sistema Administrativo", () => {
    //Entrar al Perfil
    administrativoCR.clickBtnConfiguracion();
    administrativoCR.clickBtnAddUser();

    administrativoCR.typeInputDefault(newUserAdmin.Nombre, 1);
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(2);
    administrativoCR.typeInputDefault(newUserAdmin.Correo, 3);
    administrativoCR.typeInputDefault(newUserAdmin.Password, 4);
    administrativoCR.clickSaveCambios();
    cy.wait(4000)

    administrativoCR.typeInputDefault(newUserAdmin.Nombre, 0);
    administrativoCR.clickBtnViewUser();
    administrativoCR.clickBtnDesactivarUsuario();
    administrativoCR.clickBtnDesactivarPermiso(4);

    cy.wait(6000)
    administrativoCR.clickBtnLogout();

    // cy.loginAsegurame(newUserAdmin.Correo, newUserAdmin.Password);

  });

  it("Activar usuario editado y contraseña - Usuario Maestro", () => {
    administrativoCR.clickBtnConfiguracion();
    administrativoCR.typeInputDefault(newUserAdmin.Nombre, 0);
    administrativoCR.clickBtnViewUser();
    administrativoCR.clickBtnDesactivarUsuario();

    administrativoCR.clickBtnCambiarPass();
    cy.get('.rounded-md > .fontPSemiBold').then(function(text){
      const passTemporal = text.text();
      cy.log(passTemporal)
      administrativoCR.clickSaveCambios();
      
    cy.wait(10000)
    administrativoCR.clickBtnLogout();

    cy.loginAsegurame(newUserAdmin.Correo, passTemporal);
    administrativoCR.typeInputDefault(passTemporal, 0);
    administrativoCR.typeInputDefault(newUserAdmin.NewPassword, 1);
    administrativoCR.typeInputDefault(newUserAdmin.NewPassword, 2);
    cy.wait(1200);
    administrativoCR.clickSaveCambios();
  });
  })
});