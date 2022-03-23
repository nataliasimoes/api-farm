const { Animal, Local } = require('../modelos');

function listarTodos(req,res,next) {
  Animal.findAll().then(function(listaProdutos) {
    res.json(listaProdutos);
  });
}


function cadastrar(req,res,next) {
  Animal.create({
    localId: req.body.localId,
    tipoAnimal: req.body.tipoAnimal,
    sexo : req.body.sexo,
    descricao : req.body.descricao
  }).then((animal) => {
    res.json(animal);
  }).catch((err) => {
    res.status(401).json({ error: 'Não foi possível cadastrar o animal' });
  })
}


function listarApenasUm(req,res,next) {
  //verifica se o animal foi encontrado pela função de carregar (executada anteriormente)
  if (req.animal) {
    //envia o aniamll que está armazenado na requisição
    res.json(req.animal);
  } else {
    //caso não seja encontrada, enviará um erro 404 (NotFound) e uma mensagem
    res.status(404).json({
      message: 'O animal informado não existe'
    })
  }
}

function alterar(req,res,next) {
  if(req.animal){
    const animal = req.animal
    animal.tipoAnimal = req.body.tipoAnimal
    animal.descricao = req.body.descricao
    animal.sexo = req.body.sexo
    animal.save()

    res.json({
      message:'O animal foi alterado'
    })
  }else{  
    res.json({
      message:'Não deu certo'
    })
    
  }
  
}

function remover(req,res,next) {
    if(req.animal){
      const animal = req.animal
      animal.destroy()
      res.json({
        message : 'O animal foi removido'
      })
    }else{
      res.json({
        message : 'O animal nem encontrado foi'
      })
    }
  
}

/**
* 
* @param {*} id id será preenchido com o número que estiver na rota
*/
function carregar(req,res,next,id) {
  Animal.findOne({
    where:{
      id: id
    }
  })
  //na linha abaixo é utilizado Arrow Functions no lugar da função "anônima" (function (produto) { ... })
  //para saber mais sobre Arrow function acesse:
  //https://raphaelfabeni.com/es6-arrow-functions/
  .then((animal) => {
    //armena o animal na requisição, para que a próxima função
    //consiga recuperá-lo
    req.animal = animal;
    next();
  })
  
}


module.exports = {
  listarTodos,
  cadastrar,
  listarApenasUm,
  alterar,
  remover,
  carregar,
}