/**
 * Created by khongyan on 16/5/10.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('DashController', DashController);

  DashController.$inject = ['$scope', '$ionicActionSheet', '$timeout'];


  function DashController($scope, $ionicActionSheet, $timeout){

    var vm = $scope;

    vm.today = new Date();
    console.log('c99');

    $('#zepto-test').text('replace')

  }
})();