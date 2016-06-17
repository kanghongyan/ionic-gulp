/**
 * Created by kenghongyan on 2016/6/15.
 */
;(function () {
  'use strict';
  angular
    .module('starter')
    .service('OrderService',OrderService);

  OrderService.$inject = ['$http', '$q', 'ServerConfiguration'];

  function OrderService($http, $q, CONFIG){

    //订单请求地址
    var apiPath = {
      'orderList': CONFIG.domain + '/app/myOrder/data.json',
      'orderDetail': CONFIG.domain + '/'
    };

    //============
    return{
      getOrderList: getOrderList
    };
    //============



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
      }).success(getOrderListComplete)
        .error(getOrderListFailed);

      return defer.promise;

      function getOrderListComplete(ret){
        defer.resolve(ret.data);
      }

      function getOrderListFailed(error){
        console.log(error);
        defer.reject('数据错误')
      }
    }

  }

})();