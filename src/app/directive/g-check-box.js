/**
 * Created by kenghongyan on 2016/6/27.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .directive('gCheckBox', gCheckBox);

  gCheckBox.$inject = [];

  /**
   * checkBox directive
   *
   * ngChecked:func
   * ngClick:func
   *
   * @returns {{restrict: string, replace: boolean, scope: {ngChecked: string, ngClick: string}, templateUrl: string, link: link}}
   */

  function gCheckBox(){
    return{
      restrict: 'E',
      replace: true,
      scope: {
        ngChecked: '&',
        ngClick: '&'
      },
      templateUrl: '/static_tpl/g-check-box.html',
      link: function (scope, element, attrs) {
        var checkIcon = element.find('i').eq(0);

        scope.handleChecked = function () {

          var checkFlag = scope.ngChecked ? scope.ngChecked() : false;
          checkFlag ?  checkIcon.addClass('icon-checked') :  checkIcon.removeClass('icon-checked');
          return checkFlag
        };

        scope.handleClick = function ($event) {
          var checkbox = $event.target;
          checkbox.checked ?  checkIcon.addClass('icon-checked') :  checkIcon.removeClass('icon-checked');
          scope.ngClick && scope.ngChecked();
        }
      }
    }
  }

})();