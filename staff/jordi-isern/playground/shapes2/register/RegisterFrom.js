class RegisterForm extends Form{
    constructor (){
        super()

        this.addClass('RegisterFrom')

        const nameField = new Field('name', 'text', 'Name')
        nameField.setPlaceholder('Name')
        
        const emailField = new Field('email', 'text', 'Email')
        emailField.setPlaceholder('Email')

        const usernameField = new Field ('username', 'text', 'Username')
        usernameField.setPlaceholder('Usernname')

        const passwordField = new PasswordField('password', 'Password')
        passwordField.setPlaceholder('password')

        const confirmPasswordField = new PasswordField('repeat password', 'Repeat Password')
        confirmPasswordField.setPlaceholder('Repeat password')

        const registerButton = new SubmitButton('Register')

        const feedbackPanel = new Component('p')
        feedbackPanel.addClass('feedback')
        
        this.add(nameField)
        this.add(emailField)
        this.add(usernameField)
        this.add(passwordField)
        this.add(confirmPasswordField)
        this.add(registerButton)
        this.add(feedbackPanel)

    }


    getName() {
        const nameField = this.children[0]
        return nameField.getValue()
    }

    getMail(){
        const emailField = this.children[1]
        return emailField.getValue()
    }

    getUserName(){
        const usernameField = this.children[2]
        return usernameField.getValue()
    }

    getPassword(){
        const passwordField = this.children[3]
        return passwordField.getValue()
    }

    getConfirmPassword(){
        const confirmPasswordField = this.children[4]
        return confirmPasswordField.getValue()
    }

    setFeedback(message, level){
        const feedbackPanel = this.children[this.children.length -1]

        if (level === 'success'){
            feedbackPanel.addClass('success')   
        }
        feedbackPanel.setText(message)
    }

    clear(){
        Form.prototype.clear.call(this)

        const feedbackPanel= this.children[this.children.length-1]
        feedbackPanel.setText(' ')
        feedbackPanel.removeClass('success')
    }
}

//TODO mirar classes dia 23 i 24 para comprender logic.js

//TODO aprender debug en navegador

//TODO buscar svelte reackt-JSX  Angular typescript coffeescript

// TODO VPN WARP es gratuita y de cloudflare

//raycast