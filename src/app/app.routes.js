// Routes config
angular.module('starter.routes', [])


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tab directive
      .state('tab', {
        url: '',
        templateUrl: 'app/tabs/tabs.html',
        abstract: true,
        controller: function ($scope) {

        }
      })

      .state('tab.dash', {
        url: '/index',
        views: {
          'tab-dash': {
            templateUrl: 'app/dash/tab-dash.html',
            controller: 'DashController'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'app/account/account.html',
            controller: 'AccountController'
          }
        },
        //resolve: provide your controller with content or data that is custom to the state.
        resolve: {

        },
        onEnter: function() {

        },
        onExit: function () {

        }
      })

      .state('tab.orderList', {
        url: '/orderList/:orderStatus',
        views: {
          'tab-account': {
            templateUrl: function ($stateParams) {
              //TODO: orderStatus
              if($stateParams.orderStatus == 0){
                return 'app/myOrder/templates/orderList.html'
              }
              if($stateParams.orderStatus == 2){
                return 'app/myOrder/templates/orderListFail.html'
              }
            },
            controller: 'orderListController'
          }
        }
      })

      .state('tab.orderListEarn', {
        url: '/orderListEarn/',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/orderListDone.html',
            controller: 'OrderListDoneController'
          }
        }
      })

      .state('tab.orderPay', {
        url: '/account/pay',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/payDetail.html',
            controller: 'PayController'
          }
        }
      })

      .state('tab.undeliveredOrder', {
        url: '/account/order/undelivered',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/undeliveredDetail.html',
            controller: 'UndeliveredController'
          }
        }
      })

      .state('tab.deliveredOrder', {
        url: '/account/order/delivered',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/deliveredDetail.html',
            controller: 'DeliveredController'
          }
        }
      })

      .state('tab.returnedOrder', {
        url: '/account/order/returned',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/returnedDetail.html',
            controller: 'ReturnedController'
          }
        }
      })

      .state('tab.orderDetail', {
        url: '/orderDetail/:orderId',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/orderDetail.html',
            controller: 'OrderDetailController'
          }
        }
      })

      .state('tab.deliverInfo', {
        url: '/account/order/deliverInfo/:id',
        views: {
          'tab-account': {
            templateUrl: 'app/myOrder/templates/deliverInfo.html',
            controller: 'DeliverInfoController'
          }
        }
      })

      .state('tab.message', {
        url: '/message',
        views: {
          'tab-account': {
            templateUrl: 'app/myMessage/message.html',
            controller: 'MessageController'
          }
        },
        resolve: {
          initData: function () {
            return {
              msgDetailShow: false,
              modal: null
            };
          }
        },
        onExit: function (initData, $location) {
          /*console.log(initData)
          if(initData.msgDetailShow){
            //console.log($state);
            initData.modal.hide()
            //$state.go('tab.message')
            $location.path('/message')
          }*/
        }
      })

      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'app/chats/templates/chat-detail.html',
            controller: 'ChatDetailController'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/index');

  });
