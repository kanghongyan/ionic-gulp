/**
 * Created by kenghongyan on 2016/6/14.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .factory('AccountService', AccountService);

  AccountService.$inject = ['$rootScope', '$http', '$q', 'ServerConfiguration'];

  function AccountService($rootScope, $http, $q, CONFIG) {

    //个人中心请求地址
    var apiPath = {
      'message': CONFIG.domain + '/api/get/xx',
      'other': CONFIG.domain + '/api/xx'
    };

    //============
    return{
      getMessage: getMessage
    };
    //============


    /**
     * 获取消息条数
     * @param memberId
     */
    function getMessage(memberId){
      var defer = $q.defer();
      var url = apiPath.message,
        params = {
          'param1': 124,
          'param2': 222
        }

      $http({
        method: 'get',
        url: url,
        params: params
      }).success(getMessageComplete)
        .error(getMessageFailed);

      return defer.promise;

      function getMessageComplete(ret){
        console.log(ret);
        defer.resolve(ret);
      }

      function getMessageFailed(error){
        console.log(error);
        defer.reject('数据错误')
      }
    }

  }

})();