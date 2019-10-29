(function(){

    var startingPopulation = 200;
    var birthRate = 0.1;
    var numberOfWeeks = 5;

    var resultPolulation = startingPopulation*birthRate
    var resultTime = resultPolulation*numberOfWeeks
    var resultAll = startingPopulation + resultTime

    document.write('There will be' + resultAll ,'hares after' + numberOfWeeks ,'weeks')
   
    console.log ("resultPolulation")
})();