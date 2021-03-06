DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INTEGER(50),
    product_name VARCHAR(256) NOT NULL,
    department_name VARCHAR(128) NOT NULL,
    price DECIMAL(10,4),
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (1, "Spatula", "Kitchen", 3.55, 300);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (2, "Soccer cleats", "Sporting Goods", 40.99, 120);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (3, "Water Bottle", "Kitchen", 6.52, 500);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (4, "Mac Book", "Electronics", 685.75, 50);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (5, "Fly Rod", "Sporting Goods", 134.87, 220);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (6, "Waffle Iron", "Kitchen", 35.43, 150);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (7, "Flat Screen TV", "Electronics", 524.99, 70);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (8, "Light Bulb", "Home Goods", 4.99, 1000);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (9, "Air Fryer", "Kitchen", 75.00, 200);

INSERT INTO products
    (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (10, "Soccer Ball", "Sporting Goods", 15.25, 400);