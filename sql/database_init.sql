DROP DATABASE IF EXISTS defaultdb;

CREATE DATABASE IF NOT EXISTS defaultdb;

USE defaultdb;

CREATE TABLE IF NOT EXISTS users(
	id int primary key auto_increment,
    name varchar(50) not null,
    city varchar(15) not null,
    age int not null,
    is_active tinyint not null
);

INSERT INTO users(name,city,age,is_active)
VALUES 
   ('Huynh','Ranzan',27,1),
   ('Luke Anderson','Itoda',26,1),
   ('Nawal Hodges','Tokyo',30,0),
   ('Khadijah Williamson','Osaka',28,0),
   ('Carla Proctor','Osaka',27,1),
   ('Sadie Cuevas','Nagoya',32,1),
   ('Cayson Busby','Kyoto',26,0),
   ('Phyllis Richards','Nara',29,1),
   ('Jordi Rudd','Tokyo',31,1),
   ('Stacy Holcomb','Tokyo',29,1)
;
;