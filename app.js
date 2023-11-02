const p1 = {
    score: 0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display')

}
const p2 = {
    score: 0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display')

}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');


let winningScore = 3;
let isGameOver = false;

function updateScore(p1,p2){
    if (!isGameOver) {
        p1.score += 1;
        if (p1.score === winningScore) {
            isGameOver = true;
            p1.display.classList.add('has-text-success');
            p2.display.classList.add('has-text-danger');
            p1.button.disabled = true;
            p2.button.disabled = true;
        }
        else if (p1.score === winningScore-1 && p2.score === winningScore-1){
            winningScore+=1;
        }
        p1.display.textContent = p1.score;
    }
}


p1Button.addEventListener('click', () => {
    updateScore(p1,p2)
})

p2Button.addEventListener('click', () => {
    updateScore(p2,p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset);

function reset() {
    isGameOver = false;
    winningScore = parseInt(winningScoreSelect.value);
    for(let p of [p1,p2]){
        p.score =0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
}