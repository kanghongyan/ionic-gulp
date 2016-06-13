/**
 * Created by khongyan on 16/5/10.
 */
;(function () {
  angular
    .module('starter')
    .directive('testDirective', testDirective);

  function testDirective(){
    return{
      restrict: 'EA',
      replace: false,
      template: '<a href="baidu.com">sdfsfdf</a>'
    }
  }

})();