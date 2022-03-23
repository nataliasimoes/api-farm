const express = require('express');
const controladorLocal = require('../controlador/local.js');

const router = express.Router();

router.route("/")
  //rota: GET /produto/
  .get(controladorLocal.listarTodos)
  //rota: POST /produto/
  .post(controladorLocal.cadastrar);

router.route("/:id")
  //rota: GET /produto/:id (ex: /produto/1)
  .get(controladorLocal.listarAnimais)
  //rota: DELETE /produto/:id (ex: /produto/1)
  .delete(controladorLocal.remover)
  //rota: PUT /produto/:id (ex: /produto/1)
  .put(controladorLocal.alterar);


router.param('id', controladorLocal.carregar);

module.exports = router;