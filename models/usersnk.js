function userController() {
    this.userName = ko.observable("ola");
}



// Activates knockout.js
ko.applyBindings(new userController());