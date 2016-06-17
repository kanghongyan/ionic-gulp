/**
 * Created by kenghongyan on 2016/6/15.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('orderListController', orderListController);

  orderListController.$inject = ['$scope', 'OrderService', '$stateParams'];

  function orderListController($scope, OrderService, $routeParams){

    var vm = $scope;

    vm.PAGE_SIZE = 5;

    vm.orderAmt = 0;
    vm.thisPageCount = 0;
    vm.hasData = true;
    vm.orderLists = [];
    vm.loadMore = loadMore;

    //===============

    vm.loadMore();

    //===============

    //加载更多
    function loadMore(){
      console.log('loadingMore');
      OrderService.getOrderList()
        .then(function (ret) {
          console.log(ret);
          vm.orderAmt = ret.count;
          //TODO: SERVER TIME
          //TODO: COUNT DOWN
          vm.countDownInit = ret.endTime ? ret.endTime : ret.startTime;
          vm.countDownServeTime = new Date();

          vm.orderLists.push.apply(vm.orderLists, ret.list);
          vm.thisPageCount = ret.list.length;
          vm.$broadcast('scroll.infiniteScrollComplete');
          if(ret.list.length < vm.PAGE_SIZE){
            vm.hasData = false
          }
        })
    }

  }
})();