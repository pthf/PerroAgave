(function(){
  angular.module('perroAgave.controllers', [])
  .controller('popUpController', ['$scope', function($scope){
    $scope.item = 0;
    $scope.changeItem = function(item){
      $('html, body').css({'overflow':'hidden'});
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
      $('html, body').css({'overflow':'auto'});
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
  .controller('formloginregisterController', ['$scope', function($scope){
    setTimeout(function(){
      $('.form-register').slideUp(0);
    },0);
    $scope.openregister = function(){
      $('.form-login').slideUp(500);
      $('.form-register').slideDown(500);
    }
  }])
  .controller('introSiteController', ['$rootScope', '$scope', function($rootScope, $scope){
    if(!$rootScope.open){
      $('body, html').css({'overflow':'hidden'});
      $('#intro-page').css({'z-index': '10'});
      $('#intro-page').css({'opacity': '1'});
    }else{
      $('body, html').css({'overflow':'auto'});
      $('#intro-page').css({'z-index': '-1'});
      $('#intro-page').css({'opacity': '0'});
    }
    $scope.valitestatus = function(status){
      if(status){
        $rootScope.open = 'false';
        $('body, html').css({'overflow':'auto'});
        $('#intro-page').css({'z-index': '-1'});
        $('#intro-page').css({'opacity': '0'});
      }else{
        $rootScope.open = 'true';
        var element = '<div class="imagepa-home-intro"><img src="./src/images/intro.png"></div><span class="msg-intro">LO SENTIMOS, PERO DEBES TENER LA EDAD LEGAL PARA PODER VISITAR EL SITIO</span><div class="buttom-intro"> <span class="image"> <img src="./src/images/sicon-03.png"> </span> <span class="image"> <img src="./src/images/sicon-04.png"> </span> </div>';
        $('.infotextinto').html(element);
      }
    }
}])
})();
