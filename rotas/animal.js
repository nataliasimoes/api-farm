const express = require('express');
const controladorAnimal = require('../controlador/animal.js');

const router = express.Router();

router.route("/")
  //rota: GET /produto/
  .get(controladorAnimal.listarTodos)
  //rota: POST /produto/
  .post(controladorAnimal.cadastrar);

router.route("/:id")
  //rota: GET /produto/:id (ex: /produto/1)
  .get(controladorAnimal.listarApenasUm)
  //rota: DELETE /produto/:id (ex: /produto/1)
  .delete(controladorAnimal.remover)
  //rota: PUT /produto/:id (ex: /produto/1)
  .put(controladorAnimal.alterar);

router.param('id', controladorAnimal.carregar);

module.exports = router;