/**
 * Created by kenghongyan on 2016/6/17.
 */
;(function () {
  angular
    .module('starter')
    .factory('MessageService', MessageService);

  MessageService.$inject = ['$http', '$q', 'ServerConfiguration'];

  function MessageService($http, $q, CONFIG){

    var apiPath = {
      'getMsgList': CONFIG.domain + '/app/myMessage/data.json',
      'deleteMsg': CONFIG.domain + '/api/deleteMessage',
      'readMsg': CONFIG.domain + 'api/readMsg'
    };

    return {
      getMessageList: getMessageList,
      deleteMsg: deleteMsg
    };

    /**
     * 消息列表获取
     * @param params
     * @returns {*}
     */
    function getMessageList(params){
      var defer = $q.defer();
      $http({
        method: 'get',
        url: apiPath.getMsgList,
        params: params
      }).success(getMsgListSuccess)
        .error(getMsgListFailed);

      return defer.promise;

      function getMsgListSuccess(ret){
        defer.resolve(ret.data);
      }
      function getMsgListFailed(error){
        defer.reject(error);
      }

    }

    /**
     * 消息删除
     * @param params
     */
    function deleteMsg(params){
      var defer = $q.defer();
      $http({
        method: 'delete',
        url: apiPath.deleteMsg,
        params: params
      }).success(deleteMsgSuccess)
        .error(deleteMsgFailed);

      return defer.promise;

      function deleteMsgSuccess(ret){
        defer.resolve(ret);
      }
      function deleteMsgFailed(error){
        defer.reject(error);
      }
    }

    /**
     * 阅读消息
     * @param params
     * @returns {*}
     */
    function readMsg(params){
      var defer = $q.defer();
      $http({
        method: 'post',
        url: apiPath.readMsg,
        params: params
      }).success(readMsgSuccess)
        .error(readMsgFailed);
      return defer.promise;

      function readMsgSuccess(ret){

      }
      function readMsgFailed(error){

      }
    }

  }
})();