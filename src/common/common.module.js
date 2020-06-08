(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://sheltered-atoll-75453.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
