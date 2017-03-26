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
            views: {
                '@': {
                    templateUrl: 'app/news/news.html',
                    controller: 'NewsController',
                    controllerAs: 'news'
                }
            },
        })
        .state('news.sinon-overcomes-barriers-to-win-grand-prize', {
            url: '/sinon-overcomes-barriers-to-win-grand-prize',
            views: {
                '@': {
                    templateUrl: 'app/news/updates/sinon-overcomes-barriers-to-win-grand-prize.html',
                    controller: 'UpdatesController',
                    controllerAs: 'updates'
                }
            }            
        }).state('news.sinon-wins-the-16th-annual-duke-startup-challenge', {
            url: '/sinon-wins-the-16th-annual-duke-startup-challenge',
            views: {
                '@': {
                    templateUrl: 'app/news/updates/sinon-wins-the-16th-annual-duke-startup-challenge.html',
                    controller: 'UpdatesController',
                    controllerAs: 'updates'
                }
            }            
        }).state('news.brc-d2d-interview', {
            url: '/brc-d2d-interview',
            views: {
                '@': {
                    templateUrl: 'app/news/updates/brc-d2d-interview.html',
                    controller: 'UpdatesController',
                    controllerAs: 'updates'
                }
            }            
                  
        }).state('news.Sinon-among-50-companies-selected', {
            url: '/Sinon-among-50-companies-selected',
            views: {
                '@': {
                    templateUrl: 'app/news/updates/Sinon-among-50-companies-selected.html',
                    controller: 'UpdatesController',
                    controllerAs: 'updates'
                }
            }            
        }).state('news.Extraction-of-preformed-graphene-oxide-from-coal', {
            url: '/Extraction-of-preformed-graphene-oxide-from-coal',
            views: {
                '@': {
                    templateUrl: 'app/news/updates/Extraction-of-preformed-graphene-oxide-from-coal.html',
                    controller: 'UpdatesController',
                    controllerAs: 'updates'
                }
            }
        }).state('news.Carbon-nano-onions-cross-the-blood-brain-barrier', {
        url: '/Carbon-nano-onions-cross-the-blood-brain-barrier',
        views: {
            '@': {
                templateUrl: 'app/news/updates/Carbon-nano-onions-cross-the-blood-brain-barrier.html',
                controller: 'UpdatesController',
                controllerAs: 'updates'
            }
        }  
            
      }).state('produts', {
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
