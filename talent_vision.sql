create database talent_vision;
use talent_vision;

create table vagas(
	id int primary key auto_increment,
    nome_empresa varchar(20) not null,
    descricao text not null
);

create table cadastro(
	id int primary key auto_increment,
    nome varchar (30) not null,
    email varchar(50) not null,
    senha varchar(40) not null
);
create table curriculo(
	id int primary key auto_increment,
    nome varchar (40) not null,
    idade varchar (3) not null,
    descricao varchar (300) not null
);
create table postagem(
	titulo varchar(100) not null,
    texto varchar(345) not null
);

select * from curriculo, vagas, cadastro, postagem;

drop table vagas;