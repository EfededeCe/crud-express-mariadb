CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(6) DEFAULT NULL,
    PRIMARY KEY (id)
);

SHOW TABLE;

DESCRIBE empleados;

SELECT * FROM empleados;
