const todos = require('./todos');
 

module.exports = {
        todo: ({id})=> todos.find(el => el.id == id),
        todos: ({status})=> {
            switch(status){
                case "COMPLETED" : return todos.filter(el=> el.completed);
                case "UNCOMPLETED" : return todos.filter(el=> !el.completed);
                default : return todos; 
            } 
        }
         
}