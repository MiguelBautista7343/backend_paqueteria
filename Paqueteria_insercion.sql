show databases;

use paqueteria;
show tables;

-- drop database paqueteria;

insert into paqueteria.tipo_transporte (tp_transporte, placas) values
('camineta','123456'),
('camineta','654321'),
('camiones','456789'),
('camiones','987654');
select * from tipo_transporte;

insert into tipo_pago (tp_pago) values
('efectivo'),
('tarjeta');
select * from tipo_pago;

insert into tipo_paquete (contenido,peso,precio) values
('television','1','10000'),
('Pala','3','1500'),
('Ipad','0.5','16000'),
('Xiaomi Mi10','0.8','8000'),
('Reloj','0.25','1500');
select * from tipo_paquete;

insert into clientes (nombre_cliente) values
('Floreria valeria'),
('Refaccionaria Mario e hijo'),
('Articulos Electronicos Ivan'),
('Relojeria Don Julio');
select * from clientes;

/*
update clientes
set nombre_cliente = 'Articulos Electronicos Ivan'
where id_cliente = 3;
*/

insert into envios (dir_envio) values
('Calle 317 No.760 Nueva Atzacoalco'),
('Av. Central Mz 429 Lt 25, Ciudad Azteca'),
('Av. Cvln. Sur 64-C, Jardines de Santa Clara'),
('Av Suterm, Rio de Luz, 55100 Ecatepec de Morelos');
select * from envios;

insert into paqueteria.paquete (fk_pago, fk_tp_paquete, fk_clientes, fk_envios) values
('2','1','1','1'),
('2','2','1','1'),
('1','3','2','2'),
('2','4','3','3'),
('1','5','4','4');
select * from paquete where id_paquete = 4;

SELECT id_paquete, nombre_cliente, contenido, tp_pago FROM paquete
INNER JOIN tipo_pago ON paquete.fk_pago = tipo_pago.id_pago
INNER JOIN tipo_paquete ON paquete.fk_tp_paquete = tipo_paquete.id_tp_paquete
INNER JOIN clientes ON paquete.fk_clientes = clientes.id_cliente
INNER JOIN envios ON paquete.fk_envios = envios.id_envio
WHERE paquete.id_paquete = 4;	

-- DELETE FROM paqueteria.paquete WHERE paqueteria.paquete.id_paquete = 1;







/* falta insertar transportista*/
insert into paqueteria.transportista (nombre,apellido_paterno,apellido_materno,telefono, fk_tp_transportes, fk_rutas, fk_paquete) values
('jose','Perez','Lopez','5532987216','1'),
('Mario','Sanchez','Mejia','5513482976','2'),
('Luis','Ortega','Mesino','5523194876','3'),
('Fernando','Alfonso','Salgado','5512789450','4');
select * from trasportista;

/*
alter table paqueteria.tipo_transporte
add placas VARCHAR(45) NOT NULL;
*/



