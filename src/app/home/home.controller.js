(function() {
  'use strict';

  angular
    .module('sinontp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope) {
    var vm = this;

    vm.dataArray = [
      {
        src: 'assets/images/Used/chem_banner-1080x540.jpg'
      },
      {
        src: 'assets/images/Used/slide2-4-1080x540.jpg'
      },
      {
        src: 'assets/images/Used/Banner_Slide3-1080x540.jpg'
      }
    ];
    activate();

    function activate() {
     
    }

    
  }
})();
