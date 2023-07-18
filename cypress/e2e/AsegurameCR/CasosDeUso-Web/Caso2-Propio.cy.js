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
const administrativoCR = require("../../../pages/Asegurame/administrativoCR");
const cotizador = require("../../../pages/Asegurame/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";

describe("Caso 2: Crear y configurar un nuevo usuario operador", () => {
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

    administrativoCR.typeInputDefault(newUserAdmin.Nombre, 0);
    administrativoCR.clickBtnViewUser();
    administrativoCR.clickBtnDesactivarPermiso(1);

    cy.wait(6000)
    administrativoCR.clickBtnLogout();

    cy.loginAsegurame(newUserAdmin.Correo, newUserAdmin.Password);

    administrativoCR.typeInputDefault(newUserAdmin.Password, 0);
    administrativoCR.typeInputDefault(newUserAdmin.NewPassword, 1);
    administrativoCR.typeInputDefault(newUserAdmin.NewPassword, 2);
    administrativoCR.clickSaveCambios();
  });
});