let playerHealth = 100;
let enemyHealth = 100;

const playerHealthDisplay = document.getElementById('player-health');
const enemyHealthDisplay = document.getElementById('enemy-health');
const attackButton = document.getElementById('attack');
const defendButton = document.getElementById('defend');

attackButton.addEventListener('click', () => {
    const damage = Math.floor(Math.random() * 20) + 5; // Dano entre 5 e 25
    enemyHealth -= damage;
    enemyHealthDisplay.textContent = enemyHealth;

    if (enemyHealth <= 0) {
        alert('Você venceu!');
        resetGame();
    } else {
        enemyAttack();
    }
});

defendButton.addEventListener('click', () => {
    alert('Você se defendeu!');
});

function enemyAttack() {
    const damage = Math.floor(Math.random() * 15) + 5; // Dano entre 5 e 20
    playerHealth -= damage;
    playerHealthDisplay.textContent = playerHealth;

    if (playerHealth <= 0) {
        alert('Você foi derrotado!');
        resetGame();
    }
}

function resetGame() {
    playerHealth = 100;
    enemyHealth = 100;
    playerHealthDisplay.textContent = playerHealth;
    enemyHealthDisplay.textContent = enemyHealth;
}
