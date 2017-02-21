(function() {
  'use strict';

  angular
    .module('sinontp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope) {

    $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    $log.debug('runBlock end');
  }

})();
