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
            
            { id: 5, state: 'news.Sinon-among-50-companies-selected', href: '#/news/Sinon-among-50-companies-selected', name: 'SiNon among 50 companies selected for CED Conference', active: false, childContents: [], updatedDate:'2017-02-25T22:56:21+00:00',imgSrc:"assets/images/2017/Conference.jpg"},
            { id: 6, state: 'news.Extraction-of-preformed-graphene-oxide-from-coal', href: '#/news/Extraction-of-preformed-graphene-oxide-from-coal', name: 'Extraction of preformed-graphene oxide from coal', active: false, childContents: [], updatedDate:'2017-03-12T00:00:00+00:00',imgSrc:"assets/images/2017/RSC_thumb.jpg"},
            { id: 7, state: 'news.Carbon-nano-onions-cross-the-blood-brain-barrier', href: '#/news/Carbon-nano-onions-cross-the-blood-brain-barrier', name: 'Carbon nano onions cross the blood brain barrier', active: false, childContents: [], updatedDate:'2017-03-11T00:00:00+00:00',imgSrc:"assets/images/2017/RSC_thumb.jpg"},
            ];
       return self;
    }

})();