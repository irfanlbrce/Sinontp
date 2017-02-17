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
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function footerController() {
      var vm = this;
    }
  }

})();
