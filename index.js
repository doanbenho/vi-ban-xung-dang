const button = document.querySelector('button')
const div = document.querySelector('div')
button.addEventListener('click', function() {
    if(div.clientHeight == 0) {
        div.style.display = 'flex'
    } else {
        div.style.display = 'none'
    }
})