//não esquecer de instalar as dependências: npm install

const express = require('express')
const bodyParser = require('body-parser');
const rotas = require('./rotas');//NOVO
const cors = require('cors');
const app = express()
const port = 3000

//ativa o json para as requisições e respostas
app.use(bodyParser.json());
//ativa requisições de qualquer origem
app.use(cors());

//configura as rotas
app.use(rotas);//NOVO

app.get('/',(req,res) => {
  res.json({
    message: 'Tente outro endereço'
  });
});

app.listen(port, () => {
  console.log(`O servidor está escutando em http://localhost:${port}`)
})