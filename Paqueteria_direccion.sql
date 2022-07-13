use paqueteria;

insert into pais (nombre_pais) values
('México'),
('Estados Unidos');
select * from pais;

insert into estado (nombre_estado, fk_pais) values
('Aguascalientes',1),
('Baja California',1),
('Baja California Sur',1),
('Campeche',1),
('Chiapas ',1);
select * from estado;

insert into municipio (nombre_municipio, fk_estado) values
('Aguascalientes',1),
('Asientos',1),
('Calvillo',1),
('Cosio',1),
('El llano ',1);
select * from municipio;


insert into codigo_postal (codigo_postal, fk_municipio) values
('20394',1),
('20395',1),
('20396',1),
('20000',1),
('20010',1),
('20126',1);
select * from codigo_postal;


insert into colonia (nombre_colonia,fk_codigo_postal) values
('La Estrella',1),
('Cuchilla A. Rosales',1),
('Jardines de San Gabriel',1);
select * from colonia;

insert into direccion (direccion,id_pais, id_estado,id_municipio, id_codigo_postal, id_colonia) values
('calle zodiaco no. 53','1','1','1','1','1'),
('calle camelia no. 70','1','2','2','2','2'),
('calle durazno no. 56','1','3','3','3','3');
select * from direccion;


/* esta ya quedo */

select direccion.direccion, colonia.nombre_colonia Colonia, codigo_postal.codigo_postal CodigoPostal, municipio.nombre_municipio NombreMunicipio, estado.nombre_estado NombreEstado, pais.nombre_pais Pais
from direccion
inner join colonia on direccion.id_colonia = colonia.id_colonia
inner join codigo_postal on direccion.id_codigo_postal = codigo_postal.id_codigo_postal
inner join municipio on direccion.id_municipio = municipio.id_municipio
inner join estado on direccion.id_estado = estado.id_estado
inner join pais on direccion.id_pais = pais.id_pais;






