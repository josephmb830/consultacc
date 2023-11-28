const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

app.get('/parametros', (req, res) => {
  res.json({
    codigocontribuyente: '01',
    codigopredio: 123,
    anioi: 1995,
    aniof: 2023,
    fechaproy: 2023,
    aplica_des: true,
    procedencia: "Todas-las-procedencias",
    tipo:  "Agrupado-Trimestralmente",
    des_materia: "Impuesto-Predial",
    situacion_deuda: "Todas-las-Opciones"

  });
})

app.listen(port, () => {
  console.log('Mi port' + port);
});


/*let arreglo = ["codigocontribuyente", "codigopredio", "anioi", "aniof", "fechaproy", "aplica_des", "procedencia", "tipo", "des_materia", "situacion_deuda"];
*/

