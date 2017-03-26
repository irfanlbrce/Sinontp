(function() {
  'use strict';

  angular
    .module('sinontp')
    .controller('UpdatesController', UpdatesController);

  /** @ngInject */
  function UpdatesController($state) {
    var vm = this;

    vm.changeRoute = function(state){
      if(state == 'SiNON wins'){
        $state.go('news.sinon-wins-the-16th-annual-duke-startup-challenge');
      }
      else if(state == 'BRC'){
        $state.go('news.brc-d2d-interview');
      }
       else if(state == 'SiNON Overcomes'){
        $state.go('news.sinon-overcomes-barriers-to-win-grand-prize');
      }
       else if(state == 'SiNON among'){
        $state.go('news.Sinon-among-50-companies-selected');
      }
      else if(state == 'Extraction of'){
        $state.go('news.Extraction-of-preformed-graphene-oxide-from-coal');
      }
      else if(state == 'Carbon Nano'){
        $state.go('Carbon-nano-onions-cross-the-blood-brain-barrier');
      }

      else{

      }
    }
    activate();

    function activate() {
     
    }

    
  }
})();
