/**
 * Created by Kim Lindqvist on 15-Jan-17.
 */
angular.module('app').config(function jwtConfig ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('token');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
}).run(function($state, store, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        if(to.data && to.data.requiresLogin) {
            if(!store.get('token')) {
                e.preventDefault();
                $state.go('login');
            }
        }
    })
});