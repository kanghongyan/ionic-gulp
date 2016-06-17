/**
 * Created by khongyan on 16/5/10.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .factory('CanDoService', CanDoService);

  CanDoService.$inject = '';

  function CanDoService(){
    return{
      abc: function () {
        return 'aaa';

      }
    }
  }

})();