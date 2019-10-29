(function(){

    let word = "repaper"
    /* word spelled same frontwards n backwards */
    
    let checkPalindrome = word.split('').reverse().join('');
    /* reverse word for palindrome */
    
    if(word === checkPalindrome) {
        
        console.log("true")
    }
    else {
       
        console.log ("false")
    }
    
})();