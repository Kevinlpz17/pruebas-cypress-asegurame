const { seguroDeducible } = require("../../../../data/asegurame/asegurameCR");
const { randomBeetwenInteger } = require("../../../../helpers/random/fechasYNumeros");
const administrativoCR = require("../../../pages/Asegurame/administrativoCR");
const cotizador = require("../../../pages/Asegurame/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";
const randomSeguro = 1;

describe("Caso 1: Sistemas Combinados", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

      it("Sistema Cotizador - Selecciona seguro, Ingrese la placa y modificacion", () => {
        cy.visit(Cypress.env("URL_ASUGURAMECOTIZADOR"));

        cotizador.clickBtnCotizar();
        cy.wait(1500)
        cotizador.clickSelectSeguro(randomSeguro);
        cy.seleccionarSeguro(randomSeguro);
        
        //Resultados - Eleccion de Planes
        cotizador.clickBtnComprarPlan();
        cy.wait(800)
        cotizador.clickBtnConfirmar();
        cotizador.clickBtnAceptOrCancel();
        cy.wait(10000)
      });
      
      it("Sistema Administrativo - Completar la cotizacion y validar datos guardados", () => {
        cy.loginAsegurame(correo, password);
        cy.wait(3000);
        
        cy.readFile("perfil.json").then(function (text){
          administrativoCR.typeValUser(text.nombre);
        });

        //Entrar a Cotizaciones
        administrativoCR.clickBtnTabPrincipal(2);
        cy.readFile("archivo.json").then(function (text){
          administrativoCR.typeInputSearch(1,text.primerNombre + " " + text.primerApellido);
        });
        administrativoCR.clickBtnVerCotizacion();

        cy.wait(2000)
        //Entrar a Oportunidades
        administrativoCR.clickBtnTabPrincipal(3);
        cy.readFile("archivo.json").then(function (text){
          administrativoCR.typeInputSearch(1,text.primerNombre);
        });
        administrativoCR.clickBtnVerCotizacion();
        
        //Tab-Cotizacion
        administrativoCR.clickBtnTabOportunidad("COT");
        // administrativoCR.typeLblPlaca(seguroDeducible.Placa)
        cy.readFile("archivo.json").then(function (text){
          administrativoCR.typeLblValidateDatos(text.placa)
          administrativoCR.typeLblValidateDatos(text.correo)
          administrativoCR.typeLblValidateDatos(text.celular)
        });

        //Tab-Negociacion
        administrativoCR.clickBtnTabOportunidad("NEG");
        // cy.readFile("archivo.json").then(function (text){
        //   administrativoCR.typeLblValidateDatos(text.primaTotal);
        //   administrativoCR.typeLblValidateDatos(text.primaMensual);
        // });

        //Tab-Documentacion
        administrativoCR.clickBtnTabOportunidad("DOC");

        //Tab-Emisión
        administrativoCR.clickBtnTabOportunidad("EMI");

        // //Tab-Pago
        administrativoCR.clickBtnTabOportunidad("PAG");
        // cy.readFile("archivo.json").then(function (text){
        //   administrativoCR.typeLblTotalAnual(text.primaTotal)
        // });

        administrativoCR.clickBtnMetodoPago(2);
        administrativoCR.clickBtnHabiCargoAuto(1);
        //Pasar a Ganada
        administrativoCR.clickBtnNextEtapa();

      });
});