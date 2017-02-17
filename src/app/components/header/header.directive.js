(function() {
  'use strict';

  angular
    .module('sinontp')
    .directive('header', header);

  /** @ngInject */
  function header() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      controller: headerController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function headerController() {
      var vm = this;
    }
  }

})();
