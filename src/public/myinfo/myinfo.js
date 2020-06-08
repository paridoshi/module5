(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);
    MyInfoController.$inject=['MenuService','ApiPath'];

    function MyInfoController(MenuService,ApiPath) {

        var infoCtrl = this;
              infoCtrl.mydata =  MenuService.getData();
              infoCtrl.imgpath= ApiPath ;
        //infoCtrl.imgpath=ApiPath+'/images'+infoCtrl.mydata.data.short_name+'.jpg';

        console.log(infoCtrl);



        }



})();
