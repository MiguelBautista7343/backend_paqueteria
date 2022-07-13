console.log ('Hola soy el servidor');
const express=require('express');
const app = express();
const port= (process.env.port || 3000);
const cors=require('cors');
const { use } = require('./routes/rutas');
app.set('port', port);
app.listen(app.get('port'));
app.use(express.json());
app.use(cors());

app.use('/proyecto', require('./routes/rutas'));