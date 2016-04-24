'use strict';

angular.module('testAppApp.auth', [
  'testAppApp.constants',
  'testAppApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
