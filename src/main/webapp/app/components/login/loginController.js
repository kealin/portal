/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */
app.controller('LoginController', function ($scope, AuthService, $state, store) {

    $scope.credentials = {};

    $scope.login = function () {
        AuthService.login($scope.credentials).success(function (data) {
            console.log('Im the captain now!');
            store.set('token', response.data.token);
            $state.go('home');
        }).error(function (data) {
            // TODO: Style this later on
            alert('Please check your credentials!');
        });
    }
});