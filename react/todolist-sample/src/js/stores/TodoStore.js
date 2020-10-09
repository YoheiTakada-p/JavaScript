import { EventEmitter } from "events"
import dispatcher from "../dispatcher"

class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
                {
                    id: 0,
                    text: "shopping",
                    complete: false
                },
                {
                    id: 1,
                    text: "game",
                    complete: false
                }
            ]
        }
    createTodo(text) {
        const id = Date.now()

        this.todos.push({
            id,
            text,
            complete: false
        })
        this.emit("change")
    }
    deleteTodo() {
        this.todos.pop()
        this.emit("change")
    }
    getAll() {
        return this.todos
    }
    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text)
                break
            }
            case "DELETE_TODO": {
                this.deleteTodo()
                break
            }
        }
    }

}

const todoStore = new TodoStore
dispatcher.register(todoStore.handleActions.bind(todoStore))

// window.dispatcher = dispatcher
export default todoStore