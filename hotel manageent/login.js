var error = document.getElementById('error')
var login = document.getElementById('submit')

login.addEventListener('click', () => {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    if (!username || !password){
        error.innerText = 'Please enter username and password!'
        setTimeout(() => {
            error.innerText = ''
        }, 3000)
    } else {
        if (username != "example" || password != '1234'){
            error.innerText = 'Invalid Credentials'
            setTimeout(() => {
                error.innerText = ''
            }, 3000)
        } else {
            window.location.href = "index.html"
        }
    }
})