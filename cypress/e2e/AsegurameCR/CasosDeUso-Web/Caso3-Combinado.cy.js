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
} = require("../../../../helpers/random/fechasYNumeros");
const { destinosRandom } = require("../../../../helpers/random/paises");
const administrativoCR = require("../../../pages/AsegurameCR/administrativoCR");
const cotizador = require("../../../pages/AsegurameCR/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";

describe("Caso 3: Sistemas Combinados", () => {
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

  it("Sistema Cotizador - Seleccionar el seguro de viajes y hacer la cotizacion pero no el pago", () => {
    cy.visit(Cypress.env("URL_ASUGURAMECOTIZADOR"));

    cotizador.clickBtnCotizar();
    cy.wait(1200);
    cotizador.clickSelectSeguro(2)
    cy.seleccionarSeguro(2);
    cotizador.clickBtnComprarPlan();
    cy.wait(800);
    cotizador.clickBtnConfirmar();
    cotizador.clickBtnAceptOrCancel();
  });

  it("Ir al administrador", () => {
    cy.loginAsegurame(correo, password);

    cy.readFile("perfil.json").then(function (text) {
      administrativoCR.typeValUser(text.nombre);
    });

    //Entrar a Cotizaciones
    administrativoCR.clickBtnTabPrincipal(2);
    administrativoCR.openFilter();
    administrativoCR.selectFilterOption(3);
    cy.readFile("archivo.json").then(function (data) {
      administrativoCR.typeInputSearch(1, data.primerNombre);
      cy.get(".shadow-table > :nth-child(2)").contains(
        data.primerNombre + " " + data.primerApellido
      );
      administrativoCR.clickBtnVerCotizacion();

      
      //Entrar a Oportunidadesb
      administrativoCR.clickBtnTabPrincipal(3);
      cy.wait(8000)

      administrativoCR.typeInputSearch(1, data.primerNombre);
      administrativoCR.clickBtnVerCotizacion();

      //Tab-Cotizacion
      administrativoCR.clickBtnTabOportunidad("COT");
      console.log(data.fechaInicioViaje);
      administrativoCR.typeLblValidateDatos(data.fechaInicioViaje);
      administrativoCR.typeLblValidateDatos(data.fechaRegresoViaje);

      administrativoCR.typeLblValidateDatos(
        data.primerNombre + " " + data.primerApellido
      );
      administrativoCR.typeLblValidateDatos(data.correo);
      administrativoCR.typeLblValidateDatos(data.celular);

      //Tab-Negociacion
      administrativoCR.clickBtnTabOportunidad("NEG");
      administrativoCR.typeLblValidateDatos(data.primaTotal);

      //Tab-Documentacion
      administrativoCR.clickBtnTabOportunidad("DOC");
      administrativoCR.clickBtnUnlock();
      administrativoCR.clickBtnAllowEditar();
      administrativoCR.selectAceptarEmision();
      administrativoCR.clickBtnNextEtapa();

      //Tab-Emisión
      administrativoCR.clickBtnNextEtapa();
      cy.wait(10000);
      // //Tab-Pago
      administrativoCR.clickBtnMetodoPago(2);
      administrativoCR.clickBtnHabiCargoAuto(1);

      administrativoCR.clickBtnMetodoPago(2);
      administrativoCR.clickBtnHabiCargoAuto(0);
      administrativoCR.selectBitacoraState(0)
      //  //Pasar a Ganada
      administrativoCR.clickBtnNextEtapa();
    });
  });
});
