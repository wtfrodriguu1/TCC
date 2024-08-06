create database talent_vision;
use talent_vision;

create table vagas(
	id int primary key auto_increment,
    nome_empresa varchar(20) not null,
    descricao text not null
);

create table cadastro(
	id int primary key auto_increment,
    email varchar(50) not null,
    senha varchar(40) not null
);

select*from vagas, cadastro;

drop table vagas;