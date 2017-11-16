(function() {
    'use strict';

    angular
        .module('myApp',['ngRoute'])
        .controller('AjaxController', AjaxController);

    /* dependency injection to ensure valid minified code */
    AjaxController.$inject = ['$window', '$scope', '$http'];

    function AjaxController($window,$scope, $http){

        $scope.types = ['new','hot'];
        $scope.subredit="jquery";
        $scope.type="new";


        var url="http://api.reddit.com/r/"+$scope.subredit+"/"+$scope.type+"?jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            $scope.elements = [];
            var dataset = data.data.children;
            for (var i=0;i<dataset.length;i++){
                $scope.elements.push(dataset[i].data); // response data
            }

        });

        $scope.getit = function() {
            //$window.alert('Bye ' + $scope.key);
            var url="http://api.reddit.com/r/"+$scope.subredit+"/"+$scope.type+"?jsonp=JSON_CALLBACK";
            $http.jsonp(url).success(function(data) {
                $scope.elements = [];
                var dataset = data.data.children;
                for (var i=0;i<dataset.length;i++){
                    $scope.elements.push(dataset[i].data); // response data
                }

            });
        };
    }

})();
