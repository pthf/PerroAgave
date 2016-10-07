(function(){
  angular.module('perroAgave.controllers', [])
  .controller('menuNavController', ['$scope', function($scope){
    $scope.item = true;
  }])
  .controller('popUpController', ['$scope', function($scope){
    $scope.item = 0;
    $scope.changeItem = function(item){
      $scope.item = item;
      $('#popup-info').css({'opacity':'1', 'z-index':'5'});
      //this will open the cart
      if(item==2){
        var wdcart = parseInt($('.cart-items').css('width').replace(/[^-\d\.]/g, ''));
        var wddocument = $(document).width();
        setTimeout(function(){ $('.cart-items').css({ 'left' : (wddocument-wdcart)+'px' }); }, 500);
      }
    };
    $scope.closePopUp = function(){
      if($scope.item==2){
        $('.cart-items').css({'left' : '100%'});
      }
      setTimeout(function(){
        $scope.item = 0;
        $('#popup-info').css({'opacity':'0', 'z-index':'-1'});
      }, 500);


    };
    $(window).resize(function(){
      $scope.closePopUp();
    })
  }])
})();
