(function() {
  'use strict';

  angular.module('app').service('moviesService', function($http, APPLICATION_URLS) {
    var getAllMovies = function() {
        return $http.get(APPLICATION_URLS.getAllMovies)
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
            }, function(error) {
                console.log(error);
                console.log('Getting movies failed:' + error.message);
            });
    }

    var getSingleMovie = function(id) {
        return $http.get(APPLICATION_URLS.getSingleMovie(id))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
            }, function(error) {
                console.log('Error getting single movie:' + error.message);
            });
    }

    var getCastMembersForMovie = function(id) {
        return $http.get(APPLICATION_URLS.getCastMembersForMovie(id))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
            }, function(error) {
                console.log('Error getting cast members for movie id ' + id + ':' + error.message);
            });
    }

    var searchForMovies = function(searchParam) {
        return $http.get(APPLICATION_URLS.searchForMovies(searchParam))
            .then(function(response) {
                if (response.status===200) {
                    return response.data;
                }
            }, function(error) {
                console.log('Failed searching for movie:' + error.message);
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
