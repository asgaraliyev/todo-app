Template.profile.onCreated(function () {
    if (!Meteor.userId()) FlowRouter.go("login")
})