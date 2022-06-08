create database Darksouls;
use Darksouls;

create table DarkSouls (
idDS int primary key auto_increment,
nomeDS varchar(60));

create table FundoDS (
idFundo int primary key auto_increment,
FkDS int unique,
foreign key (FkDS) references DarkSouls(idDS));

create table Usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar (60),
Email varchar (60) UNIQUE,
Senha varchar(255),
fkDS int,
foreign key (fkDS) references DarkSouls(idDS));

select count(fkDS) as DS from Usuario group by FkDS order by fkDS;
insert into DarkSouls(nomeDS) values ('Dark Souls 1');
insert into DarkSouls(nomeDS) values ('Dark Souls 2');
insert into DarkSouls(nomeDS) values ('Dark Souls 3');