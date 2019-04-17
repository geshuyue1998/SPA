$(function(){
  var n=6;
  var $btnArgee=$('input[type="button"]');
  var timer=window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnArgee.removeAttr('disabled');
      $btnArgee.val('同意');
    }else{
      $btnArgee.val('同意('+n+'s)');
    }
  },1000);
  $btnArgee.click(function(){
    alert('SPA! 01-timer-button task!')
  });
});
