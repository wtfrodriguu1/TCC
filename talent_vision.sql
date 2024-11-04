create database talent_vision;
use talent_vision;

create table vagas(
	id int primary key auto_increment,
    nome_empresa varchar(20) not null,
    descricao text not null,
    requisitos varchar(350) not null,
	id_empresa int, 
    foreign key (id_empresa) references cadastro(id)
);


create table cadastro(
	id int primary key auto_increment,
    nome varchar (30) not null,
    nascimento date not null,
    telefone varchar(15) not null,
    email varchar(50) not null,
    senha varchar(40) not null,
    tipo int not null
);
create table curriculo(
	id int primary key auto_increment,
    nome varchar (40) not null,
    idade varchar (3) not null,
    descricao varchar (300) not null,
    id_usuario int, 
    foreign key (id_usuario) references cadastro(id)
);


select * from curriculo, vagas	, cadastro;

drop table postagem;