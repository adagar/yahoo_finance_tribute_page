$(document).ready(function() {
  function changeColor(){
    $(".change").each(function(index){
      console.log($(this).html());
      if($(this).html() >= 0){
        $(this).addClass("increasing");
      }else{
        $(this).addClass("decreasing");
      }    
    });
  };
  changeColor();
});