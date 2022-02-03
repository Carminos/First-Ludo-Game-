const yourScore = document.querySelector('.your-score');
const computerScore = document.querySelector('.computer-score');

const images = ['dice1.png', 
                'dice2.png', 
                'dice3.png', 
                'dice4.png', 
                'dice5.png', 
                'dice6.png']    
    
function playerRoll() {
    ranImage = Math.floor(Math.random() * images.length);
    rollDice = images[ranImage];
    document.getElementById('display-image-1').src = `./images/${rollDice}`;

    ranImage = Math.floor(Math.random() * images.length);
    rollDice = images[ranImage];
    document.getElementById('display-image-2').src = `./images/${rollDice}`;
}




