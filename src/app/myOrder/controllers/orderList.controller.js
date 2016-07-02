/**
 * Created by kenghongyan on 2016/6/15.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('orderListController', orderListController);

  orderListController.$inject = ['$scope', 'OrderService', '$stateParams', '$state'];

  function orderListController($scope, OrderService, $routeParams, $state){

    var vm = $scope;

    console.log($routeParams);

    vm.hideTabs = true;//不显示tab

    vm.PAGE_SIZE = 5;
    vm.ORDER_TYPE = $routeParams.orderStatus;

    vm.hasData = true;
    vm.orderLists = [];
    vm.loadMore = function () {

    };
    //======= start ========

    //参拍中
    if(vm.ORDER_TYPE === '0'){
      vm.loadMore = loadMore;
      vm.loadMore();
    }

    //已竞得


    //未竞得
    if(vm.ORDER_TYPE === '2'){
      vm.loadMore = loadMoreLost;
      vm.loadMore();
    }

    //======================

    //参拍中-加载更多
    function loadMore(){
      console.log('loadingMore');
      OrderService.getOrderList()
        .then(function (ret) {
          console.log(ret);
          //TODO: SERVER TIME
          //TODO: COUNT DOWN
          vm.countDownInit = ret.endTime ? ret.endTime : ret.startTime;
          vm.countDownServeTime = new Date();

          vm.orderLists.push.apply(vm.orderLists, ret.list);
          vm.$broadcast('scroll.infiniteScrollComplete');
          if(ret.list.length < vm.PAGE_SIZE){
            vm.hasData = false
          }
        })
    }

    //已竞得-加载更多

    //未竞得-加载更多
    function loadMoreLost(){
      //TODO:请求接口，同上
      OrderService.getOrderList()
        .then(function (ret) {
          console.log(ret);
          //TODO: SERVER TIME
          //TODO: COUNT DOWN
          vm.countDownInit = ret.endTime ? ret.endTime : ret.startTime;
          vm.countDownServeTime = new Date();

          vm.orderLists.push.apply(vm.orderLists, ret.list);
          vm.$broadcast('scroll.infiniteScrollComplete');
          if(ret.list.length < vm.PAGE_SIZE){
            vm.hasData = false
          }
        })
    }
  }
})();