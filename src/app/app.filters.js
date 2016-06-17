/**
 * Created by khongyan on 16/5/11.
 */
angular.module('starter.filters',[])

.filter('moneyCh', function () {
  return function (money) {
    return money + '元'
  }
})

.filter('orderStatus', function () {
  //TODO: 每种订单的状态需要参考接口，暂时定为 0 1 2
  return function (orderStatus) {
    if (orderStatus == 0) return '参拍中';
    if (orderStatus == 1) return '已拍下';
    if (orderStatus == 2) return '未竞得';
  }
});