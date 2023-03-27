const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    let score = 0;
    if(document.getElementById("correct1").checked){
        score++;
    }
    if(document.getElementById("correct2").checked){
        score++;
    }
    if(document.getElementById("correct3").checked){
        score++;
    }
    if(document.getElementById("correct4").checked){
        score++;
    }
    if(document.getElementById("correct5").checked){
        score++;
    }
    alert("Your total score is: " + score + "/ 5");
    if(score < 4){
        alert("Keep studying");
    }else{
        alert("Wow great job!")
    }

})


