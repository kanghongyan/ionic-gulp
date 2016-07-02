/**
 * Created by kenghongyan on 2016/6/28.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('DeliverInfoController', DeliverInfoController);

  DeliverInfoController.$inject = ['$scope'];

  function DeliverInfoController($scope){
    var vm = $scope;

    vm.showMore = showMore;
    vm.showFlag = false;//更多
    vm.goodsListLess = false;//是否小于2个

    //=====start=====

    //TODO: 请求接口

    //==============

    function showMore(){
      vm.showFlag = ! vm.showFlag;
    }


  }
})();