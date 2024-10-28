document.getElementById("click-me-button").addEventListener("click", () => {
    alert('You cliecked me!')
})

document.getElementById("click-to-hide").addEventListener("click", () => {
    document.getElementById("click-to-hide").style.display = 'none'
})


document.getElementById('click-to-increment').addEventListener('click', () => {
    let counter = document.getElementById('click-to-increment')
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})

document.getElementById('add-input').addEventListener('click', () => {
    let input = document.createElement('input')
    document.body.appendChild(input)
})


document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'lightblue';


    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white']
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex]
        if(colorIndex === colors.length - 1) {
            colorIndex = 0
        } else {
            colorIndex++
        }
    }, 1000)

})