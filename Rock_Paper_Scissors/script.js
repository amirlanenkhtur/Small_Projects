let UserSelection = null;
const options = ['Rock', 'Paper', 'Scissor'];
const countdown = document.getElementById('countdown');
const computerImg = document.getElementById('Computer_result');
const userImg = document.getElementById('User_result');
const computerImages = ['assets/rock_right.png', 'assets/paper_right.png', 'assets/scissors_right.png']

function selectRock(){
    UserSelection = 'assets/rock_left.png';
    StartGame(0)
}

function selectPaper(){
    UserSelection = 'assets/paper_left.png';
    StartGame(1)
}

function selectScissor(){
    UserSelection = 'assets/scissors_left.png';
    StartGame(2)
}

function StartGame(value){
    let computer = Math.floor(Math.random() * 3);

    let count = 0;

    countdown.innerText = '';

    const interval = setInterval(() => {
        countdown.innerText = options[count] + '!';
        count++;
        userImg.classList.add('shake');
        computerImg.classList.add('shake');

        if (count === options.length) {
            clearInterval(interval);

            setTimeout(() => {
                userImg.classList.remove('shake');
                computerImg.classList.remove('shake');
                userImg.src = UserSelection;
                computerImg.src = computerImages[computer];

                const result = (value - computer + 3) % 3;
                if (result === 0) countdown.innerText = "Tie!";
                else if (result === 1) countdown.innerText = "Player Won!";
                else countdown.innerText = "Computer Won!";
            }, 1000);

        }
    }, 1000);
}