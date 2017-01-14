/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */
app.controller('LoginController', function ($scope, LoginService, $state) {

    $scope.credentials = {};

    $scope.login = function () {
        LoginService.login($scope.data.username, $scope.data.password).success(function (data) {
            console.log('Youre the admin!');
            $state.go('admin');
        }).error(function (data) {
            // TODO: Style this later on
            alert('Please check your credentials!');
        });
    }
});