(function() {
  'use strict';

  angular.module('app').service('moviesService', function($http, APPLICATION_URLS) {
    var getAllMovies = function() {
        return $http.get(APPLICATION_URLS.getAllMovies)
            .then(function(response) {
                console.log('response')
                console.log(response);
                if (response.status===200) {
                    return response.data;
                }
                else {
                    //error
                }
            });
    }

    var getSingleMovie = function(id) {
        return $http.get(APPLICATION_URLS.getSingleMovie(id))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
                else {
                    //error
                }
            });
    }

    var getCastMembersForMovie = function(id) {
        return $http.get(APPLICATION_URLS.getCastMembersForMovie(id))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
                else {
                    //error
                }
            });
    }

    var searchForMovies = function(searchParam) {
        return $http.get(APPLICATION_URLS.searchForMovies(searchParam))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
                else {
                    //error
                }
            });
    }

    return {
        getAllMovies: getAllMovies,
        getSingleMovie: getSingleMovie,
        getCastMembersForMovie: getCastMembersForMovie,
        searchForMovies: searchForMovies
    }
  });

})();
