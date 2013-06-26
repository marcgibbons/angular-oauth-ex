'use strict';

angular.module('AngularApp')
.factory('Auth', function ($cookieStore, $http, $location, $rootScope) {
    // Service logic
    // ...

    var auth = $cookieStore.get('auth');

    var redirectToLogin = function() {
        return $location.path('/login');
    };
    var redirectToHome = function () {
        return $location.path('/');
    };

    var getAuthToken = function() {
        try {
            return auth.access_token;
        } catch (e) {}
    };

    var authenticate = function(accessToken) {
        if (typeof(accessToken) == 'undefined') {
            accessToken = getAuthToken();
        }

        // Let's attempt an API call
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        var config = {
            'method': 'GET',
            'url': $rootScope.CONFIG.apiUrl + '/api/user'
        };

        $http(config) // Get user data
        .success(function(data) {
            $rootScope.user = data;
        })
        .error(function(data, status) {
            if (status == 0) {
                console.log('Could not reach API')
            }
            redirectToLogin();
        });
    }

    // Public API here
    return {
        authenticate: function() {
            return authenticate();
        },
        getAccessToken: function(username, password) {
            var data = {
                client_id: $rootScope.CONFIG.clientId,
                client_secret: $rootScope.CONFIG.clientSecret,
                grant_type: 'password',
                username: username,
                password: password
            };
            $http({
                url: $rootScope.CONFIG.apiUrl + "/oauth2/access_token",
                method: "POST",
                data: $.param(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': null
                }
            }).success(function(data, status, headers, config) {
                console.log('Authentication Successful!');
                $cookieStore.put('auth', data)

                authenticate(data.access_token);
                redirectToHome();

            }).error(function(data, status) {
                if (status == 0) {
                    console.log('Could not reach API');
                } else if (data.error == 'invalid_grant') {
                    console.log('Invalid username & password');
                }
            });
        },
        logout: function() {
            $cookieStore.remove('auth');
        },
        redirectToLogin: function() {
            return redirectToLogin();
        },
        redirectToHome: function() {
            return redirectToHome();
        }
    }
});
