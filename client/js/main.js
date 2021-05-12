if (Meteor.isClient) {
    Tracker.autorun(function () {
        console.log("auto run")
    })
}