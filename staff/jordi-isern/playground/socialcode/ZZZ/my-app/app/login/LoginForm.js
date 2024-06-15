class LoginForm extends FormWithFeedback {
    constructor(){
        super()

        this.addClass('LoginForm')

        const usernameField = new Field('username', 'text', 'Username')

        const passwordField = new PasswordField('password', 'Password')
        //var passwordReveal = new PasswordReveal(passwordField ,"fa-solid fa-lock")
    
        const submitButton = new SubmitButton('Login')

        const feedbackPanel = new Component('p')
        feedbackPanel.addClass('feedback')

        this.feedbackPanel = feedbackPanel
        
        this.add(usernameField)
        this.add(passwordField)
        this.add(submitButton)
    }

    getUsername(){
        var usernameField = this.children[0]
        return usernameField.getValue()
    }

    getPassword(){
        var passwordField = this.children[1]
        return passwordField.getValue()

    }

    setFeedback(message){

        this.feedbackPanel.setText(message)

        this.add(this.feedbackPanel)
    }
}