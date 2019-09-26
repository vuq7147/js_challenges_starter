(function(){

    //outputs string to the body of the document
    document.write("Coin flip: Heads or Tails");


    //outputs the string to the browsers console
    
    if(Math.random()>=.5) {
        
        console.log("heads")
    }
    else {
       
        console.log ("tails")
    }
    
})();