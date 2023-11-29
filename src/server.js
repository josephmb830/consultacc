const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

app.get('/contribuyentes', (req, res) => {

  res.json([
    {
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
  
    },
    {
      codigocontribuyente: '02',
      codigopredio: 443,
      anioi: 1996,
      aniof: 2023,
      fechaproy: 2023,
      aplica_des: true,
      procedencia: "Todas-las-procedencias",
      tipo:  "Agrupado-Trimestralmente",
      des_materia: "Impuesto-Predial",
      situacion_deuda: "Todas-las-Opciones"
  
    }
  ]);
})

app.get('/prueba', (req, res) => {
  const contribuyentes = [];
  for (let index = 0; index < 100; index++) {
    contribuyentes.push({
      nombre: faker.commerce.productName(),
      codigocontribuyente: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),

    });
    
  }
  res.json(contribuyentes);
})

app.get('/contribuyentes/:id', (req, res) => {
  const { id } = req.params;
  res.json ({
      id,
      codigocontribuyente: '02',
      codigopredio: 443,
      anioi: 1996,
      aniof: 2023,
      fechaproy: 2023,
      aplica_des: true,
      procedencia: "Todas-las-procedencias",
      tipo:  "Agrupado-Trimestralmente",
      des_materia: "Impuesto-Predial",
      situacion_deuda: "Todas-las-Opciones"
  });
})

app.get('/anios/:anioId/contribuyentes/:contribuyenteId', (req, res) => {
  const { anioId, contribuyenteId } = req.params;
  res.json({
    anioId,
    contribuyenteId,
  });
})

app.get('/anios', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/index.html', (req, res) => {
  const { codigo } = req.query;
  if (codigo) {
    res.json({
      codigo,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.listen(port, () => {
  console.log('Mi port' + port);
});


/*let arreglo = ["codigocontribuyente", "codigopredio", "anioi", "aniof", "fechaproy", "aplica_des", "procedencia", "tipo", "des_materia", "situacion_deuda"];
*/

