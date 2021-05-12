import * as help from "./help"
Template.todo.onCreated(function () {
    this.isEdit = new ReactiveVar(false)
})
Template.todo.events({
    "click .remove"(e) {
        const todoId = help.getIdOfElement(e)
        if (!todoId) return swal("Sorry somthing went wrong1")
        swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this todo!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((res) => {
            if (res.value) {
                Meteor.call("removeTodo", todoId, function (err, res) {
                    if (err) swal("Sorry somthing went wrong2")
                    swal({
                        title: "You successfully deleted a todo",
                        type: 'success',
                        confirmButtonText: 'Okey',
                    })
                })
            }

        })

    },
    "click .done"(e) {
        const todoId = help.getIdOfElement(e)
        if (!todoId) return swal("Sorry somthing went wrong")
        Meteor.call("toggleDone", todoId, function (err, res) {
            if (err) return swal("Sorry something went wrong,")
        })
    },
    "click .edit"() {
        Template.instance().isEdit.set(!Template.instance().isEdit.get())
    },
    "submit .edit-form"(e) {
        e.preventDefault()
        const todoId = help.getIdOfElement(e)
        if (!todoId) return swal("Sorry somthing went wrong")
        const todoName = e.target.todo.value
        swal({
            title: 'Are you sure?',
            text: 'Do you want to edit this todo?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes,',
            cancelButtonText: 'No '
        }).then((res) => {
            if (res.value) {
                Meteor.call("updateTodo", todoId, todoName, function (err, res) {
                    if (err) return swal("Sorry somthing went wrong")
                    swal({
                        title: 'Edited',
                        type: 'success',
                    })
                })
            }

        })



    }
})
Template.todo.helpers({
    convertToMoments(timestamp) {
        return moment(timestamp).fromNow(true);
    },
    isEditActive() {
        return Template.instance().isEdit.get()
    }
})