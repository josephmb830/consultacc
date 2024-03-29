const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3005;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

app.listen(port, () => {
  console.log('Mi port' + port);
});

routerApi(app);

/*let arreglo = ["codigocontribuyente", "codigopredio", "anioi", "aniof", "fechaproy", "aplica_des", "procedencia", "tipo", "des_materia", "situacion_deuda"];
*/

