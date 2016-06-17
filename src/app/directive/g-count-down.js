/**
 * Created by kenghongyan on 2016/6/15.
 * 倒计时
 *
 * init-value: 服务端传入的开始或结束时间
 * serve-time: 服务端时间
 * count-flag: 0 表示还未开始，文字表述为还有xxxx开始，
 *             1 表示已经开始，文字表述为还有xxxx结束
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .directive('gCountDown',gCountDown);

  gCountDown.$inject = ['$timeout'];

  function gCountDown($timeout){
    return{
      restrict: 'E',
      replace: true,
      scope: {
        initValue: '=',
        serverTime: '=',
        countFlag: '='
      },
      link: function (scope, element, attrs) {
        //TODO:倒计时具体实现
        console.log(scope.initValue);


        var limitTime = new Date(parseInt(scope.initValue)).getTime();
        var disTime = scope.serverTime - new Date().getTime();
        var text = '';
        var timeFlag = scope.countFlag ? '结束' : '开始';

        var timeoutId = null;

        //===start===

        ticker();

        //===========

        function ticker(){
          timeoutId = $timeout(function () {
            limitTime += 1;
            text = getCountDown(limitTime);
            if(!text){
              $timeout.cancel(timeoutId);
              updateText("已" + timeFlag);
              return;
            }
            updateText(text + timeFlag);
            ticker();

          },1000)
        }

        function updateText(str){
          element.html(str);
        }


        function getCountDown(time, disTime ,format){
          var ts = disTime ? Math.floor(time - (Date.now() - disTime) / 1000) : (time - Date.now()) / 1000;
          if(ts <= 0){
            return '';
          }
          var day = Math.floor(ts / 86400);
          ts -= day*86400;
          var hour = Math.floor(ts / 3600);
          ts -= hour*3600;
          var minute = Math.floor(ts / 60) < 10 ? '0' + Math.floor(ts / 60): Math.floor(ts / 60);
          ts -= minute*60;
          var second = Math.floor(ts) < 10 ? '0' + Math.floor(ts) : Math.floor(ts);

          switch (format){
            case 'hh:mm:ss':
              return day + ':' + minute + ':' + second;
            default:
              return day + '天' + hour + '小时' + minute + '分' + second + '秒'
          }
        }


        element.on('$destroy', function () {
          $timeout.cancel(timeoutId)
        })
      }
    }
  }

})();