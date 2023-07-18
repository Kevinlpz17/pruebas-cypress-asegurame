//--------------------------------------------------------------------------------------------------------------
// Caso 1: Cotizar y finalizar oportunidad, seguro Deducible Vehículo y llenar oportunidad. [Deducible Vehículo]
//--------------------------------------------------------------------------------------------------------------

//Data

//Helpers

//Pages


//Variables

describe("Sistemas Combinados - Deducible Vehiculo", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    //Cerrar seciones abiertas
    before(() => {
        Cypress.session.clearAllSavedSessions();
        Cypress.session.clearCurrentSessionData();
    });



    
})