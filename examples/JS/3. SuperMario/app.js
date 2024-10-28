document.addEventListener('DOMContentLoaded', () => {
    const mario = document.getElementById('mario');
    const gameField = document.getElementById('game-field');


    document.getElementById('start-game-button').addEventListener('click', () => {
        gameField.style.display = 'block';
        document.getElementById('start-game-screen').style.display = 'none';
    })

    document.addEventListener('keydown', (event) => {
    
        if (event.key === 'ArrowRight') {
            let left = parseInt(mario.offsetLeft);
            left += 10;
            mario.style.left = left + `px`;
            mario.classList.remove('flip');
        } else if (event.key === 'ArrowLeft') {
            let left = parseInt(mario.offsetLeft);
            left -= 10;
            mario.style.left = left + `px`;
            mario.classList.add('flip');
        } else if (event.key === 'ArrowUp') {
            let top = parseInt(mario.offsetTop);
            top -= 10;
            mario.style.top = top + `px`;
            mario.classList.add('flip');
        } else if (event.key === 'ArrowDown') {
            let top = parseInt(mario.offsetTop);
            top += 10;
            mario.style.top = top + `px`;
            mario.classList.add('flip');
        }
    });

    setInterval(() => {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        
        coin.style.left = Math.random() * gameField.clientWidth + 'px';
        coin.style.top = Math.random() * gameField.clientHeight + 'px';
        gameField.appendChild(coin);
    }, 1000)
});