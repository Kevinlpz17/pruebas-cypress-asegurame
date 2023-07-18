const administrativoCR = require("../pages/AsegurameCR/administrativoCR.js");
const cotizador = require("../pages/AsegurameCR/cotizador.js");
const { seguroDeducible } = require("../../data/asegurame/asegurameCR.js");
const {
  randomBeetwenInteger,
} = require("../../helpers/random/fechasYNumeros.js");
const { destinosRandom } = require("../../helpers/random/paises.js");

Cypress.Commands.add("loginAsegurame", (correo, password) => {
  cy.visit(Cypress.env("URL_ASUGURAMECR"));

  //Iniciar Sesion
  administrativoCR.typeInputDefault(correo, 0);
  administrativoCR.typeInputDefault(password, 1);
  administrativoCR.clickBtnLogin();

  cy.intercept(
    {
      method: "POST",
      url: "https://d18uulis21yhn7.cloudfront.net/api/v1/usuarios/login",
    },
    (req) => {}
  ).as("login");
  cy.wait(3000);
  cy.wait("@login").then((xhr) => {
    // console.log("Solicitud XHR: ", xhr.request);
    // console.log("Respuesta XHR: ", xhr.response.body.data.permisos);
    let nameUser = xhr.response.body.data.usuario.nombre;
    let permisosAsegurameCR = JSON.stringify(xhr.response.body.data.permisos);

    cy.writeFile("perfil.json", {
      nombre: nameUser,
    });

    cy.writeFile("permisos.json", permisosAsegurameCR);
  });
});

// Cypress.Commands.add("valPermisosAsegurame", () => {
//   cy.readFile("permisos.json").then(function (text){
//   text.forEach((element) => {
//     if(element.nombre === "perfil"){
//       if(element.permisos.includes(1)){

//       }
//     }
//   })
//   })
// })

Cypress.Commands.add("seleccionarSeguro", (index) => {
  switch (index) {
    case 1:
      // cotizador.typeInputDefault(2, seguroDeducible.Placa);
      cy.get(".css-1x5jdmq").eq(0).type(seguroDeducible.Placa);
      cotizador.clickBtnCalcular();

      cy.wait(2500);
      cotizador.clickSelectTID();
      cotizador.clickListRoot(randomBeetwenInteger(1, 12));
      cy.wait(500);
      cotizador.typeInputDefault(10, seguroDeducible.Identificacion);
      cy.wait(2000);
      cotizador.typeInputDefault(11, seguroDeducible.PrimerNombre);
      cy.wait(500);
      cotizador.typeInputDefault(12, seguroDeducible.SegundoNombre);
      cotizador.typeInputDefault(13, seguroDeducible.PrimerApellido);
      cotizador.typeInputDefault(14, seguroDeducible.SegundoApellido);
      cotizador.typeInputDefault(15, seguroDeducible.Celular);
      cotizador.typeInputDefault(16, seguroDeducible.Correo);
      cy.readFile("archivo.json").then(function (data) {
        cy.writeFile("archivo.json", {
          ...data,
          placa: seguroDeducible.Placa,
          primerNombre: seguroDeducible.PrimerNombre,
          primerApellido: seguroDeducible.PrimerApellido,
          correo: seguroDeducible.Correo,
          celular: seguroDeducible.Celular,
        });
      });
      cotizador.clickBtnCalcularDP();
      cy.wait(21000);

      cy.get(
        ".card-seleccionada-cotizacion > .bg-card > .mt-14 > div > .pt-5"
      ).then(function (primaT) {
        const primaTotal = primaT.text();

        cy.get(
          ".card-seleccionada-cotizacion > .bg-card > .pb-5 > div > .MuiTypography-root"
        ).then(function (primaM) {
          const primaMensual = primaM.text();

          cy.get(
            ".card-seleccionada-cotizacion > .bg-card > .mt-1 > .border-b"
          ).then(function (indemi) {
            const indemixDedu = indemi.text();
            cy.readFile("archivo.json").then(function (data) {
  
              cy.writeFile("archivo.json", {
                ...data,
                primaTotal: primaTotal,
                primaMensual: primaMensual,
                indemixDeducible: indemixDedu,
              });
            });
            
          });
        });
      });
      break;

    case 2:
      // cotizador.typeInputDefault(1, randomBeetwenInteger(1, 2));
      cotizador.selectSVDestinoViaje(destinosRandom);
      cotizador.selectCalendarioSalidaViaje();
      cotizador.selectFechaSalida();
      cy.get('input[placeholder="Tu fecha de salida"]')
        .eq(0)
        .invoke("val")
        .then((date) => {
          let [dia, mes, anio] = date.split("/");

          switch (String(mes)) {
            case "01":
              mes = "enero";
              break;
            case "02":
              mes = "febrero";
              break;
            case "03":
              mes = "marzo";
              break;
            case "04":
              mes = "abril";
              break;
            case "05":
              mes = "mayo";
              break;
            case "06":
              mes = "junio";
              break;
            case "07":
              mes = "julio";
              break;
            case "08":
              mes = "agosto";
              break;
            case "09":
              mes = "septiembre";
              break;
            case "10":
              mes = "octubre";
              break;
            case "11":
              mes = "noviembre";
              break;
            case "12":
              mes = "diciembre";
              break;
          }

          cy.readFile("archivo.json").then(function (data) {
            data["fechaInicioViaje"] = `${dia} de ${mes}, ${anio}`;

            cy.writeFile("archivo.json", data);
          });
        });
      cy.wait(1000);
      cotizador.selectCalendarioRegresoViaje();
      cotizador.selectFechaRegreso();
      cy.get('input[placeholder="Tu fecha de regreso"]')
        .eq(0)
        .invoke("val")
        .then((date) => {
          let [dia, mes, anio] = date.split("/");

          switch (String(mes)) {
            case "01":
              mes = "enero";
              break;
            case "02":
              mes = "febrero";
              break;
            case "03":
              mes = "marzo";
              break;
            case "04":
              mes = "abril";
              break;
            case "05":
              mes = "mayo";
              break;
            case "06":
              mes = "junio";
              break;
            case "07":
              mes = "julio";
              break;
            case "08":
              mes = "agosto";
              break;
            case "09":
              mes = "septiembre";
              break;
            case "10":
              mes = "octubre";
              break;
            case "11":
              mes = "noviembre";
              break;
            case "12":
              mes = "diciembre";
              break;
          }

          cy.readFile("archivo.json").then(function (data) {
            data["fechaRegresoViaje"] = `${dia} de ${mes}, ${anio}`;

            cy.writeFile("archivo.json", data);
          });
        });
      cotizador.clickBtnCalcular();
      cotizador.clickSelectTID();
      cotizador.clickListRoot(randomBeetwenInteger(1, 12));
      cotizador.typeInputDefault(14, seguroDeducible.Identificacion);
      cotizador.typeInputDefault(15, seguroDeducible.PrimerNombre) ;
      cotizador.typeInputDefault(16, seguroDeducible.SegundoNombre);
      cotizador.typeInputDefault(17, seguroDeducible.PrimerApellido);
      cotizador.typeInputDefault(18, seguroDeducible.SegundoApellido);
      cotizador.selectDia("left");
      cotizador.selectOption(randomBeetwenInteger(1, 29));
      cotizador.selectMes("left");
      cotizador.selectOption(randomBeetwenInteger(1, 12));
      cotizador.selectAnio("left");
      cotizador.selectOption(randomBeetwenInteger(8, 20));
      cotizador.typeInputDefault(23, seguroDeducible.Celular);
      cotizador.typeInputDefault(24, seguroDeducible.Correo);
      cy.readFile("archivo.json").then(function (data) {
        cy.writeFile("archivo.json", {
          ...data,
          primerNombre: seguroDeducible.PrimerNombre,
          primerApellido: seguroDeducible.PrimerApellido,
          correo: seguroDeducible.Correo,
          celular: seguroDeducible.Celular,
        });
      });
      cotizador.clickBtnCalcularDP();

      cy.wait(20000);
      cy.get(
        ".card-seleccionada-cotizacion > .bg-card > .mt-14 > div > .pt-5"
      ).then(function (primaT) {
        cy.readFile("archivo.json").then(function (data) {
          const primaTotal = primaT.text();
          cy.writeFile("archivo.json", { ...data, primaTotal });
        });
      });
      break;

    case 3:
      cotizador.selectDia("center");
      cotizador.selectOption(randomBeetwenInteger(1, 29));
      cotizador.selectMes("center");
      cotizador.selectOption(randomBeetwenInteger(1, 12));
      cotizador.selectAnio("center");
      cotizador.selectOption(randomBeetwenInteger(8, 20));

      // cy.get('input[placeholder="dd/mm/yyyy"]')
      //   .eq(1)
      //   .invoke("val")
      //   .then((date) => {
      //     let [dia, mes, anio] = date.split("/");
      //     cy.readFile("archivo.json").then(function (data) {
      //       data["fechaRegresoViaje"] = `${dia} de ${mes}, ${anio}`;

      //       cy.writeFile("archivo.json", data);
      //     });
      //   });

      // cy.get('.form-center > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select')
      //   .invoke("val")
      //   .then((dia) => {
      //     cy.log(dia)
      //     cy.get(
      //       '.form-center > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(2)'
      //     )
      //       .invoke("val")
      //       .then((mes) => {
      //         cy.get(
      //           '.form-center > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(3)'
      //         )
      //           .invoke("val")
      //           .then((anio) => {
      //             cy.readFile("archivo.json").then(function (data) {
      //                 data["fechaDeNacimiento"] = `${dia} de ${mes}, ${anio}`;

      //                 cy.writeFile("archivo.json", data);
      //               });
      //           });
      //       });
      //   });

      cotizador.selectGenero(randomBeetwenInteger(0, 1));
      cotizador.clickBtnCalcular();

      cotizador.clickSelectTID();
      cotizador.clickListRoot(randomBeetwenInteger(1, 12));
      cotizador.typeInputDefault(10, seguroDeducible.Identificacion);
      cotizador.typeInputDefault(11, seguroDeducible.PrimerNombre);
      cotizador.typeInputDefault(12, seguroDeducible.SegundoNombre);
      cotizador.typeInputDefault(13, seguroDeducible.PrimerApellido);
      cotizador.typeInputDefault(14, seguroDeducible.SegundoApellido);
      cotizador.typeInputDefault(15, seguroDeducible.Celular);
      cotizador.typeInputDefault(16, seguroDeducible.Correo);
      cotizador.clickBtnCalcularDP();

      cy.readFile("archivo.json").then(function (data) {
        cy.writeFile("archivo.json", {
          ...data,
          primerNombre: seguroDeducible.PrimerNombre,
          primerApellido: seguroDeducible.PrimerApellido,
          correo: seguroDeducible.Correo,
          celular: seguroDeducible.Celular,
        });
      });
      cy.wait(20000);
      cy.get(
        ".card-seleccionada-cotizacion > .bg-card > .mt-14 > div > .pt-5"
      ).then(function (primaT) {
        const primaTotal = primaT.text();
        cy.readFile("archivo.json").then(function (data) {
          cy.writeFile("archivo.json", { ...data, primaTotal });
        });
      });
  }
});

