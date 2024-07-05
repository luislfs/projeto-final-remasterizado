-- create database if not exist dbfinanca;

-- use dbfinanca;

-- create table tblUsuario(

--     codUsuario NOT NULL INT(6),
--     nomUsuario CHAR (255),
--     numTelefone NOT NULL INT (12),
--     dscEmail VARCHAR (255),
--     dscSenha VARCHAR (255), 

--      PRIMARY KEY (codUsuario)
-- )

-- create table tblTransacao (

--     codTransacao NOT NULL INT (255),
--     catTransacao VARCHAR(255),
--     valTransacao NOT NULL INT (1000),
--     datTransacao NOT NULL INT (8),

--      PRIMARY KEY (codTransacao)
--      FOREIGN KEY (codUsuario)
--      FOREIGN KEY (codCategoria)
--      FOREIGN KEY (codOrcamento)
    
-- )

-- create table tblCategoria (

--     codCategoria NOT NULL INT (255),
--     nomCategoria VARCHAR(255)   

--     PRIMARY KEY (codCategoria)
-- )

-- create table tblOrcamento (

--     codOrcamento NOT NULL INT(255),
--     valOrcamento NOT NULL INT (1000)

--     PRIMARY KEY (codOrcamento)
--     FOREIGN KEY (codCategoria)
--     FOREIGN KEY (codUsuario)
-- )

CREATE DATABASE IF NOT EXISTS dbfinanca;

USE dbfinanca;

CREATE TABLE tblUsuario (
    codUsuario INT NOT NULL,
    nomUsuario CHAR(255),
    numTelefone INT NOT NULL,
    dscEmail VARCHAR(255),
    dscSenha VARCHAR(255),
    PRIMARY KEY (codUsuario)
);

CREATE TABLE tblCategoria (
    codCategoria INT NOT NULL,
    nomCategoria VARCHAR(255),
    PRIMARY KEY (codCategoria)
);

CREATE TABLE tblOrcamento (
    codOrcamento INT NOT NULL,
    valOrcamento INT NOT NULL,
    codCategoria INT,  -- Adicionei codCategoria como chave estrangeira
    codUsuario INT,    -- Adicionei codUsuario como chave estrangeira
    PRIMARY KEY (codOrcamento),
    FOREIGN KEY (codCategoria) REFERENCES tblCategoria(codCategoria),
    FOREIGN KEY (codUsuario) REFERENCES tblUsuario(codUsuario)
);

CREATE TABLE tblTransacao (
    codTransacao INT NOT NULL,
    catTransacao VARCHAR(255),
    valTransacao INT NOT NULL,
    datTransacao DATE,  -- Alterei para DATE, pois é mais adequado para datas
    codUsuario INT,     -- Adicionei codUsuario como chave estrangeira
    codCategoria INT,   -- Adicionei codCategoria como chave estrangeira
    codOrcamento INT,   -- Adicionei codOrcamento como chave estrangeira
    PRIMARY KEY (codTransacao),
    FOREIGN KEY (codUsuario) REFERENCES tblUsuario(codUsuario),
    FOREIGN KEY (codCategoria) REFERENCES tblCategoria(codCategoria),
    FOREIGN KEY (codOrcamento) REFERENCES tblOrcamento(codOrcamento)
);

-- Inserçoes teste
INSERT INTO tblUsuario (codUsuario, nomUsuario, numTelefone, dscEmail, dscSenha)
VALUES (1, 'João Silva', 1234567890, 'joao.silva@email.com', 'senha123'),
       (2, 'Maria Santos', 9876543210, 'maria.santos@email.com', 'senha456');

INSERT INTO tblCategoria (codCategoria, nomCategoria)
VALUES (1, 'Alimentação'),
       (2, 'Transporte'),
       (3, 'Lazer');

INSERT INTO tblOrcamento (codOrcamento, valOrcamento, codCategoria, codUsuario)
VALUES (1, 1000, 1, 1),   -- Orçamento de alimentação para João Silva
       (2, 500, 2, 1),    -- Orçamento de transporte para João Silva
       (3, 800, 3, 2);    -- Orçamento de lazer para Maria Santos

INSERT INTO tblTransacao (codTransacao, catTransacao, valTransacao, datTransacao, codUsuario, codCategoria, codOrcamento)
VALUES (1, 'Restaurante', 50, '2024-07-01', 1, 1, 1),   -- Transação de restaurante para João Silva
       (2, 'Uber', 30, '2024-07-02', 1, 2, 2),         -- Transação de Uber para João Silva
       (3, 'Cinema', 20, '2024-07-03', 2, 3, 3);       -- Transação de cinema para Maria Santos
