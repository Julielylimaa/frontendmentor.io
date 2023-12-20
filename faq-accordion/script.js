const iconMinus = '<img src= "./assets/images/icon-minus.svg">'
const iconPlus = '<img src="./assets/images/icon-plus.svg">'

const paragraphs = document.querySelectorAll('.question-answer p')


document.querySelectorAll('button').forEach(function (button, index) {
    function toggleContent() {
        paragraphs[index].hidden = !paragraphs[index].hidden
        if(!paragraphs[index].hidden){
            button.innerHTML = iconMinus
        }
        else{
            button.innerHTML = iconPlus
        }
    }

    button.addEventListener('click', toggleContent)

})

