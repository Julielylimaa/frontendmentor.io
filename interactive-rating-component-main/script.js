let rating = ''



const buttons = document.querySelectorAll('.btn')

buttons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        buttons.forEach(function (btn) {
            btn.classList.remove('btn-click')
        })
        button.classList.add('btn-click')
        rating = index + 1
    })
})


document.getElementById('submit-btn').addEventListener('click', function () {

    const thankYouCard = `<div class="img"> \
<img src="./images/illustration-thank-you.svg">\
</div>\
<p class="rating">You selected ${rating} out of 5</p>\
<div class="text-section">\
<h1>Thank you!</h1>\
<p>\
  We appreciate you taking the time to give a rating. If you ever need more support,\
  don\'\t hesitate to get in touch!\
</p>\
</div>`
    const container = document.getElementById('container')
    if(rating !== ''){
        container.innerHTML = ''
        container.innerHTML = thankYouCard
    }
    
})