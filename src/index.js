const express = require('express'); //passa sem a barra pois é um pacote
const routes = require('./routes'); // passa com a barra pois é uma arquivo

//variável para armazenar aplicação
const app = express();

//Express recebe requisições json no body
app.use(express.json());
app.use(routes);

//app ouvir a porta
app.listen(3333);

