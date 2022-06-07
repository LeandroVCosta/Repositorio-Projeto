create database Darksouls;

use Darksouls;

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar (60),
Email varchar (60) UNIQUE NOT NULL,
Senha varchar(255),
DsFAV char (3));