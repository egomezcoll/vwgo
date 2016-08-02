angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, NgMap) {
  $scope.chat = Chats.get($stateParams.chatId);
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);

  });


      setTimeout(function(){
        $scope.myCustomIcon.url = "http://cdn-0.freeclipartnow.com/d/40220-1/arrow-blue-outline-right.jpg";
        $scope.$digest($scope.customIcon);
      },3000);

  $scope.positions =[
     {pos:[40.11, -75.21],name:1}, {pos:[40.22, -75.10],name:2},
     {pos:[40.33, -74.99],name:3}, {pos:[40.44, -74.88],name:4},
     {pos:[40.55, -74.77],name:5}, {pos:[40.66, -74.66],name:6}];

  $scope.myCustomIcon = {
    "scaledSize": [32, 32],
    "url": "http://www.cliparthut.com/clip-arts/823/arrowhead-clip-art-823528.png"
  };
   $scope.customIcon = {
         "scaledSize": [32, 32],
         "url": "http://www.cliparthut.com/clip-arts/823/arrowhead-clip-art-823528.png"
     };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
