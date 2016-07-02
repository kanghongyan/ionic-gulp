/**
 * Created by kenghongyan on 2016/6/27.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('OrderListDoneController', OrderListDoneController);

  OrderListDoneController.$inject = ['$scope', 'OrderService', '$state'];

  function OrderListDoneController($scope, OrderService, $state) {

    var vm = $scope;

    vm.hideTabs = true;//不显示tab

    vm.curTab = 0;
    vm.orderListAll = [];
    vm.orderListUnpay = [];
    vm.orderListUnsend = [];

    vm.loadMore = loadMore;

    //待付款
    vm.ids = [];
    vm.selectedIds = [];
    vm.isSelected = isSelected;
    vm.isSelectedSection = isSelectedSection;
    vm.isSelectedAll = isSelectedAll;
    vm.updateCheck = updateCheck;
    vm.updateCheckSection = updateCheckSection;
    vm.updateCheckAll = updateCheckAll;

    //支付
    vm.toPay = toPay;
    vm.toPayAll = toPayAll;



    //=== start ===

    vm.tabsObj = [{
      'title': "全部订单",
      'handleFunc': function () {
        vm.curTab = 0;
        loadMore();
      }
    },{
      'title': "待付款",
      'handleFunc': function () {
        vm.curTab = 1;
        vm.orderListUnpay = [];

        OrderService.getOrderUnPay()
          .then(function (data) {
            Array.prototype.push.apply(vm.orderListUnpay, data.list);
            vm.orderListUnpay.map(function (list, index) {
              vm.ids[index] = [];
              list.item.map(function (itemIn) {
                vm.ids[index].push(itemIn.id)
              })
            });
            vm.selectedIds = angular.copy(vm.ids)
          });
      }
    },{
      'title': "待发货",
      'handleFunc': function () {
        vm.curTab = 2;
         console.log('fff')
      }
    },{
      'title': "待收货",
      'handleFunc': function () {
        vm.curTab = 3;
      }
    },{
      'title': "已收货",
      'handleFunc': function () {
        vm.curTab = 4;
      }
    }];

    //=====

    //loadMore
    function loadMore(){
      OrderService.getOrderDone()
        .then(function (data) {
          console.log(data)
          vm.orderList = data
        })
    }
    //pay
    function toPay(){
      //TODO:判断是否可直接支付

      var canPay = false;
      //TODO: 请求接口判断

      if(!canPay){
        //跳转到支付页面
        $state.go('tab.orderPay')
      }else {
        //TODO: 直接支付
      }
    }

    function toPayAll(){
      console.log(vm.selectedIds);
      //TODO: 接口
    }
    //method
    function isSelected(id){
      var ids = id.split('-');
      return vm.selectedIds[ids[0]] && vm.selectedIds[ids[0]].indexOf(ids[1]) > -1;
    }

    function isSelectedSection(sectionId, len){
      return vm.selectedIds[sectionId] && vm.selectedIds[sectionId].length === len;
    }

    function isSelectedAll(){
      for(var i= 0, len = vm.selectedIds.length; i<len; i++ ){
        if(vm.ids[i] && vm.selectedIds[i].length !== vm.ids[i].length){
          return false
        }
      }
      return true
    }

    function updateCheckAll($event){
      var action = $event.target.checked ? 'add' : 'remove';
      for (var i=0; i< vm.ids.length; i++){
        for(var j=0; j< vm.ids[i].length; j++){
          updateCheck(null, i + '-' + vm.ids[i][j], action)
        }
      }
    }

    function updateCheck($event, id, actionStr){
      var action = '';
      var ids = id.split('-');
      var selectedIds = vm.selectedIds[ids[0]];
      var selectId = ids[1];
      if($event){
        action = $event.target.checked ? 'add' : 'remove';
      }else {
        action = actionStr
      }


      if(action === 'add' && selectedIds.indexOf(selectId) === -1){
        vm.selectedIds[ids[0]].push(selectId)
      }
      if(action === 'remove' && selectedIds.indexOf(selectId) !== -1){
        var pos = selectedIds.indexOf(selectId);
        vm.selectedIds[ids[0]].splice(pos, 1)
      }

    }

    function updateCheckSection($event, sectionId){
      var action = $event.target.checked ? 'add' : 'remove';
      for (var i=0; i< vm.ids[sectionId].length; i++){
        updateCheck(null, sectionId + '-' + vm.ids[sectionId][i], action)
      }
    }

  }

})();