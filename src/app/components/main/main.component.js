(function() {
  'use strict';

  angular.module('app').component('main', {
    controller: mainController,
    templateUrl: 'app/components/main/main.view.html'
  });

  /** @ngInject */
  function mainController($log, $scope, moviesService) {
    $scope.loadingAllMovies = true;
    $scope.selectedMovie = false;
    $scope.movieSearchResults = [];
    moviesService.getAllMovies().then(function(response) {
        $scope.movieList = response;
        $scope.loadingAllMovies = false;
    });

    $scope.getMovieDetails = function(movie) {
        //create a copy of the selected movie, since we will mutate it
        $scope.selectedMovie = Object.assign({}, movie);
        moviesService.getCastMembersForMovie($scope.selectedMovie.id)
            .then(function(response) {
                $scope.selectedMovie.castList = response.slice(0,3);
            })
    }
  }

})();
