(function () {
    "use strict";

    angular.module('sinontp')
    .service("SharedService", ["$state", SharedService]);

    function SharedService($state) {
        var self = this;
        
        self.state = $state;
        self.isNavCollapsed = true;
        self.isCollapsed = false;
        self.isCollapsedHorizontal = false;
        
        self.routes = [
            { id: 1, state: 'news.sinon-wins-the-16th-annual-duke-startup-challenge', href: '#/news/sinon-wins-the-16th-annual-duke-startup-challenge', name: 'SiNON wins the 16th Annual Duke Startup Challenge – Entrepreneurship Week 2015', active: false, childContents: [], updatedDate:'2014-08-08T00:00:00+00:00',imgSrc:"assets/images/Used/placeholder.png" },
            { id: 2, state: 'news.sinon-overcomes-barriers-to-win-grand-prize', href: '#/news/sinon-overcomes-barriers-to-win-grand-prize', name: 'SiNON Overcomes Barriers to Win Grand Prize', active: false, childContents: [], updatedDate:'2015-03-01T00:00:00+00:00',imgSrc:"assets/images/Used/placeholder.png" },
            { id: 3, state: 'news.brc-d2d-interview', href: '#/news/brc-d2d-interview', name: 'BRC D2D Interview', active: false, childContents: [] , updatedDate:'2016-04-06T00:00:00+00:00',imgSrc:"assets/images/2016/04/brc-d2d-interview-160x160.jpg"},
            { id: 4, state: 'news.therapeutics', href: '#/news/therapeutics', name: 'Therapeutics', active: false, childContents: [], updatedDate:'2016-04-06T09:00:00+00:00',imgSrc:"assets/images/2016/04/therapeutics-160x160.jpg"},
            ];
       return self;
    }

})();