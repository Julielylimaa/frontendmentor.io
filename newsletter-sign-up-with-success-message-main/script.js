function emailValidate(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}


const email = document.getElementById('email')
const invalidText = document.getElementById('invalid-text')
email.classList.remove('invalid-input')
const main = document.getElementById('subscribe-screen')

function confirmationScreen(email) {
    const confirmationBox = `<div class="confirmation">
    <div class="confirmation-box">
      <img src="./assets/images/icon-success.svg">
      <div class="confirmation-text">
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to ${email}.
          Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <button id="dismiss-btn">Dismiss message</button>
    </div>
  </div>`

    main.innerHTML = confirmationBox

}

email.addEventListener('input', function () {
    let validate = emailValidate(email.value)
    if (!validate) {
        invalidText.hidden = false
        email.classList.add('invalid-input')
    }
    else {
        invalidText.hidden = true
        email.classList.remove('invalid-input')
        document.getElementById('subscribe-btn').addEventListener('click', function () {
            confirmationScreen(email.value)
            document.getElementById('dismiss-btn').addEventListener('click', function () {
                location.reload()
            })
        })
    }
})





