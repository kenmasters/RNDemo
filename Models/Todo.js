// USER TODO MODEL 
import Realm from 'realm';

class Todo {
	static get() { return realm.objects(Todo.schema.name) }
	static schema = {
	  name: 'Todo',
	  primaryKey: 'id',
	  properties: {
	    id: {type: 'string'},
	    value: {type: 'string'},
	    completed: {type: 'bool', default: false},
	    createdTimestamp: {type: 'date'}
	  }
	}
}

// Retrieves all todo items in sorted(reversed) order
export const getTodoItems = () => {
  const todoItems = Todo.get().sorted('createdTimestamp', true)
  return todoItems
}
// Retrieve a single todo item
export const getTodo = (id) => {
  const todoItem = realm.objectForPrimaryKey(Todo, id)
  return todoItem
}
// Update todo item. todoItem parameter must be of Realm.Object
export const updateTodo = (todoItem, value, completed) => {
  realm.write(() => {
    try {
      todoItem.value = value
      todoItem.completed = completed
    } catch (e) {
      console.warn(e)
    }
  })
}
// Creates a new Todo
export const createTodo = (value) => {
  realm.write(() => {
    realm.create(Todo.schema.name, {
      id: uuid.v1(),
      value,
      createdTimestamp: new Date()
    })
  })
}
// Deletes a todo Item. todoItem parameter must be Realm.Object
export const deleteTodo = (todoItem) => {
  realm.write(() => {
    realm.delete(todoItem)
  })
}

// Create Realm DB
const realm = new Realm({schema: [Todo]})