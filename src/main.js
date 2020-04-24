class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}
class TodoList extends List {
    constructor() {
        super()
        this.user = 'Vitoria';
    }

}

const MyList = new TodoList()

document.getElementById('newTodo').onclick = function() {
    MyList.add('new todo')
}