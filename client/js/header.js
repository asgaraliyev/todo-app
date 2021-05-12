Template.header.events({
    "click #log-out"() {
        swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((res) => {
            if (res.value) {
                Meteor.logout();
                FlowRouter.go("/login")
            }

        })
    },
    "click #close"() {
        document.getElementById("nav-close").click()

    }

})