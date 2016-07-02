/**
 * Created by kenghongyan on 2016/6/15.
 */
;(function () {
  'use strict';
  angular
    .module('starter')
    .service('OrderService',OrderService);

  OrderService.$inject = ['$http', '$q', 'ServerConfiguration', 'commonAlert'];

  function OrderService($http, $q, CONFIG, commonAlert){

    //订单请求地址
    var apiPath = {
      'orderList': CONFIG.domain + '/app/myOrder/data.json',
      'orderDetail': CONFIG.domain + '/dd/app/myOrder/data-orderDetail.json',
      'getRecord': CONFIG.domain + '/app/myOrder/data-record.json',
      'getOrderUnPay': CONFIG.domain + '/app/myOrder/data-unpay.json',
      'getOrderDone': CONFIG.domain + '/app/myOrder/data-order-list.json'
    };

    //============
    return{
      getOrderList: getOrderList,
      getOrderDetail: getOrderDetail,
      getRecord: getRecord,
      getOrderUnPay: getOrderUnPay,
      getOrderDone: getOrderDone
    };
    //============

    /**
     * 已竞得
     */
    function getOrderDone(){
      var defer = $q.defer();

      $http({
        method: 'get',
        url: apiPath.getOrderDone
      }).success(function (ret) {
        defer.resolve(ret.data)
      }).error(function (error) {
        commonAlert.show(error);
        defer.reject(error)
      });

      return defer.promise;
    }
    /**
     * 订单列表-待付款
     */
    function getOrderUnPay(){
      var defer = $q.defer();

      $http({
        method: 'get',
        url: apiPath.getOrderUnPay
      }).success(function (ret) {
        defer.resolve(ret.data)
      }).error(function (error) {
        commonAlert.show(error);
        defer.reject(error)
      });

      return defer.promise;
    }
    /**
     * 订单详情-出价记录接口
     * @returns {*}
     */
    function getRecord() {
      var defer = $q.defer();
      var url = apiPath.getRecord,
        params = {
          'param1': 124,
          'param2': 222
        };

      $http({
        method: 'get',
        url: url,
        params: params
      }).success(function (ret) {
          defer.resolve(ret.data)
        })
        .error(function (error) {
          commonAlert.show(error);
          defer.reject(error)
        });

      return defer.promise;
    }

    /**
     * 订单详情接口
     * @returns {*}
     */
    function getOrderDetail(){
      var defer = $q.defer();
      var url = apiPath.orderDetail,
        params = {
          'param1': 124,
          'param2': 222
        };

      $http({
        method: 'get',
        url: url,
        params: params
      }).success(function (ret) {
          console.log(ret);
          defer.resolve(ret.data)
        })
        .error(function (error) {
          console.log('请求错误');
          //TODO:
          commonAlert.show('测试请求错误弹窗');
          defer.reject(error)
        });

      return defer.promise;
    }

    /**
     * 订单列表接口
     * @param memberId
     * @returns {*}
     */
    function getOrderList(memberId){
      var defer = $q.defer();
      var url = apiPath.orderList,
        params = {
          'param1': 124,
          'param2': 222
        };

      $http({
        method: 'get',
        url: url,
        params: params
      }).success(function (ret) {
          defer.resolve(ret.data);
        })
        .error(function (error) {
          commonAlert.show(error);
          defer.reject('数据错误');
        });

      return defer.promise;
    }

  }

})();