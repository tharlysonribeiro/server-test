const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor!');
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
