(function() {
  'use strict';

  angular
    .module('sinontp')
    .controller('NewsController', NewsController);

  /** @ngInject */
  NewsController.$inject = ['SharedService','$state','moment'];
  function NewsController(SharedService,$state,moment) {
    var self = this;
    self.shared = SharedService;
    self.shared = SharedService;
    self.isNavCollapsed = self.shared.isNavCollapsed;
    self.isCollapsed = self.shared.isCollapsed;
    self.isCollapsedHorizontal = self.shared.isCollapsedHorizontal;

    //Fetching data from SharedService
    self.newsUpdatesRoutes = self.shared.routes;
    var date = moment().format('LL');

    activate();

    function activate() {
     
    }
  }
})();
