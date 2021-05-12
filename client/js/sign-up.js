Template.signup.events({
    "submit .box"(e) {
        e.preventDefault();
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        Accounts.createUser({
            username,
            email,
            password
        }, function (err) {
            if (err) return swal({
                title: err.message,
                type: 'warning',
            })
            swal({
                title: "You successfully created a new account",
                type: 'success',
                confirmButtonText: 'Okey,let me goooooo!!',
            }).then(() => FlowRouter.go("/"))
        })

    }
})