(function () {
  "use strict";

  angular.module('public')
      .controller('RegistrationController', RegistrationController);
  RegistrationController.$inject=['MenuService','$q'];

 function RegistrationController(MenuService,q) {

  var reg = this;
reg.completed='';

  reg.submit = function () 
  {        reg.completed="T";
    reg.completed="F";
    //reg.completed = true;
    console.log('button clicked' + reg.menu_number);
    var promise  = MenuService.getFavMenuItem(reg.menu_number) ;
    promise.then(function(response){
        console.log(response);
        reg.completed="T";
      var myObj={
        data:response.data ,
        myName:reg.myName,
        lastName:reg.lastName,
        emailId:reg.emailId,
        phone:reg.phone} ;
        MenuService.setData(myObj);
    })
        .catch(function(error){
            console.log(error);
          reg.completed="F";

        })

  };

}

})();
