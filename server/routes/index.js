const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const candidatoController = require('../controllers').candidato;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the Todos API!',
    }));
  
    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.get('/api/todos/all', todosController.list_find_all);
    app.post('/api/todos/:todoId/items', todoItemsController.create);
    
    app.get('/api/todos/:todoId', todosController.retrieve);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.destroy);

    app.get('/api/candidatos',candidatoController.list);
    app.get('/api/candidatos/all', candidatoController.list_find_all);
  };