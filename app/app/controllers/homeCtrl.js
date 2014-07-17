'use strict';
 
revelaControllers.controller('HomeCtrl', ['$rootScope', '$scope', '$routeParams', '$window', '$location',
  function ($rootScope, $scope, $routeParams, $window, $location) {
    
    
    $scope.intialize = function(){
   
        $scope.currentcity = "./img/cities/New_York.png";
                
        //Ensures that geolocation is enabled
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(changeBackground);
        }        
        
    };
    
    function changeBackground(position){

        //This is the callback function that will determine the location of the user and change the background accordingly

        //Creates geocoder used for reverse geocoding
        var geocoder = new google.maps.Geocoder();
        var location = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );

        geocoder.geocode({'latLng': location}, function( results, status ){

            if(status == google.maps.GeocoderStatus.OK){

                //Seeing that the 'results' array can be of variable length, this for loop will simply loop
                //Through each element in the array in search of the city name. If the city name is found then the 
                //Appropriate background is displayed in the page, else the background defaults to the New York background spread.
                for( var i = 0; i < results.length; i++){

                    //Obtains address and html element used to display background
                    var address = results[i].formatted_address; 
                    var geo_container = $('.geo_container');

                    //Indicates whether or not a city was matched
                    var matchFound = false;

                    //Checks if the address matches any of the cities
                    if(address.indexOf('Boston') >= 0){
                        //geo_container.css({'background-image' : 'url(./img/cities/Boston.png)'});
                        $scope.currentcity = "./img/cities/Boston.png";
                        matchFound = true;
                        break;
                    }

                    else  if(address.indexOf('California') >= 0){
                        //geo_container.css({'background-image' : 'url(./img/cities/California.png)'});
                        $scope.currentcity = "./img/cities/California.png";
                        matchFound = true;
                        break;
                    }

                    else  if(address.indexOf('Chicago') >= 0){
                        //geo_container.css({'background-image' : 'url(./img/cities/Chicago.png)'});
                        matchFound = true;
                        break;
                    }

                    else  if(address.indexOf('New York') >= 0){
                        //geo_container.css({'background-image' : 'url(./img/cities/New_York.png)'});
                        $scope.currentcity = "./img/cities/New_York.png";
                        matchFound = true;
                        break;
                    }

                    else if(address.indexOf('Providence') >= 0){                        
                        //geo_container.css({'background-image' : 'url(./img/cities/Providence.png)'});
                        $scope.currentcity = "./img/cities/Providence.png";
                        matchFound = true;
                        break;
                    }

                    else  if(address.indexOf('San Francisco') >= 0){
                        //geo_container.css({'background-image' : 'url(./img/cities/San_Francisco.png)'});
                        $scope.currentcity = "./img/cities/San_Francisco.png";
                        matchFound = true;
                        break;
                    }

                    else  if(address.indexOf('St. Louis') >= 0){                    
                        //geo_container.css({'background-image' : 'url(./img/cities/St_Louis.png)'});
                        $scope.currentcity = "./img/cities/St_Louis.png";
                        matchFound = true;
                        break;
                    }
                }

                //Defaults to New York Background if a match wasn't found
                if(!matchFound){
                    //geo_container.css({'background-image' : 'url(./img/cities/New_York.png)'});
                    $scope.currentcity = "./img/cities/New_York.png";
                }
            }

            else{
                alert("Geocoding failed because: " + status);
            }
        });


    };
    
    $scope.intialize();
    
    
  }]);