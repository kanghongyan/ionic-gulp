// Routes config
angular.module('starter.routes', [])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the menu directive
  .state('menu', {
    url: '/menu',
    templateUrl: 'app/menu/menus.html'
  })

  .state('menu.home',{
    url: '/home',
    views: {
      'show':{
        templateUrl: 'app/dash/tab-dash.html',
        controller: 'DashController'
      }
    }
  })

  .state('menu.ionic-can-do', {
    url: '/ionic-can-do',
    views: {
      'show': {
        templateUrl: 'app/cando/ionic-can-do.html',
        controller: 'CanDoController'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'app/chats/templates/tab-chats.html',
          controller: 'ChatsController'
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


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/home');

});
