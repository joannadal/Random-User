angular.module("RandomUser", []).controller("RandomUserController",
    function SpotifyChartsController($scope, $http) {

        $scope.firstName = '';
        $scope.lastName = '';
        $scope.username = '';
        $scope.email = '';
        $scope.nationality = '';
        $scope.city = '';
        $scope.phone = '';
        $scope.gender = '';
        $scope.picture = 'http://www.rccaleastcentral.org/image/default-user.jpg';

        $scope.getRandomUser = function () {
            $http.get('http://api.randomuser.me/').
            success(function(data, status, headers, config) {
                var user = data.results[0].user;
                $scope.picture = user.picture.large;
                $scope.firstName = user.name.first;
                $scope.lastName = user.name.last;
                $scope.username = user.username;
                $scope.email = user.email;
                $scope.nationality = user.nationality;
                $scope.city = user.location.city + ', ' + user.location.state;
                $scope.phone = user.phone;
                $scope.gender = user.gender;
            }).
            error(function(data, status, headers, config) {
                alert("There was an error generating the Random User.");
            });
        };
    }
);
