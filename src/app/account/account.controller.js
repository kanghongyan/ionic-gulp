/**
 * Created by khongyan on 16/6/14.
 */
;(function () {
  'use strict';

  angular
      .module('starter')
      .controller('AccountController', AccountController);

  AccountController.$inject = ['$scope', 'AccountService'];


  function AccountController($scope, Account){

    var vm = $scope;

    vm.portraitUrl = 'img/portrait.png';


    Account.getMessage(123)
      .then(function (ret) {
        //todo:处理数据
        console.log(ret)
      });

    console.log('account page');

  }
})();