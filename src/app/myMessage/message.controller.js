;(function () {
  angular
    .module('starter')
    .controller('MessageController',MessageController);

  MessageController.$inject = ['$rootScope', '$scope', 'MessageService', '$ionicPopup', '$ionicModal', '$state', '$location', 'initData'];

  function MessageController($rootScope, $scope, MessageService, $ionicPopup, $ionicModal, $state, $location, initData){
    var vm = $scope;

    vm.empty = false;
    vm.msgList = [];
    vm.loadMore = loadMore;
    vm.showConfirm = showConfirm;
    vm.showDetail = showDetail;
    vm.currentDetail = {};

    //=================

    loadMore();

    $ionicModal.fromTemplateUrl('msg-modal.html',{
      scope: vm,
      animation: 'slide-in-up',
      hardwareBackButtonClose: true
    }).then(function (modal) {
      vm.modal = modal;
      initData.modal = modal;
      //$state.go('tab.message');
    });

    vm.$on('modal.hidden', function () {
      //$state.go('tab.message');
      console.log('hide')
    });

    vm.$on('modal.removed', function () {

    });

    vm.$on('$destroy', function () {
      vm.modal.remove();
    });


    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
      //TODO: 后退bug
      /*if(vm.modal.isShown() && toState.name == 'tab.account'){
        vm.modal.hide();
        //event.preventDefault();
        //vm.modal.hide();
        //$state.go('tab.message');
        console.log(toState.name);
        return
      }
      console.log($state)*/
    });
    
    //=================

    function showConfirm(e, id) {
      e.stopPropagation();
      $ionicPopup.confirm({
        title: '<span class="popup-icon"><i class="iconfont icon-trash"></i></span>',
        cssClass: 'g-dialog',
        template: '您确认删除吗',
        buttons: [{
          text: '取消',
          onTap: function (e) {

          }
        },{
          text: '<span class="g-highlight-red">删除</span>',
          onTap: function (e) {
            return true
          }
        }]
      }).then(function (res) {
        if(res){
          deleteMsg(id)
        }else {
          console.log('close box')
        }
      })
    }

    function loadMore(){
      MessageService.getMessageList()
        .then(function (ret) {
          vm.empty = ret.list.length === 0;
          vm.msgList = ret.list;
          console.log(vm.msgList)
        })
    }

    function deleteMsg(id){
      console.log('delete '+ id);

    }

    function showDetail(item){
      vm.currentDetail = item;
      vm.modal.show();
      //$state.go('tab.message');
    }

  }

})();