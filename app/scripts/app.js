'use strict';

/**
 * @ngdoc overview
 * @name angularJsAriaApp
 * @description
 * # angularJsAriaApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsAriaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('showAttrs', function() {
  return function(scope, el, attrs) {
    var pre = document.createElement('pre');
    el.after(pre); 
    scope.$watch(function() {
      var attrs = {};
      Array.prototype.slice.call(el[0].attributes, 0).forEach(function(item) {
        if (item.name !== 'show-attrs') {
          attrs[item.name] = item.value;
        }
      });
      return attrs;
    }, function(newAttrs, oldAttrs) {
      pre.innerText = JSON.stringify(newAttrs, null, 2);
    }, true);
  }
});
