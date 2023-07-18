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

describe("Caso 6: Sistemas Combinados", () => {
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

  it("Sistema Cotizador - Seleccionar el seguro de viajes y hacer la cotizacion y el pago", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECOTIZADOR"));
    cotizador.clickBtnCotizar();
    cy.wait(1800);
    cotizador.clickSelectSeguro(3);
    cy.seleccionarSeguro(3);
    cotizador.clickBtnComprarPlan();
    cy.wait(800);
    cotizador.clickBtnConfirmar();
    cotizador.clickBtnAceptOrCancel();
    cy.wait(20000);
    cotizador.typeInputPago(".pt-10", 1, nombres + apellidos);
    cotizador.typeInputPago(".pt-10", 2, "4111111111111111");
    cotizador.typeInputPago(".grid", 1, "25/12");
    cotizador.typeInputPago(".grid", 2, "999");
    cotizador.clickBtnFinalizarPago();
    cy.wait(3000)
  });

  it("Ir al administrador", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECR"));
    cy.loginAsegurame(correo, password);

    cy.readFile("perfil.json").then(function (text) {
      administrativoCR.typeValUser(text.nombre);
    });

    //Entrar a Cotizaciones
    administrativoCR.clickBtnTabPrincipal(3);
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(4);
    cy.readFile("archivo.json").then(function (data) {
      administrativoCR.typeInputSearch(1, data.primerNombre);
      administrativoCR.clickBtnVerCotizacion();

      //Entrar a Oportunidadesb
      administrativoCR.clickBtnTabPrincipal(3);
      administrativoCR.typeInputSearch(1, data.primerNombre);
      administrativoCR.clickBtnVerCotizacion();

      //Tab-Cotizacion
      administrativoCR.clickBtnTabOportunidad("COT");
      administrativoCR.typeLblValidateDatos(data.primerNombre);
      administrativoCR.typeLblValidateDatos(data.correo);
      administrativoCR.typeLblValidateDatos(data.celular);

    //   //Tab-Negociacion
    //   administrativoCR.clickBtnTabOportunidad("NEG");
    //   cy.get(':nth-child(22) > [data-layer="Content"]').contains(
    //     data.primaTotal
    //   );

    //Tab-Documentacion
    administrativoCR.clickBtnTabOportunidad("DOC");
    

    //Tab-Emisión
    administrativoCR.clickBtnTabOportunidad("EMI");

    // //Tab-Pago
    administrativoCR.clickBtnTabOportunidad("PAG");
    // administrativoCR.typeLblTotalAnual(data.primaTotal);
    });

  });
});
