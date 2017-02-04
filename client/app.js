var app = angular.module('mainapp',[]);

app.controller('mainCtrl' , ['$scope','$http', function($scope,$http){

	var fileConverted ;

console.log('controller initiated');
$scope.fileConverted = false;

$scope.sendUrl = function(urlf){

	console.log('this is the url we have recieved ' , urlf);
	$http({
		method:'POST',
		url: "/convert",
		params:{
			weburl : urlf
		}
	}).then(function(data){
		console.log('hit success');
		$scope.fileConverted=true;
		fileConverted=data.data;

	},function(err){

	})
}

$scope.viewFile = function(){

   $http({
   	method:'GET',
   	url:"/view",
   	params:{
   		file:fileConverted
   	}
   }).then(function(data){

   },function(err){

   })
}


$scope.downloadFile = function(){

	console.log('download clicked');

	$http({
   	method:'GET',
   	url:"/download",
   	params:{
   		file:fileConverted
   	}
   }).then(function(data){

   },function(err){
   	
   })

}
}])

