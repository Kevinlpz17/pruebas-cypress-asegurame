
class cotizador {
    elements = {
        btnSelectSeguroMobil: (index) => cy.get(`.grid-listo-comprar > :nth-child(2) > .flex > :nth-child(${index}) > .contenedor-iconos`),
        btnCotizar: () => cy.get(':nth-child(5) > .MuiButtonBase-root'),
        btnSelectSeguro: (index) => cy.get(`:nth-child(${index}) > .card-cotizador > .contenido-card > .MuiButtonBase-root`),
        inputDefault: () => cy.get(".MuiInputBase-input"),
        inputPago: (clase, index) => cy.get(`${clase} > :nth-child(${index}) > .flex > .MuiFormControl-root > .MuiInputBase-root`),
        btnCalcular: () => cy.get('.p-5 > .MuiButtonBase-root'),
        selectTID: () => cy.get('.form-left > .flex-col > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select'),
        listRoot: () => cy.get('.MuiList-root'),
        btnCalcularDP: () => cy.get('.justify-center.items-center > .MuiButtonBase-root'),
        btnComprarPlan: () => cy.get('.card-seleccionada-cotizacion > .bg-card > .py-10 > .MuiButtonBase-root'),
        btnConfirmar: () => cy.get('.height-pasos > .mx-auto > .justify-center.items-center > .MuiButtonBase-root'),
        btnAceptOrCancel: () => cy.get('.css-50yp0j'),
        btnFinalizarPago: () => cy.get('.pt-0 > .MuiButtonBase-root'),
        btnCheckbox: () => cy.get(".PrivateSwitchBase-input"),
        btnAceptar: () => cy.get('.MuiDialogActions-root > .flex > .MuiButtonBase-root'),
        inputPlacaVehiculo: () => cy.get('input'),
        btnCotizarVehiculo: () => cy.get('.p-5 > .MuiButtonBase-root'),
        btnSVTipoPlan: (index) => cy.get(`.form-center > :nth-child(2) > :nth-child(${index}) > .justify-center`),
        selectSVDestinoViaje: () => cy.get('.p-5 > :nth-child(2) > .flex-col > [style="max-width: 350px; width: 100%;"] > .App > .react-select-container > .react-select__control > .react-select__value-container > .react-select__input-container'),
        selectCalendarSalidaViaje: () => cy.get('.form-center > .grid > :nth-child(1) > .flex > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root'),
        selectCalendarRegresoViaje: () => cy.get('.form-center > .grid > :nth-child(2) > .flex > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root'),
        selectFechaRegreso: () => cy.get('.MuiDayPicker-monthContainer').get('button[role="gridcell"]').not(".Mui-disabled"),
        selectTipoIdentificacion: () => cy.get('.form-left > .flex-col > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select'),
        selectOption: () => cy.get('.MuiList-root'),
        dia: (position) => cy.get(`.form-${position} > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select > .fontPSemiBold`),
        mes: (position) => cy.get(`.form-${position} > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select > .fontPSemiBold`),
        anio: (position) => cy.get(`.form-${position} > [style="max-width: 600px; width: 100%;"] > .grid > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select > .fontPSemiBold`), 
        telefono: () => cy.get(':nth-child(9) > .form-left > .flex-col > .MuiFormControl-root > .MuiInputBase-root'),
        correo: () => cy.get(':nth-child(10) > .form-left > .flex-col > .MuiFormControl-root > .MuiInputBase-root'),
        selectGenero: () => cy.get('.form-center > :nth-child(2) > :nth-child(2) > .justify-center')
    }

    //Functions
    clickBtnCotizar() {
        this.elements
                .btnCotizar()
            .should("be.visible")
            .click()
    }
    clickBtnComprarPlan() {
        this.elements
            .btnComprarPlan()
            .should("be.visible")
            .click()
    }

    clickBtnConfirmar() {
        this.elements
            .btnConfirmar()
            .should("be.visible")
            .click()
    }

    clickBtnAceptar() {
        this.elements
            .btnAceptar()
            .eq(1)
            .should("be.visible")
            .click()
    }

    typeInputDefault(index,value) {
        this.elements
            .inputDefault()
            .eq(index)
            .clear()
            .type(value)
    }

    typeInputPago(clase, index,value) {
        this.elements
            .inputPago(clase, index)
            .type(value)
    }

    clickBtnSelectSeguroMobil(index) {
        this.elements
            .btnSelectSeguroMobil(index)
            .should("be.visible")
            .click()
    }

    clickBtnSelectSeguro(index) {
        this.elements
            .btnSelectSeguro(index)
            .should("be.visible")
            .click()
    }

    clickBtnCotizar(){
        this.elements
            .btnCotizar()
            .click()
            .and("exist")
    }

    clickSelectSeguro(index){
        this.elements   
            .btnSelectSeguro(index)
            .click()
    }

    clickBtnCalcular(){
        this.elements
            .btnCalcular()
            .click()
            .and("exist")
    }

    clickSelectTID(){
        this.elements
            .selectTID()
            .click()
    }

    clickListRoot(index){
        this.elements
            .listRoot()
            .find("li")
            .eq(index)
            .click()
    }

    clickBtnCalcularDP(){
        this.elements
            .btnCalcularDP()
            .click()
            .and("exist")
    }

    clickBtnComprarPlan(){
        this.elements
            .btnComprarPlan()
            .click()
            .and("exist")
    }

    clickBtnConfirmar(){
        this.elements
            .btnConfirmar()
            .click()
            .and("exist")
    }

    clickBtnAceptOrCancel(){
        this.elements
            .btnAceptOrCancel()
            .click()
            .and("exist")
    }

    clickBtnFinalizarPago(){
        this.elements
            .btnFinalizarPago()
            .click()
            .and("exist")
    }

    clickBtnCheckbox(){
        this.elements
            .btnCheckbox()
            .click()
            .and("exist")
    }

    clickBtnAceptar(){
        this.elements
            .btnAceptar()
            .click()
            .and("exist")
    }

    typeInputPlacaVehiculo(value) {
        this.elements
            .inputPlacaVehiculo()
            .eq(0)
            .type(value)
    }

    

    clickBtnCotizarVehiculo() {
        this.elements
            .btnCotizarVehiculo()
            .should("be.visible")
            .click()
    }

    clickBtnSVTipoPlan(index) {
        this.elements
            .btnSVTipoPlan(index)
            .should("be.visible")
            .click()
    }
 
    selectSVDestinoViaje(value) {
        this.elements
            .selectSVDestinoViaje()
            .should("be.visible")
            .click()
            .type(value + '{downArrow}' + '{enter}')
    }

    selectSVDestinoViaje(value) {
        this.elements
            .selectSVDestinoViaje()
            .should("be.visible")
            .click()
            .type(value + '{downArrow}' + '{enter}')
    }

    selectCalendarioSalidaViaje() {
        this.elements
            .selectCalendarSalidaViaje()
            .should("be.visible")
            .click()       
    }

    selectCalendarioRegresoViaje() {
        this.elements
            .selectCalendarRegresoViaje()
            .should("be.visible")
            .click()
    }


    selectFechaSalida() {
        this.elements
            .selectFechaRegreso()
            .eq(0)
            .click()
    }

    selectFechaRegreso() {
        this.elements
            .selectFechaRegreso()
            .eq(1)
            .click()
    }

    clickBtnCalcular() {
        this.elements
            .btnCalcular()
            .should("be.visible")
            .click()
    }

    selectTipoIdentificacion() {
        this.elements
            .selectTipoIdentificacion()
            .click()
    }

    selectOptionTipoIdentificacion(option) {
        this.elements
            .selectOption()
            .find('li')
            .eq(option)
            .click()
    }

    selectOption(option) {
        this.elements
            .selectOption()
            .find('li')
            .eq(option)
            .click()
    }



    selectDia(pos) {
        this.elements
            .dia(pos)
            .click()
    }

    selectMes(pos) {
        this.elements
            .mes(pos)
            .click()
    }

    selectAnio(pos) {
        this.elements
            .anio(pos)
            .click()
    }

    clickBtnCalcularDP() {
        this.elements
            .btnCalcularDP()
            .should("be.visible")
            .click()
    }

    selectGenero(index) {
        this.elements
            .selectGenero()
            .eq(index)
            .click()
    }   
}


module.exports = new cotizador();