/**
 * Created by kenghongyan on 2016/6/23.
 */
;(function () {
  angular
    .module('starter')
    .directive('gTabSwitch', gTabSwitch);

  gTabSwitch.$inject = [];

  /**
   * gTabSwitch directive
   * 1.tabs = [{
   *   'title': 'xxx',每个tab的名字
   *   'handleFunc': function(){ 点击后的回调函数
   *
   *   },
   *   ……
   * }]
   * 2.default-tab 默认选中第几个tab，默认是0
   * @returns {{restrict: string, replace: boolean, scope: {tabs: string, handFunc: string}, templateUrl: string, link: link}}
   */

  function gTabSwitch(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        tabs: '=',
        defaultTab: '='
      },
      templateUrl: '/static_tpl/g-tab-switch.html',
      link: function (scope, element, attrs) {

        var tabs = scope.tabs;
        var defaultTab = scope.defaultTab ? scope.defaultTab : 0;

        console.log(scope.tabs)
        scope.defaultTab = defaultTab;
        tabs && tabs[defaultTab].handleFunc && tabs[defaultTab].handleFunc();

        scope.switchTo = function (index) {
          element.find('a').removeClass('cur');
          element.find('a').eq(index).addClass('cur');
          scope.tabs[index].handleFunc && scope.tabs[index].handleFunc()
        }
      }
    }
  }
})();