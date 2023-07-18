const { seguroDeducible } = require("../../../../data/asegurame/asegurameCR");
const { randomBeetwenInteger } = require("../../../../helpers/random/fechasYNumeros");
const { destinosRandom } = require("../../../../helpers/random/paises");
const administrativoCR = require("../../../pages/Asegurame/administrativoCR");
const cotizador = require("../../../pages/Asegurame/cotizador");

const correo = "admin@asegurame.cr";
const password = "Asegurame_2023";

describe("Caso 7: Editar una oportunidad a partir desde el Tab de Pago", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

      it("Sistema Cotizador - Generar cotización para cualquier seguro", () => {
        cy.visit(Cypress.env("URL_ASUGURAMECOTIZADOR"));
        
        cotizador.clickBtnCotizar();
        cy.wait(1200);
        
        const randomSeguro = 2;
        cotizador.clickSelectSeguro(randomSeguro);  
        cy.seleccionarSeguro(randomSeguro);

        //Resultados - Eleccion de Planes
        cotizador.clickBtnComprarPlan();
        cy.wait(800)
        cotizador.clickBtnConfirmar();
        cotizador.clickBtnAceptOrCancel();
        cy.wait(20000);

        // const nombreCompleto = seguroDeducible.PrimerNombre + " " + seguroDeducible.SegundoNombre + " " + seguroDeducible.PrimerApellido + " " + seguroDeducible.SegundoApellido;
        
        // cotizador.typeInputPago(".pt-10",1, nombreCompleto)
        // cotizador.typeInputPago(".pt-10", 2, "4111111111111111")
        // cotizador.typeInputPago(".grid",1, "25/12")
        // cotizador.typeInputPago(".grid",2, "999")
        // cotizador.clickBtnFinalizarPago()
        // cotizador.clickBtnCheckbox()
        // cotizador.clickBtnAceptar()
      });
      
      it("Sistema Administrativo", () => {
        cy.loginAsegurame(correo, password);

        cy.wait(2000)
        //Entrar a Oportunidades
        administrativoCR.clickBtnTabPrincipal(3);
        cy.readFile("archivo.json").then(function (text){
            administrativoCR.typeInputSearchCotizaciones(1,text.primerNombre);
        })
        administrativoCR.clickBtnVerCotizacion();


        //Tab-Cotizacion
        administrativoCR.clickBtnTabOportunidad("COT");
        cy.wait(10000) 
        administrativoCR.clickBtnIconLock();
        cy.wait(3000)
        administrativoCR.clickbBtnAceptarEditEtapa();
        // administrativoCR.typeLblValidateDatos(seguroDeducible.Placa)
        cy.readFile("archivo.json").then(function (text){
        administrativoCR.typeLblValidateDatos(text.celular)
        })
        cy.readFile("archivo.json").then(function (text){
        administrativoCR.typeLblValidateDatos(text.correo)
        })
        administrativoCR.clickBtnNextEtapa();

        //Tab-Negociacion
        // administrativoCR.clickBtnTabOportunidad("NEG");
        cy.wait(2000)
        administrativoCR.clickbBtnSelectPlan(1);
        // cy.readFile("archivo.json").then(function (text){
        //   administrativoCR.typeLblValidateDatos(text.primaTotal);
        //   administrativoCR.typeLblValidateDatos(text.primaMensual);
        // });
        administrativoCR.clickBtnNextEtapa();


        //Tab-Documentacion
        cy.wait(2000)
        // administrativoCR.clickBtnTabOportunidad("DOC");
        administrativoCR.clickBtnAcceptEmisión();
        administrativoCR.clickBtnNextEtapa();

        //Tab-Emisión
        cy.wait(2000)
        // administrativoCR.clickBtnTabOportunidad("EMI");
        administrativoCR.clickBtnSubirDocumentos(".contenedor-3 > :nth-child(1)", 1);
        administrativoCR.clickBtnSubirDocumentos("", 2);
        administrativoCR.clickBtnNextEtapa();

        // //Tab-Pago
        cy.wait(2000)
        // administrativoCR.clickBtnTabOportunidad("PAG");
        // cy.readFile("archivo.json").then(function (text){
        //   administrativoCR.typeLblTotalAnual(text.primaTotal)
        // });
        administrativoCR.clickBtnMetodoPago(2);
        administrativoCR.clickBtnHabiCargoAuto(1);

        //Pasar a Ganada
        administrativoCR.clickBtnNextEtapa();

      })
});