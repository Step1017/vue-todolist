const { createApp } = Vue;

createApp({
    data() {
        return {
            //i nostri dati 
            newTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
            
            ]
        };
    },

    methods: {

        checkDone: function (todo) {
            if (todo.done) {
                return 'todo-done';
            }
            else {
                return '';
            }
        },
        addTodo: function () {
            this.todos.push({
                text: this.newTodo,
                done: false
            });

            //per svuotare la stringa di NewTask:
            this.newTodo = '';
        },

        removeTodo: function (index) {
            //usiamo splice per rimuovere elementi da indice
            this.todos.splice(index, 1);
    }

    }
}).mount('#app');