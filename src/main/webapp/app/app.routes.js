/**
 * Created by Kim Lindqvist on 14-Jan-17.
 */
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'app/components/home/homeView.html'
        })

        .state('blog', {
            url: '/blog',
            templateUrl: 'app/components/blog/blogView.html'
        })

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'app/components/portfolio/portfolioView.html'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'app/components/admin/adminView.html',
            data: {
                requiresLogin: true
            }
        })

        .state('login', {
            url: 'login',
            templateUrl: 'app/components/login/loginView.html'
        });

});