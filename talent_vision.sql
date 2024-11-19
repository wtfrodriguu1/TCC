create database talent_vision;
use talent_vision;


create table vagas(
	id int primary key auto_increment,
    nome_empresa varchar(20) not null,
    descricao text not null,
    requisitos varchar(350) not null,
    beneficios varchar(400) not null,
    contato varchar(100) not null,
	id_empresa int, 
    foreign key (id_empresa) references cadastro(id)
);

INSERT INTO vagas(nome_empresa, descricao, requisitos, beneficios, contato, id_empresa) VALUES('a','a','a','a','a','2');


create table cadastro(
	id int primary key auto_increment,
    nome varchar (30) not null,
    nascimento varchar(45) not null,
    telefone varchar(15) not null,
    email varchar(50) not null,
    senha varchar(40) not null,
    tipo int not null
);
create table curriculo(
	id int primary key auto_increment,
    nome varchar (40) not null,
    idade varchar (3) not null,
    experiencias varchar (300) not null,
    bio varchar (300) not null,
    id_usuario int, 
    foreign key (id_usuario) references cadastro(id)
);


select * from curriculo, vagas	, cadastro;

drop table curriculo, vagas	, cadastro;

drop table curriculo;
