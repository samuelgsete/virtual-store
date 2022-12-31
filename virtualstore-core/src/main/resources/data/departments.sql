-- Departamentos

INSERT INTO departments (name) VALUES ('Armazenamento');
INSERT INTO departments (name) VALUES ('Portáteis');
INSERT INTO departments (name) VALUES ('Gamer');
INSERT INTO departments (name) VALUES ('Periféricos');
INSERT INTO departments (name) VALUES ('Hardware');
INSERT INTO departments (name) VALUES ('Informática');

-- Categorias

INSERT INTO categories (name, department_id) VALUES ('HD Externo', 1);
INSERT INTO categories (name, department_id) VALUES ('Pendrive', 1);
INSERT INTO categories (name, department_id) VALUES ('Micro SD', 1);

INSERT INTO categories (name, department_id) VALUES ('Smartphones', 2);
INSERT INTO categories (name, department_id) VALUES ('Tablets', 2);
INSERT INTO categories (name, department_id) VALUES ('Notebooks', 2);

INSERT INTO categories (name, department_id) VALUES ('Consoles', 3);
INSERT INTO categories (name, department_id) VALUES ('Jogos', 3);
INSERT INTO categories (name, department_id) VALUES ('Headphone', 3);
INSERT INTO categories (name, department_id) VALUES ('Joysticks', 3);
INSERT INTO categories (name, department_id) VALUES ('Cadeiras gamer', 3);
INSERT INTO categories (name, department_id) VALUES ('Mouse Gamer', 3);
INSERT INTO categories (name, department_id) VALUES ('Teclado Gamer', 3);

INSERT INTO categories (name, department_id) VALUES ('Kit Teclado & Mouse', 4);
INSERT INTO categories (name, department_id) VALUES ('Mouse', 4);
INSERT INTO categories (name, department_id) VALUES ('Teclado', 4);
INSERT INTO categories (name, department_id) VALUES ('Caixas de som', 4);
INSERT INTO categories (name, department_id) VALUES ('Monitor', 4);
INSERT INTO categories (name, department_id) VALUES ('Mouse Pad', 4);
INSERT INTO categories (name, department_id) VALUES ('Impressoras', 4);

INSERT INTO categories (name, department_id) VALUES ('Processador', 5);
INSERT INTO categories (name, department_id) VALUES ('Memória RAM', 5);
INSERT INTO categories (name, department_id) VALUES ('Monitores', 5);
INSERT INTO categories (name, department_id) VALUES ('Fonte de alimentação', 5);
INSERT INTO categories (name, department_id) VALUES ('Placa Mãe', 5);
INSERT INTO categories (name, department_id) VALUES ('SSD', 5);
INSERT INTO categories (name, department_id) VALUES ('HDD', 5);
INSERT INTO categories (name, department_id) VALUES ('Unidades ópticas', 5);

INSERT INTO categories (name, department_id) VALUES ('Cabo de Força', 6);
INSERT INTO categories (name, department_id) VALUES ('Hub USB', 6);
INSERT INTO categories (name, department_id) VALUES ('Filtros de Linha', 6);
INSERT INTO categories (name, department_id) VALUES ('Cabo de rede', 6);
INSERT INTO categories (name, department_id) VALUES ('Coolers', 6);
INSERT INTO categories (name, department_id) VALUES ('Webcams', 6);