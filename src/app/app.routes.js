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
        templateUrl: 'app/tabs/tabs.html'
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

      .state('tab.chats', {
        url: '/list',
        views: {
          'tab-chats': {
            templateUrl: 'app/chats/templates/tab-chats.html',
            controller: 'ChatsController'
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
              if($stateParams.orderStatus == 1){
                return 'app/myOrder/templates/orderListDone.html'
              }
              if($stateParams.orderStatus == 2){
                return 'app/myOrder/templates/orderListFail.html'
              }
            },
            controller: 'orderListController'
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

      .state('tab.mylove', {
        url: '/mylove',
        views: {
          'tab-account': {
            templateUrl: 'app/mylove/mylove.html',
            controller: 'MyLoveController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/index');

  });
