// var app = angular.module('myApp', ['ngMaterial']);
//
// app.controller('dataController', ['$scope', '$http', function($scope, $http){
//   $http({
//     method: 'GET',
//     url: 'http://fakerestapi.azurewebsites.net/api/Books'
//   }).then(function(response, status, header, config){
//       $scope.users = response.data;
//       alert("Data has come");
//   },function(data, status, header, config){
//       alert('SOme error');
//   })
//   // $http.get('http://fakerestapi.azurewebsites.net/api/Books').
//   //   success(function(data, status, headers, config) {
//   //     $scope.users = data;
//   //   }).
//   //   error(function(data, status, headers, config) {
//   //     alert('SOme error');
//   //   });
//
// }]);

// var app = angular.module('firstApplication', ['ngMaterial']);
//
// app.controller('sampleController', function ($scope) {
//     $scope.title = "Welcome to Angular Material";
//     $scope.detail = "I m working on Angular Material...........!"
//     $scope.showLeftSidenav = false;
//     $scope.toggleLeftSidenav = function(){
//         $scope.showLeftSidenav = !$scope.showLeftSidenav;
//     };
// });

var app = angular.module('firstApplication', ['ngMaterial']);

app.controller('sampleController', function ($scope) {
    $scope.title = "Monthly milk calculation";
    $scope.detail = ""
    $scope.showLeftSidenav = false;
    $scope.toggleLeftSidenav = function(){
        $scope.showLeftSidenav = !$scope.showLeftSidenav;
    };
});


app.controller('listController', function ($scope, $http, $window) {

    $scope.isOpen = false;

    $http.get('http://localhost:3030/multiple').then(function (response) {
        console.log(response);
        $scope.details = response.data;

        $scope.TotalBuffalo = function(){
            var total = 0;
            for(var i = 0; i < $scope.details.length; i++){
                var product = $scope.details[i];
                total += product.quantity;
                // totalCow += product.quantityCow;
            }
            return total;
        };

        $scope.TotalCow = function () {
            var totalCow = 0;
            for (var i = 0; i < $scope.details.length; i++) {
                var product = $scope.details[i];
                totalCow += product.quantityCow;
            }
            return totalCow;
        }
    });


    $scope.save = function () {
        var dataObj = {quantity: $scope.quantity, quantityCow: $scope.quantityCow, date: $scope.myDate};
        var dataSave = $http.post('/save', dataObj);
        dataSave.success(function (data, status, headers, config) {
            $scope.message = data;
            alert(data);
        });
        dataSave.error(function (data, status, headers, config) {
            alert(data);
        });

        $scope.quantity = "";
        $scope.quantityCow = "";
        $scope.myDate = "";
        $window.location.reload()
        // $route.reload();

    }

});

