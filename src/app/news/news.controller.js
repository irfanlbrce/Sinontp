(function() {
  'use strict';

  angular
    .module('sinontp')
    .controller('NewsController', NewsController);

  /** @ngInject */
  NewsController.$inject = ['SharedService','$state','moment'];
  function NewsController(SharedService,$state,moment) {
    var vm = this;
    vm.shared = SharedService;
     

    //Fetching data from SharedService
    vm.newsUpdatesRoutes = vm.shared.routes;
    var date = moment().format('LL');

    activate();

    function activate() {
     
    }
  }
})();
