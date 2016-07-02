/**
 * Created by kenghongyan on 2016/6/24.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .directive('gHideTabs', gHideTabs);

  gHideTabs.$inject = ['$rootScope'];

  /**
   * 是否隐藏底部tab directive
   * @param $rootScope
   * @returns {{restrict: string, link: link}}
   */

  function gHideTabs($rootScope) {
    return{
      restrict: 'A',
      link: function (scope, element, attrs) {

        scope.$on('$ionicView.beforeEnter', function () {
          scope.$watch(attrs.gHideTabs, function (newValue, oldValue) {
            $rootScope.hideTabs = newValue;
          });
        });

        scope.$on('$ionicView.beforeLeave', function (newValue, oldValue) {
          $rootScope.hideTabs = false;
        });

      }
    }
  }

})();