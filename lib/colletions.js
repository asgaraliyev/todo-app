import SimpleSchema from 'simpl-schema';
import {
    Mongo
} from "meteor/mongo"
const Todos = new Mongo.Collection('todos');
const TodosSchema = new SimpleSchema({
    name: {
        type: String,
        optional: false,
        max: 50,
    },
    createdAt: {
        type: Number,
        optional: true,
        defaultValue: new Date().getTime(),
    },
    isDone: {
        type: Boolean,
        optional: true,
        defaultValue: false,
    },
    isDeleted: {
        type: Boolean,
        optional: true,
        defaultValue: false,
    },
    userId: {
        type: String,
        optional: false,
    }
})
Todos.schema = TodosSchema
Todos.attachSchema(TodosSchema)
export {
    Todos
};