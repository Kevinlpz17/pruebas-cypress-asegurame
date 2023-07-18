
class administrativoCR {
    elements = {
        inputDefault: () => cy.get('.MuiInputBase-input'),
        btnLogin: () => cy.get('.relative > .MuiButtonBase-root'),
        valUser: () => cy.get('.bg-general > .gap-3 > .flex > .fontPSemiBold'),
        bitacoraState: () => cy.get('.col-span-3.grid > :nth-child(2) > .mt-5'),
        filtro: () => cy.get('.MuiSelect-select'),
        filterOption: () => cy.get('.MuiPaper-root > .MuiList-root'),
        btnTabPrincipal: (index) => cy.get(`.css-b3n9n5 > .MuiDrawer-root > .MuiPaper-root > .py-4 > .h-full > :nth-child(1) > :nth-child(${index}) > .w-full > .MuiListItemText-root > .MuiTypography-root`),
        btnSubTabPrincipal: (index) => cy.get(`.css-b3n9n5 > .MuiDrawer-root > .MuiPaper-root > .py-4 > .h-full > :nth-child(2) > .MuiList-root > :nth-child(${index}) > .w-full > .MuiListItemText-root > .MuiTypography-root`),
        btnLogout: () => cy.get(".css-b3n9n5 > .MuiDrawer-root > .MuiPaper-root > .py-4 > .h-full > :nth-child(2) > .MuiList-root > :nth-child(3) > .w-full > .MuiListItemText-root > .MuiTypography-root"),
        inputSearch: () => cy.get(".MuiInputBase-input"),
        btnVerCotizacion: () => cy.get('.items-center > .MuiButtonBase-root'),
        btnVerAliado: () => cy.get('.items-center > .MuiButtonBase-root').eq(1),
        btnTabOportunidad: (clase) => cy.get(`#${clase}`),

        //Aliados
        inputAliado: () => cy.get('.flex > .MuiFormControl-root > .MuiInputBase-root'),
        btnCrearAliado: () => cy.get('.relative > .MuiButtonBase-root'),

        //Editar oportunidad
        btnIconLock: () => cy.get('.cont-iconLock'),
        btnAceptarEditEtapa: () => cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root'),
        
        //Negociación
        btnSelectPlan: (index) => cy.get(`:nth-child(${index}) > .justify-end > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input`),
        
        //Documentación
        btnAcceptEmisión: () => cy.get('.grid-cols-1 > .card-tabs > .mt-5 > .grid-cols-2 > :nth-child(1) > .MuiButtonBase-root'),
        
        //Emisión
        btnSubirDocumento: (clase, index) => cy.get(`${clase} > :nth-child(${index}) > .mt-5 > .grid-cols-2 > .relative > .MuiButtonBase-root`),


        btnVerPerfil: () => cy.get('.css-b3n9n5 > .MuiDrawer-root > .MuiPaper-root > .py-4 > .h-full > :nth-child(2) > .MuiList-root > :nth-child(1)'),

        descargarArchivo: () => cy.get('.p-16 > .items-center.gap-3 > :nth-child(2) > :nth-child(2)'),
        //Editar Perfil
        btnEditPerfil: () => cy.get('.px-3.relative > .px-3'),
        btnSaveCambios: () => cy.get('.relative > .MuiButtonBase-root'),
        lblValNameUserProfile: () => cy.get(':nth-child(1) > .MuiTypography-p'),
        lblValCorreoProfile: () => cy.get('.col-span-2 > .MuiTypography-p'),
            btnCambiarPass: () => cy.get('.bg-primary'),

        //Configuracion
        btnConfiguracion: () => cy.get('.css-b3n9n5 > .MuiDrawer-root > .MuiPaper-root > .py-4 > .h-full > :nth-child(2) > .MuiList-root > :nth-child(2) > .w-full > .MuiListItemText-root > .MuiTypography-root'),
        btnAddUser: () => cy.get('[data-testid="AddCircleIcon"]'),
        btnViewUser: () =>  cy.get('.px-3.flex > .MuiButtonBase-root'),
        btnDesactivarPermiso: (index) => cy.get(`:nth-child(${index}) > :nth-child(2) > .m-1 > [style="position: relative; display: inline-block; text-align: left; opacity: 1; direction: ltr; border-radius: 14px; transition: opacity 0.25s ease 0s; touch-action: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none;"] > .react-switch-bg`),
        btnDesactivarUsuario: () => cy.get('.p-16 > :nth-child(2) > .m-1'),

        lblValidateDatos: () => cy.get(".MuiTypography-root"),
        lblValidatePrimas: () => cy.get(".css-1uk1gs8"),
        lblTotalAnualPago: () => cy.get('.text-3xl'),
        btnMetodoPago: () => cy.get(".card-buttom"),
        btnHabiCargoAuto: (index) => cy.get(`:nth-child(5) > .mt-5 > .grid-cols-2 > :nth-child(${index}) > .MuiButtonBase-root`),
        btnNextEtapa: () => cy.get('.MuiButtonGroup-root > .MuiButtonBase-root'),
        btnUnlock: () => cy.get('.cont-iconLock'),
        btnAllowEditar: () => cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root'),
        uploadFileCondiciones: () => cy.get('.contenedor-3 > :nth-child(1) > :nth-child(1) > .mt-5 > .grid-cols-2 > .relative > .MuiButtonBase-root'),
        aceptarEmision: () => cy.get('.grid-cols-1 > .card-tabs > .mt-5 > .grid-cols-2 > :nth-child(1) > .MuiButtonBase-root'),
        copyUrl: (idx) => cy.get(`:nth-child(${idx}) > .px-3.flex > :nth-child(1)`),
        btnInfoAliado: (index) => cy.get(`:nth-child(2) > .items-center > :nth-child(${index}) > .MuiButtonBase-root`)
    
    }
    
    //Functions

    clickCopyUrl(idx) {
        this.elements
            .copyUrl(idx)
            .click()
    }

    clickBtnVerPerfil() {
        this.elements
            .btnVerPerfil()
                .click()
    }

    openFilter() {
        this.elements
            .filtro()
            .should("be.visible")    
            .click()  
    }


    selectFilterOption(index) {
        this.elements
            .filterOption()
            .find('li')
            .eq(index)
            .click()
    }


    clickBtnCrearAliado() {
        this.elements
            .btnCrearAliado()
            .click()
            .and("be.visible")
    }


    typeInputAliado(index,value) {
        this.elements
            .inputAliado()
            .eq(index)
            .clear()
            .type(value)
            .and("be.visible")
    }

    typeInputDefault(value, index){
        this.elements
            .inputDefault()
            .and("be.visible")
            .eq(index)
            // .clear()
            
            .type(value)
    }

    clickBtnLogin(){
        this.elements
            .btnLogin()
            .click()
            .and("exist")
    }

    typeValUser(value){
        this.elements
            .valUser()
            .contains(value)
            .and("be.visible")
    }
    
    clickBtnTabPrincipal(index){
        this.elements
            .btnTabPrincipal(index)
            .click()
            .and("exist")
    }

    clickBtnSubTabPrincipal(index){
        this.elements
            .btnSubTabPrincipal(index)
            .click()
            .and("exist")
    }

    clickBtnLogout(){
        this.elements
            .btnLogout()
            .click()
    }

    clickBtnConfiguracion(){
        this.elements
            .btnConfiguracion()
            .click()
    }

    clickBtnAddUser(){
        this.elements
            .btnAddUser()
            .click()
    }

    clickBtnViewUser(){
        this.elements
            .btnViewUser()
            .click()
    }


    clickBtnDesactivarPermiso(index){
        this.elements
            .btnDesactivarPermiso(index)
            .click()
    }

    clickBtnDesactivarUsuario(index){
        this.elements
            .btnDesactivarUsuario(index)
            .click()
    }


    typeInputSearch(index, value){
        this.elements
            .inputSearch()
            .eq(index)
            .clear()
            .type(value)
    }
    
    clickBtnVerCotizacion(){
        this.elements
            .btnVerCotizacion()
            .eq(0)
            .and("be.visible")
            .click()
    }

    selectBitacoraState(index) {
        this.elements
            .bitacoraState()
            .children()
            .eq(index)
            .click()
    }


    clickBtnVerAliado(){
        this.elements
            .btnVerAliado()
            .click()
    }

    clickBtnIconLock(){
        this.elements
            .btnIconLock()
            .and("be.visible")
            .click()
    }

    clickbBtnAceptarEditEtapa(){
        this.elements
            .btnAceptarEditEtapa()
            .and("be.visible")
            .click()
    }

    clickbBtnSelectPlan(index){
        this.elements
            .btnSelectPlan(index)
            .click()
    }

    clickBtnAcceptEmisión(){
        this.elements
            .btnAcceptEmisión()
            .click()
    }
    
    clickBtnSubirDocumentos(clase, index){
        this.elements
            .btnSubirDocumento(clase, index)
            .click()
    }

    //Profile
    clickBtnEditPerfil(){
        this.elements
            .btnEditPerfil()
            .and("exist")
            .click()
    }

    clickSaveCambios(){
        this.elements
            .btnSaveCambios()
            .and("exist")
            .click()
    }

    typeLblValNameUserProfile(value){
        this.elements
            .lblValNameUserProfile()
            .contains(value)
    }

    typeLblCorreoProfile(value){
        this.elements
            .lblValCorreoProfile()
            .contains(value)
    }
    
    
    clickBtnCambiarPass(){
        this.elements
            .btnCambiarPass()
            .and("exist")
            .click()
    }

    //Profile

    clickBtnTabOportunidad(clase){
        this.elements
            .btnTabOportunidad(clase)
            .and("be.visible")
            .click()
    }

    typeLblValidateDatos(lbl){
        this.elements
            .lblValidateDatos()
            .contains(lbl)
    }

    typeLblValidatePrimas(lbl){
        this.elements
            .lblValidatePrimas()
            .contains(lbl)
    }

    clickBtnNextEtapa(){
        this.elements
            .btnNextEtapa()
            .click()
    }

    clickBtnMetodoPago(index){
        this.elements
            .btnMetodoPago()
            .eq(index)
            .click()
    }

    clickBtnHabiCargoAuto(index){
        this.elements
            .btnHabiCargoAuto(index)
            .click()
    }

    typeLblTotalAnual(value){
        this.elements
            .lblTotalAnualPago()
            .contains(value)
    }

    clickBtnUnlock() {
        this.elements
            .btnUnlock()
            .click()   
    }

    clickBtnAllowEditar() {
        this.elements
            .btnAllowEditar()
            .click()
    }

    selectUploadFileCondiciones() {
        this.elements
            .uploadFileCondiciones()
            .click()
            .selectFile("test.pdf")
    }


    selectAceptarEmision() {
        this.elements
            .aceptarEmision()
            .click()
    }

    clickBtnInfoAliado(index) {
        this.elements
            .btnInfoAliado(index)
            .click()
    }

    clickDescargarArchivo() {
        this.elements
            .descargarArchivo()
            .click()
    }
}

module.exports = new administrativoCR();