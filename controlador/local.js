const { Local, Animal } = require('../modelos/');

function listarTodos(req,res,next) {
  Local.findAll().then(function(listaLocais) {
    res.json(listaLocais);
  });
}


function cadastrar(req,res,next) {
  Local.create( {
    tipoLocal: req.body.tipoLocal,
    descricao: req.body.descricao
  }).then((local) => {
    
    res.json(local);
  })
}


function listarAnimais(req,res,next) {
  if (req.local) {
    Animal.findAll(
      {where:{
        localId: req.local.id}
      }).then(function(listaAnimal) {
      res.json(listaAnimal);
    });
  } else {
    //caso não seja encontrada, enviará um erro 404 (NotFound) e uma mensagem
    res.status(404).json({
      message: 'O local informado não existe'
    })
  }
}

function alterar(req,res,next) {
  if(req.local){
    const local = req.local
    local.tipoLocal = req.body.tipoLocal
    local.descricao = req.body.descricao
    local.save()

    res.json({
      message:'O local foi alterado'
    })
  }else{  
    res.json({
      message:'Não deu certo'
    })
    
  }
  
}

function remover(req,res,next) {
    if(req.local){
      const local = req.local
      local.destroy()
      res.json({
        message : 'O local foi removido'
      })
    }else{
      res.json({
        message : 'O local nem encontrado foi'
      })
    }
  
}

/**
* 
* @param {*} id id será preenchido com o número que estiver na rota
*/
function carregar(req,res,next,id) {
  Local.findOne({
    where:{
      id: id
    }
  })
  //na linha abaixo é utilizado Arrow Functions no lugar da função "anônima" (function (produto) { ... })
  //para saber mais sobre Arrow function acesse:
  //https://raphaelfabeni.com/es6-arrow-functions/
  .then((local) => {
    //armena o produto na requisição, para que a próxima função
    //consiga recuperá-lo
    req.local = local;
    next();
  })
  
}


module.exports = {
  listarTodos,
  cadastrar,
  listarAnimais,
  alterar,
  remover,
  carregar,
}