(function(){

    document.write("Welcome to Hangman");

    var word = "web development";
    var letter = "e"

    let letterCount = word.split(letter).length -1
    console.log(word)
    console.log(word.split(letter))
    console.log(letterCount)
    
    if(word.indexOf(letter)>=0){
        document.write('Yeah, the letter ' + letter + ' exists '+letterCount+  ' times in my word')
    } else {
        document.write("Nope, that letter doesn't exist in my word")
    }

})();