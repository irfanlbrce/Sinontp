(function() {
  'use strict';

  angular
    .module('sinontp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
