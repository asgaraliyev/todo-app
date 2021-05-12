FlowRouter.route("/", {
    name: "home",
    action(params, queryParams) {
        BlazeLayout.render("layout", {
            content: "home"
        })
    }
})
FlowRouter.route("/sign-up", {
    name: "signup",
    action(params, queryParams) {
        BlazeLayout.render("layout", {
            content: "signup"
        })
    }
})
FlowRouter.route("/login", {
    name: "login",
    action(params, queryParams) {
        BlazeLayout.render("layout", {
            content: "login"
        })
    }
})
FlowRouter.route("/profile", {
    name: "profile",
    action(params, queryParams) {
        BlazeLayout.render("layout", {
            content: "profile"
        })
    }
})