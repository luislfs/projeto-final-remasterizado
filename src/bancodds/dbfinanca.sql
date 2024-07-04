create database if not exist dbfinanca;

use dbfinanca;

create table tblUsuario(

    codUsuario NOT NULL INT(6),
    nomUsuario CHAR (255),
    numTelefone NOT NULL INT (12),
    dscEmail VARCHAR (255),
    dscSenha VARCHAR (255), 

     PRIMARY KEY (codUsuario)
)

create table tblTransacao (

    codTransacao NOT NULL INT (255),
    catTransacao VARCHAR(255),
    valTransacao NOT NULL INT (1000),
    datTransacao NOT NULL INT (8),

     PRIMARY KEY (codTransacao)
     FOREIGN KEY (codUsuario)
     FOREIGN KEY (codCategoria)
     FOREIGN KEY (codOrcamento)
    
)

create table tblCategoria (

    codCategoria NOT NULL INT (255),
    nomCategoria VARCHAR(255)   

    PRIMARY KEY (codCategoria)
)

create table tblOrcamento (

    codOrcamento NOT NULL INT(255),
    valOrcamento NOT NULL INT (1000)

    PRIMARY KEY (codOrcamento)
    FOREIGN KEY (codCategoria)
    FOREIGN KEY (codUsuario)
)
