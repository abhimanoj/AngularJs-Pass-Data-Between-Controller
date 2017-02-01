var mainMod = angular.module('MainApp', []);
mainMod.controller('MainCtrl', ['$scope','dataShare',
    function ($scope,dataShare) { 
     $scope.value= 'Addition';       
         $scope.text = 'Add';
         
          $scope.firstBox=0;
    $scope.SecondBox=0;
    $scope.thirdBox=0;
    
         $scope.send = function(){
         
         $scope.val = ($scope.firstBox*1)+($scope.SecondBox*1)+($scope.thirdBox*1);
      
        if($scope.val > 100)
        	{
        	alert("Addition must be less then 100");
        	}else
        		{
        		$scope.value=$scope.val;
        		}
        var data = {

        V1: $scope.firstBox,
        V2: $scope.SecondBox,
        V3: $scope.thirdBox

    };
           dataShare.sendData(data);
         };

    }
]);
mainMod.controller('MainCtrl2', ['$scope','dataShare',
    function ($scope,dataShare) {         
         
                $scope.text = '';
                $scope.$on('data_shared',function(){
                
                
                            var text =  dataShare.getData();  
                            
                              
              $scope.text = text.V1;
              $scope.text2 = text.V2;
              $scope.text3 = text.V3;
        });
    }
]);
mainMod.factory('dataShare',function($rootScope){
  var service = {};
  service.data = false;
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
  };
  service.getData = function(){
    return this.data;
  };
  return service;
});