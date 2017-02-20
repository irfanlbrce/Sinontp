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
      controllerAs: 'header'
    };

    return directive;

    /** @ngInject */
    function headerController(SharedService) {
      var self = this;
      self.shared = SharedService;
      self.isNavCollapsed = self.shared.isNavCollapsed;
      self.isCollapsed = self.shared.isCollapsed;
      self.isCollapsedHorizontal = self.shared.isCollapsedHorizontal;
    }
  }

})();
