Template.login.events({
    "submit .box"(e) {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        Meteor.loginWithPassword(username, password,function(err){
            if (err) return swal({
                title: err.message,
                type: 'error',
            })
            FlowRouter.go("/")
        })
       
    }
})