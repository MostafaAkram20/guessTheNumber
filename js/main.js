let inputNumber  = document.getElementById('numberInput');
let btn = document.querySelector('.btn');
let scoreDiv = document.querySelector('.score');
let highScoreDiv = document.querySelector('.Highscore');
let gradeDiv = document.querySelector('.grade');
let score = 20;
let choosenNum = Math.floor(50 * Math.random());
function green(){
    btn.classList.replace('btn-dark' , 'btn-success')
    btn.classList.replace('btn-danger' , 'btn-success')
    highScoreDiv.innerHTML = `<h5>Highscore: ${score}</h5>`
}
function red(){
    btn.classList.replace('btn-dark' , 'btn-danger')
    btn.classList.replace('btn-success' , 'btn-danger')
    score--;
}
btn.addEventListener('click', () => {
    if(inputNumber.value.trim() != ""){
        let userGuess = Number(inputNumber.value); // convert input to number
    let difference = Math.abs(userGuess - choosenNum); // absolute difference

    if (userGuess === choosenNum) {
        gradeDiv.innerHTML = `<h5 style="color: green;">Success !! ..</h5>`;
        green();
    } else if (difference > choosenNum * 0.5) {
        gradeDiv.innerHTML = `<h5 style="color: red;">${userGuess < choosenNum ? 'Too low ..' : 'Too high ..'}</h5>`;
        red();
    } else if (difference > choosenNum * 0.3) {
        gradeDiv.innerHTML = `<h5 style="color: red;">${userGuess < choosenNum ? 'Low ..' : 'High ..'}</h5>`;
        red();
    } else {
        gradeDiv.innerHTML = `<h5 style="color: red;">So close ..</h5>`;
        red();
    }
    scoreDiv.innerHTML = `<h5>Score: ${score} </h5>`;
    if(score == 10){
        console.log(choosenNum);
        let alert = $('.alert');
        alert.animate({opacity:'1'} , 1000);
    }
    }
    inputNumber.value = ''
});

