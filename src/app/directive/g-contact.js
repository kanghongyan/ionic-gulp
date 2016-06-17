/**
 * Created by khongyan on 16/5/10.
 * 页面底部打电话directive
 */
;(function () {
  angular
    .module('starter')
    .directive('gContact', contactDirective);

  function contactDirective(){
    return{
      restrict: 'EA',
      replace: true,
      templateUrl: '/static_tpl/g-contact.html'
    }
  }

})();