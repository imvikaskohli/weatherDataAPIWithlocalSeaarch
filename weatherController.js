

var app = angular.module('myApp', []);

app.controller('weatherController', function($http,$scope,$rootScope) {
 
        $scope.dataNotFound = false;
        $scope.dataFound = false;
  	$scope.recentSearch = false;
        $scope.recentSearchNotFound = false;
$scope.data = {
    availableCities: []
    };
var i = 0;



                            
        $scope.getWeatherReport = function(){
            
              $scope.searchData = "?q="+$scope.cityname+"&APPID=ca10e31c63e77273ae1044e43bce8c28";
            
            
            $http({
                method: 'POST',
                                      //url: 'https://www.google.co.in/search?q=imvikaskohli'
                                      //url: 'https://www.google.com/search?q=imvikaskohli&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiu-o6B0KDQAhXKOI8KHSa_B40Q_AUICigD&biw=1440&bih=794'
                                      url: "http://api.openweathermap.org/data/2.5/forecast" +
                                      $scope.searchData,
                                    }).then(function successCallback(response) {
                                        console.log(response);
                                        console.log(JSON.stringify(response)+'response');
                                        $scope.dataNotFound = false;
                                        $scope.dataFound = true;
					$scope.recentSearch = false;
       					$scope.recentSearchNotFound = false;
					$scope.cityresults = response.data.city;
					localStorage.setItem($scope.cityname,JSON.stringify(response.data.city));
					console.log($scope.cityresults);
i++;

$scope.data.availableCities.push(
      {id: i, name:$scope.cityname})
;

					//$scope.recentSearches = data.availableOptions;
console.log($scope.searches);
					//$scope.$digest();
                                        
                                    }, function errorCallback(error) {
                                        
                                        console.log(error+'error');
                                        console.log(JSON.stringify(error)+'error');
                                        
                                        alert("Server error, Please try after some time");
                                        
                                    // called asyn    chronously if an error occurs
                                    // or server returns response with an error status.
                                });
            
        } // For retrieving data from server
        
        
        $scope.getWeatherReportFromLocal = function(){
            
         $scope.recentCityResults=    JSON.parse(localStorage.getItem($scope.recentSearches.name));
	$scope.dataNotFound = false;
         $scope.dataFound = false;
  	$scope.recentSearch = true;
         $scope.recentSearchNotFound = false;
}
                                
});
    

