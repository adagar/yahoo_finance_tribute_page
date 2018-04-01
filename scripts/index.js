$(document).ready(function() {
  function changeColor(){
    /*
    var elems = document.getElementsByClassName("change");
    console.log(elems);
    for(var i in elems){
     if(elems[i].value >= 0){
        elems[i].addClass("increasing");
      }else{
        elems[i].addClass("decreasing");
      } 
    }
    */
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