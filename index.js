const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//endpoint de respuesta 
app.get('/', (_req, res) => {
  res.send('Integración continua');
})


app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});