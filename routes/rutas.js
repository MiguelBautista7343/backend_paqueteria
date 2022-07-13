const routes = require('express').Router();
routes.get('/reg', (req, res) => {
    res.send('ruta principal')
});

module.exports = routes;


const consulta = require('../config/conexionbd.js');
//pais
 routes.get('/paqueteria/pais',(req,res)=>{
    let sql="SELECT * FROM pais";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//estado
routes.get('/paqueteria/estado',(req,res)=>{
    let sql="SELECT * FROM estado";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//municipio
routes.get('/paqueteria/municipio',(req,res)=>{
    let sql="SELECT * FROM municipio";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//codigo_postal
routes.get('/paqueteria/codigo_postal',(req,res)=>{
    let sql="SELECT * FROM codigo_postal";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//colonia
routes.get('/paqueteria/colonia',(req,res)=>{
    let sql="SELECT * FROM colonia";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//direccion
routes.get('/paqueteria/direccion',(req,res)=>{
    let sql="SELECT * FROM direccion";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  
//rutas
routes.get('/paqueteria/rutas',(req,res)=>{
    let sql="SELECT * FROM rutas";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})  


//direccion con nombres completa
routes.get('/paqueteria/direccion_nombres', (req, res) => {
    let sql = "select direccion.direccion, colonia.nombre_colonia Colonia, codigo_postal.codigo_postal CodigoPostal, municipio.nombre_municipio NombreMunicipio, estado.nombre_estado NombreEstado, pais.nombre_pais Pais from direccion inner join colonia on direccion.id_colonia = colonia.id_colonia inner join codigo_postal on direccion.id_codigo_postal = codigo_postal.id_codigo_postal inner join municipio on direccion.id_municipio = municipio.id_municipio inner join estado on direccion.id_estado = estado.id_estado inner join pais on direccion.id_pais = pais.id_pais";
    consulta.query(sql, (err, rows) => {

        if (!err) res.json(rows)
        else
            console.error(err)


    })
})

//direccion con nombres por id
routes.get('/paqueteria-direccion/nombres/:id',(req,res)=>{
    const {id} = req.params;

    let sql="select id_direccion, direccion, nombre_estado, codigo_postal, nombre_colonia from direccion inner join estado, codigo_postal, colonia where fk_estado = id_estado and fk_codigo_postal = id_codigo_postal and fk_colonia = id_colonia and id_direccion=?";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})

//cp de estado
routes.get('/paqueteria/cp-estado',(req,res)=>{
    const {id} = req.params;

    let sql="select nombre_estado, codigo_postal from direccion inner join estado, codigo_postal, colonia where fk_estado = id_estado and fk_codigo_postal = id_codigo_postal and fk_colonia = id_colonia;";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err) res.json(rows)
        else 
        console.error(err)

    })
})



//borrar estado
routes.delete('/paqueteria-direccion/delete-estado/:id',(req,res)=>{
    const {id} = req.params;

    let sql="DELETE FROM estado where id_estado=?";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err) res.json('estado eliminado')
        else 
        console.error(err)

    })
})

//borrar codigo postal
routes.delete('/paqueteria-direccion/delete-cp/:id',(req,res)=>{
    const {id} = req.params;

    let sql="DELETE FROM codigo_postal where id_codigo_postal=?";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err) res.json('codigo postal eliminado')
        else 
        console.error(err)

    })
})

//borrar colonia
routes.delete('/paqueteria-direccion/delete-colonia/:id',(req,res)=>{
    const {id} = req.params;

    let sql="DELETE FROM colonia where id_colonia=?";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err) res.json('colonia eliminada')
        else 
        console.error(err)

    })
})

//insertar estado
routes.post('/paqueteria-direccion/insert/estado',(req,res)=>{
    const { nombre_estado} = req.body;

    let sql="INSERT INTO `paqueteria`.`estado` (`nombre_estado`) VALUES ('"+nombre_estado+"')";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json('insertaste un estado')
        else 
        console.error(err)

    })
})

//insertar codigo_postal
routes.post('/paqueteria-direccion/insert/cp',(req,res)=>{
    const { codigo_postal} = req.body;

    let sql="INSERT INTO `paqueteria`.`codigo_postal` (`codigo_postal`) VALUES ('"+codigo_postal+"')";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json('insertaste un codigo postal')
        else 
        console.error(err)

    })
})

//insertar colonia
routes.post('/paqueteria-direccion/insert/colonia',(req,res)=>{
    const { colonia} = req.body;

    let sql="INSERT INTO `paqueteria`.`colonia` (`nombre_colonia`) VALUES ('"+colonia+"')";
    consulta.query(sql,(err,rows)=>{
        if(!err) res.json('insertaste una colonia')
        else 
        console.error(err)

    })
})

//Actualizar datos DB
routes.put('/paqueteriat/put/:id',(req,res)=>{
    const {id} = req.params;
    const {direccion} = req.body;
    let sql = "UPDATE `paqueteria`.`direccion` SET `dir_envio` = '"+direccion+"' WHERE id_direccion = ?" ;

    consulta.query(sql,[id],(err,rows)=>{
        if(!err)
        res.json('Dato actualizado');
        else
        console.error(err);
    })
})