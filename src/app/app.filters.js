/**
 * Created by khongyan on 16/5/11.
 */
angular.module('starter.filters',[])

.filter('moneyCh', function () {
  return function (money) {
    return money + '元'
  }
});