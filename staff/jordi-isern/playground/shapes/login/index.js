var view = new Component(document.body)
view.addClass('View')

var title = new Heading(1)
title.setText('Login')

var loginForm = new LoginForm

loginForm.onSubmit(function(event){
    event.preventDefault()
    var usersJson = localStorage.users
    var users = JSON.parse(usersJson)
    var userInput = loginForm.getUsername()
    var passwordInput = loginForm.getPassword()
    var condicion = function(element) { 
        if(element.username === userInput && element.password === passwordInput){
   
            return true
        }else {
            return false
        }}

        console.log(users.find(condicion))
    if(users.find(condicion) !== undefined ){
        location.href = '../Home'
    } else {
        alert('User or password incorrect')
        location.href = '../login'
        
    }

    loginForm.clear()
})

var registerLink = new Link
registerLink.setText('Register')
registerLink.setUrl('../register')
registerLink.addClass('registerLink')


view.add(title)
view.add(loginForm)
view.add(registerLink)

