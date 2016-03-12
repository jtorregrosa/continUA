'use strict';

angular.module('continuaApp').service('dataService', function($http) {
  delete $http.defaults.headers.common['X-Requested-With'];
  this.findAllActivities = function(callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity',
      params: 'size=100'
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
        errorCallbackFunc();
    });
  };

  this.findActivity = function(id, callbackFunc, errorCallbackFunc) {
    $http({
      method: 'GET',
      url: 'http://continua-jtorregrosa.rhcloud.com/activity/' + id
    }).success(function(data) {
      // With the data succesfully returned, call our callback
      callbackFunc(data);
    }).error(function() {
      errorCallbackFunc();
    });
  };
});
