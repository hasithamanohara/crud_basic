CREATE DATABASE hasithaProject;

CREATE TABLE userCrud (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255)
);