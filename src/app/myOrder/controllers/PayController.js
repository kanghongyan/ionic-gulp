/**
 * Created by kenghongyan on 2016/6/24.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('PayController', PayController);

  PayController.$inject = ['$scope', '$rootScope'];

  function PayController($scope, $rootScope) {
    var vm = $scope;

    vm.hideTabs = true;
    vm.toPay = toPay;



    function toPay(){
      //TODO: 支付逻辑
      console.log('pay')
    }

    console.log('fff')
  }

})();