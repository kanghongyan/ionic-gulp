/**
 * Created by khongyan on 16/5/10.
 */
;(function () {
  'use strict';

  angular
    .module('starter')
    .controller('CanDoController', CanDoController);

  CanDoController.$inject = ['$scope', '$ionicActionSheet', '$timeout'];


  function CanDoController($scope, $ionicActionSheet, $timeout){

    var vm = $scope;


    console.log('ccccansssdssssoler ');

    vm.showActionSheet = showActionSheet;


    function showActionSheet(){
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..

        },
        buttonClicked: function(index) {
          return true;
        }
      });
    }

  }
})();