CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	productName VARCHAR(255) NOT NULL,
    departmentName VARCHAR(100) NOT NULL,
	price VARCHAR(30)NOT NULL,
	stockQuantity VARCHAR(30)NULL,
    PRIMARY KEY (id)
);


INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Tv, electronics, 134.00, 10)

INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Shirt, clothing, 14.00, 15)

INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Cd, Digital, 10, 1)

INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Baksetball, Sports, 5.00, 3)

INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Apple, BamazonFresh, 0.50, 2)

INSERT INTO products (id, productName, departmentName, price, stockQuantity) 
VALUES (Sunflower, Garden, 6.00, 100)

SHOW TABLE;
