const express = require('express');

let app = express();

app.get('/', (req,res)=>res.send('Olá mundo!'))
app.get('/contatos',(req, res)=>res.send(['Contato1:','contato2:','Contato3:','contato4:']))
app.get('/nome',(req,res)=>res.send({nome:'Gabriel', idade:25}))
// criando um servidor
app.listen(7000, ()=>console.log('Servidor rodando na porta 7000'))

