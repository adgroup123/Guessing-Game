
 $(function(){
  $("#ss").click(function(){


   var a =$("#guess").val();
   if (a==194){
      alert("You got it right\nCongrats!!");
   }
  
   else if(a==0){
      alert ("Please make a guess") ;
   }
   else {
      document.write("<h1 id ='ef'>Wrong Try Again</h1>")
   }
  })
 })

$(function(){
   $("#ne").click(function(){
   $("#fp").slideToggle(1000);
    $("#next").html("<h1>Second Puzzle</h1>").css({"border" :"6px groove blue","color":"green","text-align":"center","font-family":"Pacifico","text-shadow":"6px 4px yellow"}) 
  
   $("#quion2").html
   ("Q.2     How many 8s make up 1000?").css({"color":"blue","font-weight":"bolder","font-size":"20px",
   "font-family":"Pacifico"})
   $("#firm").html("<input type='tel' placeholder='Guess'id ='secte'><br/><br/>");
   $("#fujf").html("<input type='submit' value='Enter'id ='encte'><br/><br/>").click(function(){
      var a = $("#secte").val() 
      if(a==125){
         alert("You got it right") ;
      }
      else if(a==0){
         alert("Please enter a guess") 
      }
      else{
         document.write("<h1>Try again</h1>") 
      }
 });
 
   $("#bt").html("<button id='na'>Next Puzzle</button>") 
  $("#na").click(function(){
        $("#cl").slideUp(1000);
        $("#na").hide()
        $("#bo").html("<h1>Third Puzzle</h1>").css({"border" :"6px groove blue","color":"green","text-align":"center","font-family":"Pacifico","text-shadow":"6px 4px yellow"}) 
        $("#quion3").html("Q.3  A boy has as many sisters as brothers , and his sisters have half as many sisters as brothers. How many  girls are there in the family ? ").css({"color":"blue","font-weight":"bolder","font-size":"20px",
   "font-family":"Pacifico"})
   $("#newg").html("<input type='tel' placeholder='Guess'id ='sete'><br/><br/>");
   $("#nnnn").html("<input type='submit' value='Enter'id ='ente'><br/><br/>")
   
   $("#ente").click(function(){
       var ss = $("#sete").val()
       if(ss==2){
         alert("You got it right") ;
      }
      else if(ss==0){
         alert("Please enter a guess") 
      }
      else{
         alert("Try again") 
      }
       
   })
        
    })
})
  
    }) 
    
$(function(){
    $("#imgfi").click(function(){
        var tiy=new Date()
        var hours= tiy.getHours();
        var secs=tiy.getSeconds();
        var mins= tiy.getMinutes();
        alert(hours+":"+secs+":"+mins)
        if (h===12) {
           alert(hours+":"+secs+":"+mins+" "+"A.M")
        }
        else{
           alert(hours+":"+secs+":"+mins)
        }
    })
})
$(function(){
  $("#body").hide();
   setTimeout(function() {
        $("#preloader").hide();
        $("#body").show();

    },1000);
  

  
})
