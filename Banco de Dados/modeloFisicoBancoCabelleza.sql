CREATE DATABASE db_Cabelleza;
USE db_Cabelleza;

CREATE TABLE cliente (
idCliente INT NOT NULL AUTO_INCREMENT, 
dataNasc DATE NOT NULL,
emailUsuario varchar(100) NOT NULL, 
senhaUsuario varchar(100) NOT NULL ,
tipoCabelo char(30) NOT NULL,
nomeUsuario char(30) NOT NULL,
CONSTRAINT pk_idCliente PRIMARY KEY (idCliente),
CONSTRAINT uk_nomeUsuario UNIQUE (nomeUsuario)
);

SELECT * FROM cliente;

CREATE TABLE saloes (
idSalao INT NOT NULL AUTO_INCREMENT,
nomeSalao VARCHAR(100) NOT NULL,
proprietarioSalao VARCHAR(100) NOT NULL,
emailSalao VARCHAR(100) NOT NULL,
sehaSalao VARCHAR(100) NOT NULL, 	
imagemSalo BLOB NOT NULL,
cnpjSalao CHAR(16) NOT NULL,
dataInscricao DATE NOT NULL,
telefoneSalao CHAR(13) NOT NULL,
cepSalao CHAR(9) NOT NULL UNIQUE KEY,
cidadeSalao CHAR(30) NOT NULL,
estadoSalao CHAR(30) NOT NULL,
CONSTRAINT pk_idSalao PRIMARY KEY (idSalao),
CONSTRAINT uk_cnpjSalao UNIQUE (cnpjSalao)
);

SELECT * FROM saloes;

create table assinatura (
idAssinatura INT NOT NULL AUTO_INCREMENT, 
idSalao INT NOT NULL,
precoAssinatura DECIMAL(4,2) NOT NULL,
tipoAssinatura char(30) NOT NULL,
CONSTRAINT idSalao FOREIGN KEY (idSalao) REFERENCES saloes (idSalao),
CONSTRAINT pk_idAssinatura PRIMARY KEY (idAssinatura)
);

SELECT * FROM assinatura;

create table cabelo (
idCabelo INT NOT NULL AUTO_INCREMENT,
tipoCabelo VARCHAR(30) NOT NULL,
dataCorte DATE NOT NULL,
CONSTRAINT pk_idCabelo PRIMARY KEY (idCabelo)
);

SELECT * FROM cabelo;

CREATE TABLE ong (
    idONG INT NOT NULL AUTO_INCREMENT,
    cnpjONG CHAR(16) NOT NULL,
    nomeONG VARCHAR(100) NOT NULL,
    dataRecebimento DATE NOT NULL,
    enderecoONG VARCHAR(100) NOT NULL,
    CONSTRAINT pk_idONG PRIMARY KEY (idONG),
    CONSTRAINT uk_cnpjONG UNIQUE (cnpjONG)
);
SELECT * FROM ong;