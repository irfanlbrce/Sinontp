(function() {
  'use strict';

  angular
    .module('sinontp')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controller: footerController,
      controllerAs: 'footer'
    };

    return directive;

    /** @ngInject */
    function footerController(SharedService) {
      var vm = this;
      vm.shared = SharedService;

      //Fetching data from SharedService
      vm.newsUpdatesRoutes = vm.shared.routes;
    }
  }

})();
