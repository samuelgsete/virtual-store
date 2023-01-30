--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.brands (id, name, url_logo, website) VALUES (1, 'Intel', 'www.intel.com.br/intel.phttps://res.cloudinary.com/dt4bynswk/image/upload/v1674670489/logo-intel_kgo3oz.jpg', 'www.intel.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (2, 'AMD', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670489/logo-amd_f0vxz6.gif', 'www.amd.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (3, 'Asus', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-asus_vgjz3n.jpg', 'www.asus.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (4, 'Kingston', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670489/logo-kingston_hwiku1.jpg', 'www.kingston.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (5, 'Lenovo', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-lenovo_yke6qc.jpg', 'www.lenovo.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (6, 'Acer', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-acer_x4pccn.gif', 'www.acer.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (7, 'Samsung', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-samsung_rzgakt.jpg', 'www.samsung.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (8, 'Motorola', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-motorola_lmmd4b.jpg', 'www.motorola.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (9, 'Corsair', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-corsair_oz96pe.jpg', 'www.corsair.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (10, 'Microsoft', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670491/logo-microsoft_lgjcut.jpg', 'www.microsoft.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (11, 'Sony', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-sony_khqvot.jpg', 'www.sony.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (12, 'Nintendo', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-nintendo_rrxhrj.jpg', 'www.nintendo.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (13, 'LG', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-lg_r3kqo2.jpg', 'www.lg.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (14, 'MSI', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-msi_idspph.jpg', 'www.msi.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (15, 'AOC', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-aoc_pt5jrz.jpg', 'www.aoc.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (16, 'Sandisk', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-sandisk_sv18kz.jpg', 'www.sandisk.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (17, 'HP', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670491/logo-hp_x4u8pq.jpg', 'www.hp.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (18, 'Xiaomi', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670489/logo-xiaomi_yyzc45.jpg', 'www.xiaomi.com.br');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (19, 'Apple', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670489/logo-apple_k4lkzi.jpg', 'www.apple.com.');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (20, 'Gigabyte', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674658059/logo-gigabyte_yspsp2.gif', 'www.gigabyte.com');
INSERT INTO public.brands (id, name, url_logo, website) VALUES (21, 'Zotac', 'https://res.cloudinary.com/dt4bynswk/image/upload/v1674670490/logo-zotac_egpzoz.jpg', 'www.zotac.com.br');


--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.departments (id, name) VALUES (1, 'Armazenamento');
INSERT INTO public.departments (id, name) VALUES (2, 'Portáteis');
INSERT INTO public.departments (id, name) VALUES (3, 'Gamers');
INSERT INTO public.departments (id, name) VALUES (4, 'Periféricos');
INSERT INTO public.departments (id, name) VALUES (5, 'Hardware');
INSERT INTO public.departments (id, name) VALUES (6, 'Informática');
INSERT INTO public.departments (id, name) VALUES (7, 'Software');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.categories (id, name, total_products, department_id) VALUES (1, 'HD Externo', NULL, 1);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (2, 'Pendrive', NULL, 1);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (3, 'Micro SD', NULL, 1);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (4, 'Smartphones', NULL, 2);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (5, 'Tablets', NULL, 2);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (6, 'Notebooks', NULL, 2);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (7, 'Consoles', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (8, 'Jogos', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (9, 'Headsets', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (10, 'Joysticks', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (11, 'Cadeiras gamer', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (12, 'Mouse gamer', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (13, 'Teclado gamer', NULL, 3);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (14, 'Kit teclado & mouse', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (15, 'Mouse', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (16, 'Teclado', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (17, 'Caixas de som', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (18, 'Monitores', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (19, 'Mouse Pad', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (20, 'Impressoras', NULL, 4);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (21, 'Processadores', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (22, 'Memórias RAM', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (23, 'Monitores', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (24, 'Fontes de alimentação', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (25, 'Placa Mãe', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (26, 'SSD', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (27, 'HDD', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (28, 'Unidades ópticas', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (29, 'Placa de vídeo', NULL, 5);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (30, 'Cabos de Força', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (31, 'Hubs USB', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (32, 'Filtros de Linha', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (33, 'Cabos de rede', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (34, 'Coolers', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (35, 'Webcams', NULL, 6);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (36, 'Licenças do Windows', NULL, 7);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (37, 'Antivírus', NULL, 7);
INSERT INTO public.categories (id, name, total_products, department_id) VALUES (38, 'Escritório', NULL, 7);


--
-- Data for Name: colors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.colors (id, hex_code, name) VALUES (1, '#000000', 'Preto');
INSERT INTO public.colors (id, hex_code, name) VALUES (2, '#FFFFFF', 'Branco');
INSERT INTO public.colors (id, hex_code, name) VALUES (3, '#00008B', 'Azul escuro');
INSERT INTO public.colors (id, hex_code, name) VALUES (4, '#0000FF', 'Azul');
INSERT INTO public.colors (id, hex_code, name) VALUES (5, '#87CEEB', 'Azul claro');
INSERT INTO public.colors (id, hex_code, name) VALUES (6, '#FFFF00', 'Amarelo');
INSERT INTO public.colors (id, hex_code, name) VALUES (7, '#8B0000', 'Vermelho escuro');
INSERT INTO public.colors (id, hex_code, name) VALUES (8, '#FF0000', 'Vermelho');
INSERT INTO public.colors (id, hex_code, name) VALUES (9, '#FF6347', 'Vermelho tomate');
INSERT INTO public.colors (id, hex_code, name) VALUES (10, '#32CD32', 'Verde Limão');
INSERT INTO public.colors (id, hex_code, name) VALUES (11, '#008000', 'Verde');
INSERT INTO public.colors (id, hex_code, name) VALUES (12, '#00FF7F', 'Verde primavera');
INSERT INTO public.colors (id, hex_code, name) VALUES (13, '#FFA500', 'Laranja');
INSERT INTO public.colors (id, hex_code, name) VALUES (14, '#A020F0', 'Roxo');
INSERT INTO public.colors (id, hex_code, name) VALUES (15, '#FF1493', 'Rosa');
INSERT INTO public.colors (id, hex_code, name) VALUES (16, '#F394E1', 'Rosa claro');
INSERT INTO public.colors (id, hex_code, name) VALUES (17, '#A0522D', 'Marrom');
INSERT INTO public.colors (id, hex_code, name) VALUES (18, '#808080', 'Cinza');
INSERT INTO public.colors (id, hex_code, name) VALUES (19, '#DAA520', 'Ouro');
INSERT INTO public.colors (id, hex_code, name) VALUES (20, '#C0C0C0', 'Prata');
INSERT INTO public.colors (id, hex_code, name) VALUES (21, '#8B4513', 'Bronze');
INSERT INTO public.colors (id, hex_code, name) VALUES (22, '#EE82EE', 'Violeta');


--
-- Data for Name: pricing; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (1, 3899.90, 584.98, 3314.92, 272.99, 3626.91, 10, 0.15, 0.07);


--
-- Data for Name: installment; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (1, 3626.91, 1, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (2, 1813.46, 2, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (3, 1208.97, 3, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (4, 906.73, 4, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (5, 725.38, 5, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (6, 604.49, 6, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (7, 518.13, 7, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (8, 453.36, 8, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (9, 402.99, 9, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (10, 362.69, 10, 1);


--
-- Data for Name: product_measurements; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (1, 5, 94, 3.5, 30);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (1, 'E077561', '- iPhone com iOS 14
- Cabo de USB-C para Lightning
- Documentação', 'iPhone 11 64GB Branco
IPhone 11 Apple Tudo na medida certa.
Impressionante tela Liquid Retina LCD de 6,1 polegadas sem bordas. Resistência à água a uma profundidade de até dois metros por até 30 minutos. Ultra-angular (13 mm). Campo de visão de 120° para uma área de captura quatro vezes maior. Grande-angular (26 mm). Focus Pixels a 100% para foco automático até três vezes mais rápido com pouca luz. Vídeo 4K a 60 qps em todas as câmeras. Câmera ultra-angular que captura quatro vezes mais da cena.
Câmera surpreendente
Gire, recorte e adicione filtros com a mesma facilidade que em fotos. Seja na hora de cantar parabéns ou durante um luau em volta da fogueira, usando o modo Noite, você tira fotos mais naturais em ambientes com pouca luz. Bateria para o dia todo. Chip A13 Bionic, o mais rápido em um smartphone. E recarga rápida com carregador de 18W (vendido separadamente). O Face ID é a tecnologia de autenticação facial mais segura em um smartphone.
Ele não armazena nem compartilha sua foto e é ainda mais seguro do que o Touch ID.', '7898573298404', true, true, true, 'iPhone 11', 'iPhone 11', 'iPhone 11 64GB Branco, 4G, Tela de 6.1, Câmera Dupla 12MP + Selfie 12MP - MHDC3BR/A', 6, '2023-01-26 17:02:38.617923', 0, 2, 0, '2023-01-26 17:02:38.618465', 12, 19, 4, 1, 1);


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (1, 1144, false, 'iphone-11-3.jpeg', 'ec9fdb2a-89f3-467f-9b13-6568161c0627', 77338, 'http://res.cloudinary.com/dt4bynswk/image/upload/ec9fdb2a-89f3-467f-9b13-6568161c0627', 1144, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (2, 600, false, 'iphone11-2.jpg', 'd769e3e2-76d8-4d1c-b933-19bb52ded665', 85029, 'http://res.cloudinary.com/dt4bynswk/image/upload/d769e3e2-76d8-4d1c-b933-19bb52ded665', 600, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (3, 1000, false, 'iphone-11-3.jpg', '44716d94-de68-4f38-b071-3dbe3722947c', 47831, 'http://res.cloudinary.com/dt4bynswk/image/upload/44716d94-de68-4f38-b071-3dbe3722947c', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (4, 1000, false, 'iphone-11-2.jpg', 'a047ea3b-8a71-49b1-a8c0-ba7f8054eaf0', 55090, 'http://res.cloudinary.com/dt4bynswk/image/upload/a047ea3b-8a71-49b1-a8c0-ba7f8054eaf0', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (5, 1000, true, 'iphone11-1.jpg', '22126728-0db5-41b9-bee5-3dc99bf244ae', 86237, 'http://res.cloudinary.com/dt4bynswk/image/upload/22126728-0db5-41b9-bee5-3dc99bf244ae', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (6, 1000, false, 'iphone-11-1.jpg', '9c4c19db-ae51-413e-b4fb-490c8aa081ad', 68135, 'http://res.cloudinary.com/dt4bynswk/image/upload/9c4c19db-ae51-413e-b4fb-490c8aa081ad', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (7, 1000, false, 'iphone-11-0.jpg', '09068b29-bfb3-4131-8fda-51adb3e2b7e0', 60930, 'http://res.cloudinary.com/dt4bynswk/image/upload/09068b29-bfb3-4131-8fda-51adb3e2b7e0', 1000, 1);


--
-- Data for Name: stock; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.stock (id, available_units, updated_at) VALUES (1, 20, '2023-01-26 19:57:51.393');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (2, 10, '2023-01-26 19:57:39.78');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (3, 30, '2023-01-26 19:57:58.1');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (4, 30, '2023-01-26 20:02:27.258');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (5, 15, '2023-01-26 19:57:45.771');


--
-- Data for Name: product_versions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (1, 6, 1, 1);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (2, 1, 1, 2);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (3, 12, 1, 3);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (4, 2, 1, 4);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (5, 8, 1, 5);


--
-- Data for Name: specifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.specifications (id, name, _value, product_id) VALUES (1, 'Face ID', ' Reconhecimento facial pela câmera TrueDepth', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (2, ' Gravação de vídeo', '4K a 24 qps, 30 qps ou 60 qps', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (3, 'Resolução', '792 x 828 pixels a 326 ppp', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (4, 'Capacidade', '64Gb', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (5, 'Câmera', '(ultra-angular e grande-angular) de 12 MP', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (6, 'Câmera Frontal', '12MP', 1);