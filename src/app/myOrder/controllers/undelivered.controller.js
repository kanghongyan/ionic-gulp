/**
 * Created by kenghongyan on 2016/6/28.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('UndeliveredController', UndeliveredController);

  UndeliveredController.$inject = ['$scope'];

  function UndeliveredController($scope){
    console.log('undelivered');
    var vm = $scope;

    vm.showFlag = true;
    vm.showContent = showContent;


    function showContent(){
      vm.showFlag = !vm.showFlag
    }
  }
})();