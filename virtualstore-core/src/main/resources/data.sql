-- Cores

INSERT INTO colors (name, hex_code) VALUES ('Preto', '#000000');
INSERT INTO colors (name, hex_code) VALUES ('Branco', '#FFFFFF');
INSERT INTO colors (name, hex_code) VALUES ('Azul escuro', '#00008B');
INSERT INTO colors (name, hex_code) VALUES ('Azul', '#0000FF');
INSERT INTO colors (name, hex_code) VALUES ('Azul claro', '#87CEEB');
INSERT INTO colors (name, hex_code) VALUES ('Amarelo', '#FFFF00');
INSERT INTO colors (name, hex_code) VALUES ('Vermelho escuro', '#8B0000');
INSERT INTO colors (name, hex_code) VALUES ('Vermelho', '#FF0000');
INSERT INTO colors (name, hex_code) VALUES ('Vermelho tomate', '#FF6347');
INSERT INTO colors (name, hex_code) VALUES ('Verde Limão', '#32CD32');
INSERT INTO colors (name, hex_code) VALUES ('Verde', '#008000');
INSERT INTO colors (name, hex_code) VALUES ('Verde primavera', '#00FF7F');
INSERT INTO colors (name, hex_code) VALUES ('Laranja', '#FFA500');
INSERT INTO colors (name, hex_code) VALUES ('Roxo', '#A020F0');
INSERT INTO colors (name, hex_code) VALUES ('Rosa', '#FF1493');
INSERT INTO colors (name, hex_code) VALUES ('Rosa claro', '#F394E1');
INSERT INTO colors (name, hex_code) VALUES ('Marrom', '#A0522D');
INSERT INTO colors (name, hex_code) VALUES ('Cinza', '#808080');
INSERT INTO colors (name, hex_code) VALUES ('Ouro', '#DAA520');
INSERT INTO colors (name, hex_code) VALUES ('Prata', '#C0C0C0');
INSERT INTO colors (name, hex_code) VALUES ('Bronze', '#8B4513');
INSERT INTO colors (name, hex_code) VALUES ('Violeta', '#EE82EE');

-- Marcas

INSERT INTO brands (name, website, url_logo) VALUES ('Intel', 'www.intel.com.br', 'www.intel.com.br/intel.png');
INSERT INTO brands (name, website, url_logo) VALUES ('AMD', 'www.amd.com.br', 'www.amd.com.br/amd.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('Asus', 'www.asus.com.br', 'www.asus.com.br/asus.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Kingston', 'www.kingston.com.br', 'www.kingston.com.br/kingston.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Lenovo', 'www.lenovo.com.br', 'www.lenovo.com.br/lenovo.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('Aser', 'www.aser.com.br', 'www.aser.com.br/aser.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('Samsung', 'www.samsung.com.br', 'www.samsung.com.br/logo.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Motorola', 'www.motorola.com.br', 'www.motorola.com.br/moto.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('Corsair', 'www.corsair.com.br', 'www.corsair.com.br/logo.jpeg');
INSERT INTO brands (name, website, url_logo) VALUES ('Microsoft', 'www.microsoft.com.br', 'www.microsoft.com.br/logo.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Sony', 'www.sony.com.br', 'www.sony.com.br/logo.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('Nintendo', 'www.nintendo.com.br', 'www.nintendo.com.br/nintendo.jpg');
INSERT INTO brands (name, website, url_logo) VALUES ('LG', 'www.lg.com.br', 'www.lg.com.br/lg.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Nvidia', 'www.nividia.com.br', 'www.nividia.com.br/logo.jpeg');
INSERT INTO brands (name, website, url_logo) VALUES ('AOC', 'www.aoc.com.br', 'www.aoc.com.br/aoc.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Sandisk', 'www.sandisk.com.br', 'www.sandisk.com.br/sandisk.png');
INSERT INTO brands (name, website, url_logo) VALUES ('HP', 'www.hp.com.br', 'www.hp.com.br/hp.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Xiaomi', 'www.xiaomi.com.br', 'www.xiaomi.com.br/xiaomi.png');
INSERT INTO brands (name, website, url_logo) VALUES ('Apple', 'www.apple.com.', 'www.apple.com.br/apple.png');

-- Departamentos

INSERT INTO departments (name) VALUES ('Armazenamento');
INSERT INTO departments (name) VALUES ('Portáteis');
INSERT INTO departments (name) VALUES ('Gamers');
INSERT INTO departments (name) VALUES ('Periféricos');
INSERT INTO departments (name) VALUES ('Hardware');
INSERT INTO departments (name) VALUES ('Informática');
INSERT INTO departments (name) VALUES ('Software');

-- Categorias

INSERT INTO categories (name, department_id) VALUES ('HD Externo', 1);
INSERT INTO categories (name, department_id) VALUES ('Pendrive', 1);
INSERT INTO categories (name, department_id) VALUES ('Micro SD', 1);

INSERT INTO categories (name, department_id) VALUES ('Smartphones', 2);
INSERT INTO categories (name, department_id) VALUES ('Tablets', 2);
INSERT INTO categories (name, department_id) VALUES ('Notebooks', 2);

INSERT INTO categories (name, department_id) VALUES ('Consoles', 3);
INSERT INTO categories (name, department_id) VALUES ('Jogos', 3);
INSERT INTO categories (name, department_id) VALUES ('Headsets', 3);
INSERT INTO categories (name, department_id) VALUES ('Joysticks', 3);
INSERT INTO categories (name, department_id) VALUES ('Cadeiras gamer', 3);
INSERT INTO categories (name, department_id) VALUES ('Mouse gamer', 3);
INSERT INTO categories (name, department_id) VALUES ('Teclado gamer', 3);

INSERT INTO categories (name, department_id) VALUES ('Kit teclado & mouse', 4);
INSERT INTO categories (name, department_id) VALUES ('Mouse', 4);
INSERT INTO categories (name, department_id) VALUES ('Teclado', 4);
INSERT INTO categories (name, department_id) VALUES ('Caixas de som', 4);
INSERT INTO categories (name, department_id) VALUES ('Monitores', 4);
INSERT INTO categories (name, department_id) VALUES ('Mouse Pad', 4);
INSERT INTO categories (name, department_id) VALUES ('Impressoras', 4);

INSERT INTO categories (name, department_id) VALUES ('Processadores', 5);
INSERT INTO categories (name, department_id) VALUES ('Memórias RAM', 5);
INSERT INTO categories (name, department_id) VALUES ('Monitores', 5);
INSERT INTO categories (name, department_id) VALUES ('Fontes de alimentação', 5);
INSERT INTO categories (name, department_id) VALUES ('Placas Mãe', 5);
INSERT INTO categories (name, department_id) VALUES ('SSDs', 5);
INSERT INTO categories (name, department_id) VALUES ('HDDs', 5);
INSERT INTO categories (name, department_id) VALUES ('Unidades ópticas', 5);

INSERT INTO categories (name, department_id) VALUES ('Cabos de Força', 6);
INSERT INTO categories (name, department_id) VALUES ('Hubs USB', 6);
INSERT INTO categories (name, department_id) VALUES ('Filtros de Linha', 6);
INSERT INTO categories (name, department_id) VALUES ('Cabos de rede', 6);
INSERT INTO categories (name, department_id) VALUES ('Coolers', 6);
INSERT INTO categories (name, department_id) VALUES ('Webcams', 6);