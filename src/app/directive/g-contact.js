/**
 * Created by khongyan on 16/5/10.
 * 页面底部打电话directive
 */
;(function () {
  angular
    .module('starter')
    .directive('gContact', contactDirective);

  /**
   * 联系我们directive
   * @returns {{restrict: string, replace: boolean, templateUrl: string}}
   */

  function contactDirective(){
    return{
      restrict: 'EA',
      replace: true,
      templateUrl: '/static_tpl/g-contact.html'
    }
  }

})();