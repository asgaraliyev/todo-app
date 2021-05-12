import {
    Todos
} from "../lib/colletions"
if (Meteor.isServer) {
    Meteor.methods({
        addTodo(name) {
            const userId = Meteor.userId()
            if (!userId) return
            const a_todo = {
                name,
                userId: userId,
                createdAt: new Date().getTime()
            }
            if (!Todos.schema.validate(a_todo)) {
                Todos.insert(a_todo)
            }
        },
        removeTodo(_id) {
            if (!_id) return
            Todos.update({
                _id
            }, {
                $set: {
                    isDeleted: true
                }
            })
        },
        toggleDone(_id) {
            if (!_id) return
            const thatTodo = Todos.findOne({
                _id
            })
            console.log(!thatTodo.isDone, "!thatTodo.isDone")
            if (thatTodo) {
                Todos.update({
                    _id
                }, {
                    $set: {
                        isDone: !thatTodo.isDone
                    }
                })
            }
        },
        updateTodo(_id, name) {
            if (!_id) return
            Todos.update({
                _id
            }, {
                $set: {
                    name
                }
            })
        }
    })
    Meteor.publish('todos', function () {
        const userId = Meteor.userId()
        return Todos.find({
            userId
        });
    });
}