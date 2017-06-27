(function() {
  'use strict';
  var BASE_CLUTTER_URL = 'https://clutter-front-end-interview.herokuapp.com'

  var APPLICATION_URLS = {
      base: BASE_CLUTTER_URL,
      getAllMovies: BASE_CLUTTER_URL + '/movies.json',
      getSingleMovie: function(id) {
          return BASE_CLUTTER_URL + '/movies/' + id + '.json';
      },
      getCastMembersForMovie: function(id) {
          return BASE_CLUTTER_URL + '/movies/' + id + '/cast_members.json';
      },
      searchForMovies: function(searchParam) {
          return APPLICATION_URLS.getAllMovies + '?[title_cont]=' + searchParam
      }
  }

  angular.module('app').constant('APPLICATION_URLS', APPLICATION_URLS);

})();
