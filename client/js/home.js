import {
    Todos
} from "../../lib/colletions"
Template.home.onCreated(() => {
    Meteor.subscribe("todos")
    if (!Meteor.userId()) FlowRouter.go("/sign-up")
})
Template.home.helpers({
    todos() {
        const options = {
            sort: {
                isDone: false,
                createdAt: -1
            }
        };

        return Todos.find({}, options).fetch()
    }
})
Template.home.events({
    "click #add_todo"() {
        const todoEl = document.getElementById("todoInput")
        const todoName = todoEl.value
        todoEl.value = ""
        if (!todoName) return
        if (todoName.length > 50) return swal({
            title: "Todo length is too long",
            type: 'warning',
        })
        Meteor.call("addTodo", todoName, function (err, result) {
            console.log(err, result)
        })

    }
})