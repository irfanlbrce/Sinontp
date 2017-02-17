(function() {
  'use strict';

  angular
    .module('sinontp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutUsController',
        controllerAs: 'aboutus'
      })
      .state('ourteam', {
        url: '/ourteam',
        templateUrl: 'app/ourteam/ourteam.html',
        controller: 'OurTeamController',
        controllerAs: 'ourteam'
      })
      .state('research', {
        url: '/research',
        templateUrl: 'app/research/research.html',
        controller: 'ResearchController',
        controllerAs: 'research'
      })
      .state('collaboration', {
        url: '/collaboration',
        templateUrl: 'app/collaboration/collaboration.html',
        controller: 'CollaborationController',
        controllerAs: 'collaboration'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsController',
        controllerAs: 'news'
      })
      .state('produts', {
        url: '/produts',
        templateUrl: 'app/produts/produts.html',
        controller: 'ProdutsController',
        controllerAs: 'produts'
      })
      .state('contactus', {
        url: '/contactus',
        templateUrl: 'app/contactus/contactus.html',
        controller: 'ContactUsController',
        controllerAs: 'contactus'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
