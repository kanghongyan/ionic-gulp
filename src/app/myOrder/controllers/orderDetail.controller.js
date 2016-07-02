/**
 * Created by kenghongyan on 2016/6/15.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('OrderDetailController', OrderDetailController);

  OrderDetailController.$inject = ['$scope', 'OrderService', '$ionicScrollDelegate'];

  function OrderDetailController($scope, OrderService, $ionicScrollDelegate){
    var vm = $scope;

    vm.recordHasMore = false;
    vm.scrollHasMore = true;
    vm.loadMoreRecord = loadMoreRecord;

    // ==== start ====
    OrderService.getOrderDetail()
      .then(function (data) {
        console.log(data);
        //todo: 根据返回条数判断是否还有数据加载
        if(true){
          vm.recordHasMore = true;
        }
      });
    //====================

    function loadMoreRecord() {
      $ionicScrollDelegate.$getByHandle('recordLoad');
      OrderService.getRecord()
        .then(function (data) {
          console.log(data);
          //todo: 判断所有数据加载完毕
          vm.$broadcast('scroll.infiniteScrollComplete');
          vm.scrollHasMore = false
        })
    }
  }

})();