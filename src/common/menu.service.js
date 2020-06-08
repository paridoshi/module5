(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getFavMenuItem = function (sname) {
    var config = {};
    console.log("menu number :" + sname);
    console.log("path :" + ApiPath);

    return $http.get(ApiPath + '/menu_items/' + sname + '.json').then(function (response) {

      return response;
    })
  };

  service.setData = function (data) {
    service.myInfo=data;
  }
  service.getData = function(){
    return service.myInfo;
  }
}
//





})();
