/**
 * Created by kenghongyan on 2016/6/28.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('DeliveredController', DeliveredController);

  DeliveredController.$inject = ['$scope'];

  function DeliveredController($scope){
    console.log('delivered');
    var vm = $scope;

    vm.showFlag = true;
    vm.showContent = showContent;


    function showContent(){
      vm.showFlag = !vm.showFlag
    }
  }
})();