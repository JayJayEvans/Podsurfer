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
        .state('favorites', {
          url: '/favorites',
          templateUrl: 'favorites/favorites.html',
          controler: 'favoritesController',
          controllerAs: 'favorites'
        })
        .state('popular', {
          url: '/popular',
          templateUrl: 'popular/popular.html',
          controler: 'popularController',
          controllerAs: 'popular'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'profile/profile.html',
          controler: 'profileController',
          controllerAs: 'profile'
        })
      
        ; // This semicolon goes after the last .state group thing
    };

})();
