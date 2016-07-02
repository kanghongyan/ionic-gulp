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
    if (orderStatus === 0) return '参拍中';
    if (orderStatus === 1) return '已拍下';
    if (orderStatus === 2) return '未竞得';
  }
})

.filter('msgStatus', function () {
  //TODO: 信息状态，暂定0，1，2
  return function (msgStatus) {
    if (msgStatus === 0) return '专场即将开始';
    if (msgStatus === 1) return '拍品成交';
    if (msgStatus === 2) return '专场即将开始';
  }
})

.filter('orderEarnStatus', function () {
  //TODO: 已竞得订单状态
  return function (status) {
    if (status === 0) return '待付款';
    if (status === 1) return '待发货';
    if (status === 2) return '待收货';
    if (status === 3) return '已收货';
  }
});