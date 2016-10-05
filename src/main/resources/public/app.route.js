(function() {
  'use strict';

    angular.module('app')
      .config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'homeController',
          controllerAs: 'home'
        })
        .state('about', {
          url: '/about',
          views: {
            '': {
              templateUrl: 'about/about.html',
              controller: 'aboutController',
              controllerAs: 'about'
            },
            'view1@about': {
              templateUrl: 'about/views/about-view1.html',
            },
            'view2@about': {
              templateUrl: 'about/views/about-view2.html',
            },
            'view3@about': {
              templateUrl: 'about/views/about-view3.html',
            },
          }
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'contact/contact.html',
          controller: 'contactController',
          controllerAs: 'contact'
        })
        .state('search', {
          url: '/search',
          templateUrl: 'search/search.html',
          controller: 'searchController',
          controllerAs: 'search'
        })
        .state('popular', {
          url: '/popular',
          templateUrl: 'popular/popular.html',
          controller: 'popularController',
          controllerAs: 'popular'
        })
        .state('suggested', {
          url: '/suggested',
          templateUrl: 'suggested/suggested.html',
          controller: 'suggestedController',
          controllerAs: 'suggested'
        })
        .state('favorites', {
          url: '/favorites',
          templateUrl: 'favorites/favorites.html',
          controller: 'favoritesController',
          controllerAs: 'favorites'
        })
        .state('account', {
          url: '/account',
          templateUrl: 'account/account.html',
          controller: 'accountController',
          controllerAs: 'account'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'loginController',
          controllerAs: 'login'
        });
    };

})();
