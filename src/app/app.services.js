angular.module('starter.common.services',[])
  .factory('commonLoading', ['$ionicLoading', function ($ionicLoading) {
    return{
      loaded: function () {
        console.log('loaded');
        //$ionicLoading.hide();
      }
    }
  }])
  .factory('commonAlert', [function () {
    function show(msg){
      var bodyElem =  document.getElementsByTagName('body')[0];
      var alert = document.createElement('div');
      alert.setAttribute('class','g-alert-msg');
      alert.innerHTML = '<span>' + msg + '</span>';
      bodyElem.appendChild(alert);

      setTimeout(function () {
        alert.setAttribute('class','g-alert-msg g-alert-hide');
      },2000);

      setTimeout(function () {
        bodyElem.removeChild(alert);
      },3500)
    }
    return{
      show: show
    }
  }])

;