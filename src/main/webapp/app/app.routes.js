/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'components/home/homeView.html'
        })
});