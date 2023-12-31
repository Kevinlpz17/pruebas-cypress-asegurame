const { seguroDeducible } = require("../../../../data/asegurame/asegurameCR");
const { randomBeetwenInteger } = require("../../../../helpers/random/fechasYNumeros");
const administrativoCR = require("../../../pages/AsegurameCR/administrativoCR");
const cotizador = require("../../../pages/AsegurameCR/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";
const randomSeguro = 1;

describe("Caso 2: Sistemas Combinados", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

      it("Sistema Cotizador - Realización de cotizacion completa", () => {
        cy.visit(Cypress.env("URL_ASUGURAMECOTIZADOR"));

        cotizador.clickBtnCotizar();
        cy.wait(1000)
        cotizador.clickSelectSeguro(randomSeguro);
        cy.seleccionarSeguro(randomSeguro);

        //Resultados - Eleccion de Planes
        cotizador.clickBtnComprarPlan();
        cy.wait(800)
        cotizador.clickBtnConfirmar();
        cotizador.clickBtnAceptOrCancel();
        cy.wait(10000);
        const nombreCompleto = seguroDeducible.PrimerNombre + " " + seguroDeducible.SegundoNombre + " " + seguroDeducible.PrimerApellido + " " + seguroDeducible.SegundoApellido;
        cotizador.typeInputPago(".pt-10",1, nombreCompleto)
        cotizador.typeInputPago(".pt-10", 2, "4111111111111111")
        cotizador.typeInputPago(".grid",1, "25/12")
        cotizador.typeInputPago(".grid",2, "999")
        cotizador.clickBtnFinalizarPago()
        cotizador.clickBtnCheckbox()
        cotizador.clickBtnAceptar();

        cy.wait(1800);
      });
      
      it("Sistema Administrativo - Validar cotizacion generada en cada etapa", () => {
        cy.loginAsegurame(correo, password);

        cy.readFile("perfil.json").then(function (text){
          administrativoCR.typeValUser(text.nombre);
        });

        //Entrar a Cotizaciones
        administrativoCR.clickBtnTabPrincipal(2);
        cy.readFile("archivo.json").then(function(text){
          administrativoCR.typeInputSearch(1,text.primerNombre + " " + text.primerApellido);
        })
        administrativoCR.clickBtnVerCotizacion();

        cy.wait(2000)
        //Entrar a Oportunidades
        administrativoCR.clickBtnTabPrincipal(3);
        cy.wait(5000)
        cy.readFile("archivo.json").then(function(text){
          administrativoCR.typeInputSearch(1,text.primerNombre);
        })
        administrativoCR.clickBtnVerCotizacion();
        
        //Tab-Cotizacion
        administrativoCR.clickBtnTabOportunidad("COT");
        // administrativoCR.typeLblPlaca(seguroDeducible.Placa)
        cy.readFile("archivo.json").then(function(text){
          administrativoCR.typeLblValidateDatos(text.placa)
          administrativoCR.typeLblValidateDatos(text.correo)
          administrativoCR.typeLblValidateDatos(text.celular)
        })

        //Tab-Negociacion
        administrativoCR.clickBtnTabOportunidad("NEG");
        // cy.readFile("archivo.json").then(function (text){
        //   administrativoCR.typeLblValidatePrimas(text.primaTotal);
        //   administrativoCR.typeLblValidatePrimas(text.primaMensual);
        // });

        //Tab-Documentacion
        administrativoCR.clickBtnTabOportunidad("DOC");

        //Tab-Emisión
        administrativoCR.clickBtnTabOportunidad("EMI");

        // //Tab-Pago
        // administrativoCR.clickBtnTabOportunidad("PAG");
        // // cy.readFile("archivo.json").then(function (text){
        // //   administrativoCR.typeLblTotalAnual(text.primaTotal)
        // // });

        // administrativoCR.clickBtnMetodoPago(2);
        // administrativoCR.clickBtnHabiCargoAuto(1);
        // //Pasar a Ganada
        // administrativoCR.clickBtnNextEtapa();

      });
});