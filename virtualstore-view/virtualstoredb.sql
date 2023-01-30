--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

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

INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (1, 3299.89, 659.98, 2639.91, 329.99, 2969.90, 12, 0.2, 0.1);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (2, 499.78, 79.96, 419.82, 44.98, 454.80, 6, 0.16, 0.09);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (3, 499.78, 79.96, 419.82, 44.98, 454.80, 6, 0.16, 0.09);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (4, 489.90, 93.08, 396.82, 39.19, 450.71, 5, 0.19, 0.08);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (5, 3699.90, 702.98, 2996.92, 221.99, 3477.91, 12, 0.19, 0.06);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (6, 5599.89, 615.99, 4983.90, 279.99, 5319.90, 12, 0.11, 0.05);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (7, 2399.78, 407.96, 1991.82, 191.98, 2207.80, 8, 0.17, 0.08);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (8, 4999.90, 799.98, 4199.92, 250.00, 4749.90, 12, 0.16, 0.05);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (9, 2999.90, 539.98, 2459.92, 209.99, 2789.91, 8, 0.18, 0.07);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (10, 3299.90, 527.98, 2771.92, 230.99, 3068.91, 10, 0.16, 0.07);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (11, 5199.90, 779.98, 4419.92, 363.99, 4835.91, 12, 0.15, 0.07);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (12, 3199.70, 319.97, 2879.73, 159.99, 3039.71, 8, 0.1, 0.05);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (13, 449.00, 112.25, 336.75, 44.90, 404.10, 6, 0.25, 0.1);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (14, 399.19, 119.76, 279.43, 47.90, 351.29, 4, 0.3, 0.12);
INSERT INTO public.pricing (id, base_price, incash_discount, incash_price, installment_discount, installment_price, max_installment, rate_incash_discount, rate_installment_discount) VALUES (15, 1199.90, 299.98, 899.92, 107.99, 1091.91, 7, 0.25, 0.09);


--
-- Data for Name: installment; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (1, 2969.90, 1, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (2, 1484.95, 2, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (3, 989.97, 3, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (4, 742.48, 4, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (5, 593.98, 5, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (6, 494.98, 6, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (7, 424.27, 7, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (8, 371.24, 8, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (9, 329.99, 9, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (10, 296.99, 10, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (11, 269.99, 11, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (12, 247.49, 12, 1);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (13, 454.80, 1, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (14, 227.40, 2, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (15, 151.60, 3, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (16, 113.70, 4, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (17, 90.96, 5, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (18, 75.80, 6, 2);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (19, 454.80, 1, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (20, 227.40, 2, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (21, 151.60, 3, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (22, 113.70, 4, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (23, 90.96, 5, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (24, 75.80, 6, 3);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (25, 450.71, 1, 4);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (26, 225.36, 2, 4);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (27, 150.24, 3, 4);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (28, 112.68, 4, 4);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (29, 90.14, 5, 4);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (30, 3477.91, 1, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (31, 1738.96, 2, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (32, 1159.30, 3, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (33, 869.48, 4, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (34, 695.58, 5, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (35, 579.65, 6, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (36, 496.84, 7, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (37, 434.74, 8, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (38, 386.43, 9, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (39, 347.79, 10, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (40, 316.17, 11, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (41, 289.83, 12, 5);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (42, 5319.90, 1, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (43, 2659.95, 2, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (44, 1773.30, 3, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (45, 1329.98, 4, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (46, 1063.98, 5, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (47, 886.65, 6, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (48, 759.99, 7, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (49, 664.99, 8, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (50, 591.10, 9, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (51, 531.99, 10, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (52, 483.63, 11, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (53, 443.33, 12, 6);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (54, 2207.80, 1, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (55, 1103.90, 2, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (56, 735.93, 3, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (57, 551.95, 4, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (58, 441.56, 5, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (59, 367.97, 6, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (60, 315.40, 7, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (61, 275.98, 8, 7);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (62, 4749.90, 1, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (63, 2374.95, 2, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (64, 1583.30, 3, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (65, 1187.48, 4, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (66, 949.98, 5, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (67, 791.65, 6, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (68, 678.56, 7, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (69, 593.74, 8, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (70, 527.77, 9, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (71, 474.99, 10, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (72, 431.81, 11, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (73, 395.83, 12, 8);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (74, 2789.91, 1, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (75, 1394.96, 2, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (76, 929.97, 3, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (77, 697.48, 4, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (78, 557.98, 5, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (79, 464.99, 6, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (80, 398.56, 7, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (81, 348.74, 8, 9);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (82, 3068.91, 1, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (83, 1534.46, 2, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (84, 1022.97, 3, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (85, 767.23, 4, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (86, 613.78, 5, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (87, 511.49, 6, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (88, 438.42, 7, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (89, 383.61, 8, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (90, 340.99, 9, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (91, 306.89, 10, 10);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (92, 4835.91, 1, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (93, 2417.96, 2, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (94, 1611.97, 3, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (95, 1208.98, 4, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (96, 967.18, 5, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (97, 805.99, 6, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (98, 690.84, 7, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (99, 604.49, 8, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (100, 537.32, 9, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (101, 483.59, 10, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (102, 439.63, 11, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (103, 402.99, 12, 11);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (104, 3039.71, 1, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (105, 1519.86, 2, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (106, 1013.24, 3, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (107, 759.93, 4, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (108, 607.94, 5, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (109, 506.62, 6, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (110, 434.24, 7, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (111, 379.96, 8, 12);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (112, 404.10, 1, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (113, 202.05, 2, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (114, 134.70, 3, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (115, 101.03, 4, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (116, 80.82, 5, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (117, 67.35, 6, 13);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (118, 351.29, 1, 14);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (119, 175.65, 2, 14);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (120, 117.10, 3, 14);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (121, 87.82, 4, 14);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (122, 1091.91, 1, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (123, 545.96, 2, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (124, 363.97, 3, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (125, 272.98, 4, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (126, 218.38, 5, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (127, 181.99, 6, 15);
INSERT INTO public.installment (id, amount, quantity, pricing_id) VALUES (128, 155.99, 7, 15);


--
-- Data for Name: product_measurements; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (1, 10.5, 128, 1.4, 54);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (2, 15, 11, 4.5, 75);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (3, 15, 11, 4.5, 75);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (4, 2.8, 17.7, 4.4, 17.8);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (5, 8.3, 150.9, 3.5, 75.7);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (6, 8.3, 89, 4.4, 110);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (7, 188.16, 611, 21.9, 972.65);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (8, 60.3, 205.3, 8.5, 49.5);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (9, 25.3, 130.3, 3.2, 78.2);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (10, 12.1, 49.6, 11.1, 125.8);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (11, 106, 66, 6.8, 160);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (12, 5.3, 35, 2.1, 123.4);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (13, 2.1, 9.1, 0.49, 48.7);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (14, 1.9, 26.3, 0.5, 32.1);
INSERT INTO public.product_measurements (id, diameter, height, weight, width) VALUES (15, 2.1, 48.5, 8.9, 32.1);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (6, 'H098692', '1 x Notebook Asus Vivobook 15
1 x Carregadpr
1 x Guia de instruções', 'Mostre seu estilo para o mundo com o ASUS Vivobook 15, o notebook repleto de recursos que facilita a realização de tarefas, em qualquer lugar. Tudo no Vivobook 15 é arrojado e aprimorado, desde seu poderoso processador AMD Ryzen, até sua tela nítida e clara, passando por sua dobradiça plana de 180° cor moderna, design elegante e um incrível e exclusivo sistema de proteção antibacteriana. Conheça o novo Vivobook 15!', '7898573298404', true, true, true, 'Vivobook', ' M1502IA-EJ211W', 'Notebook Asus Vivobook 15 AMD Ryzen 7-4800H, 16GB RAM, SSD 256GB, 15.6 Full HD, Windows 11, Prata Metálico - M1502IA-EJ211W', 6, '2023-01-27 12:46:39.564381', 0, 2, 0, '2023-01-27 12:46:39.567764', 12, 3, 6, 6, 6);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (1, 'S069840', '1 x Placa de Vídeo Gigabyte AMD Radeon RX 6700 XT Eagle
1 x  Guia rápido', 'O sistema de resfriamento WINDFORCE 3X possui ventiladores de lâmina exclusivos de 3x80mm, rotação alternada, 3 tubos de calor de cobre composto GPU de toque direto, ventilador ativo 3D e resfriamento de tela, que juntos fornecem dissipação de calor de alta eficiência. A rotação alternada pode reduzir a turbulência dos ventiladores adjacentes e aumentar a pressão do ar. A GIGABYTE gira as ventoinhas adjacentes na direção oposta, para que a direção do fluxo de ar entre as duas ventoinhas seja a mesma, reduzindo a turbulência e aumentando a pressão do fluxo de ar. O 3D Active Fan fornece resfriamento semi-passivo e os ventiladores permanecerão desligados quando a GPU estiver em um jogo de baixa carga ou baixa potência. O fluxo de ar é derramado pela borda triangular do ventilador e guiado suavemente através da curva de listras 3D na superfície do ventilador.', '7898573298404', true, true, true, ' RX 6700 XT', 'GV-R67XTEAGLE-1', 'Placa de Vídeo Gigabyte AMD Radeon RX 6700 XT Eagle, 12GB GDDR6, RGB, Ray Tracing - GV-R67XTEAGLE-12GD', 6, '2023-01-27 12:02:00.347859', 0, 2, 0, '2023-01-27 12:02:00.347889', 12, 2, 29, 1, 1);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (2, 'D016229', '1 x Controlador sem fio DualSense
1 x Manual de instruções', 'Sinta o feedback fisicamente responsivo às suas ações no jogo com atuadores duplos que substituem os motores tradicionais Em suas mãos, essas vibrações dinâmicas podem simular a sensação de tudo, desde ambientes até o recuo de diferentes armas. Experimente vários níveis de força e tensão conforme você interage com o equipamento e os ambientes do jogo. Desde puxar a corda do arco cada vez mais tensa até pisar no freio em um carro em alta velocidade, sinta-se fisicamente conectado às suas ações na tela. Converse com amigos online usando o microfone embutido ou conectando um fone de ouvido ao conector de 3,5 mm. Ligue e desligue facilmente a captura de voz a qualquer momento com o botão dedicado para silenciar. Capture e transmita seus momentos de jogo mais épicos com o botão criar. Com base no sucesso do botão pioneiro SHARE, "criar" oferece aos jogadores mais maneiras de produzir conteúdo de jogos e transmitir suas aventuras ao vivo para o mundo.', '88956231569', true, true, true, 'Gamer', 'DualSense', 'Controle Sony DualSense PlayStation 5, Sem Fio - 3006452', 6, '2023-01-27 12:09:16.80866', 0, 2, 0, '2023-01-27 12:09:16.808689', 12, 11, 10, 2, 2);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (3, 'A038330', '1 x Controlador sem fio DualSense
1 x Manual de instruções', 'Sinta o feedback fisicamente responsivo às suas ações no jogo com atuadores duplos que substituem os motores tradicionais Em suas mãos, essas vibrações dinâmicas podem simular a sensação de tudo, desde ambientes até o recuo de diferentes armas. Experimente vários níveis de força e tensão conforme você interage com o equipamento e os ambientes do jogo. Desde puxar a corda do arco cada vez mais tensa até pisar no freio em um carro em alta velocidade, sinta-se fisicamente conectado às suas ações na tela. Converse com amigos online usando o microfone embutido ou conectando um fone de ouvido ao conector de 3,5 mm. Ligue e desligue facilmente a captura de voz a qualquer momento com o botão dedicado para silenciar. Capture e transmita seus momentos de jogo mais épicos com o botão criar. Com base no sucesso do botão pioneiro SHARE, "criar" oferece aos jogadores mais maneiras de produzir conteúdo de jogos e transmitir suas aventuras ao vivo para o mundo.', '88956231569', true, true, true, 'Gamer', 'DualSense', 'Controle Sony DualSense PlayStation 5, Sem Fio - 3006452', 6, '2023-01-27 12:10:21.784654', 0, 2, 0, '2023-01-27 12:10:21.784688', 12, 11, 10, 3, 3);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (4, 'S054500', ' 1 x Controle Microsoft XBox', 'Experimente o design modernizado do Xbox Wireless Controller, com superfícies esculpidas e geometria refinada para maior conforto durante o jogo. Fique no alvo com o grip texturizado e um direcional híbrido. Capture e compartilhe conteúdo perfeitamente com um botão Compartilhar dedicado. Conecte-se, jogue e alterne rapidamente entre dispositivos, incluindo Xbox Series X|S, Xbox One, PC com Windows 10, iOS e Android.', '7898573298404', true, true, true, 'Carbon ', 'QAT-00007', 'Controle Sem Fio Miscrosoft Xbox Carbon para consoles e desktops ', 6, '2023-01-27 12:30:28.583296', 0, 2, 0, '2023-01-27 12:30:28.586161', 12, 10, 10, 4, 4);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (5, 'H094570', '1 x iPhone com iOS 14
1 x Cabo de USB-C para Lightning
1 x Documentação', 'Impressionante tela Liquid Retina LCD de 6,1 polegadas sem bordas. Resistência à água a uma profundidade de até dois metros por até 30 minutos. Ultra-angular (13 mm). Campo de visão de 120° para uma área de captura quatro vezes maior. Grande-angular (26 mm). Focus Pixels a 100% para foco automático até três vezes mais rápido com pouca luz. Vídeo 4K a 60 qps em todas as câmeras. Câmera ultra-angular que captura quatro vezes mais da cena. Gire, recorte e adicione filtros com a mesma facilidade que em fotos. Seja na hora de cantar parabéns ou durante um luau em volta da fogueira, usando o modo Noite, você tira fotos mais naturais em ambientes com pouca luz. Bateria para o dia todo. Chip A13 Bionic, o mais rápido em um smartphone. E recarga rápida com carregador de 18W (vendido separadamente). O Face ID é a tecnologia de autenticação facial mais segura em um smartphone.

Ele não armazena nem compartilha sua foto e é ainda mais seguro do que o Touch ID.', '7898573298404', true, true, false, 'iPhone 11', 'iPhone 11', 'iPhone 11 Apple 64GB branco, Tela de 6,1”, Câmera Dupla de 12MP, iOS', 6, '2023-01-27 12:38:05.178243', 0, 2, 0, '2023-01-27 12:38:05.178275', 12, 19, 4, 5, 5);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (7, 'J027774', '1 x Smart TV LG
1 x Cabo de força
1 x Cabo HDMI', 'As TVs LG UHD aprimoram sua experiência de visualização. Desfrute de cores vivas e detalhes de tirar o fôlego em 4K real. A TV LG UHD agora vem com um design mais fino e uma moldura minimalista que complementam o interior da sua casa. Intensifique sua experiência de visualização com o  processador α5 Gen5 AI aprimora a TV LG UHD para proporcionar a você uma experiência imersiva. Veja conteúdo não 4K em resolução 4K nas grandes telas UHD para desfrutar de clareza e precisão em cada detalhe. Do controle de voz ao conteúdo personalizado, o ThinQ AI torna a experiência com a TV LG UHD incrivelmente inteligente. Comande facilmente usando apenas a voz. O controle inteligente de voz via Google Assistente, Amazon Alexa, Apple AirPlay e outras opções permite controlar sua TV LG UHD com muito mais facilidade e rapidez. Desfrute de praticidade fazendo login na sua própria conta e assistindo a conteúdo recomendado especificamente para você. Com o alerta esportivo, você não vai mais perder suas partidas favoritas. Receba notificações antes de todos os jogos mais importantes. Assista em 4K e desfrute de uma experiência de visualização como se estivesse no cinema. Com o HDR10 Pro, o nível de brilho é ajustado para melhorar a cor e a nitidez em cada imagem. Impressione-se com aparência realista do conteúdo. Curta aventuras fantásticas usando os recursos de jogos na nuvem, painel e otimizador de jogos e HGiG. Tenha em um só lugar todas as configurações para otimizar a jogabilidade. O painel de jogos permite alterar rapidamente as configurações atuais do gênero de jogo. Melhor para o meio ambiente, com a embalagem da TV LG UHD foi remodelada com impressão monocromática e caixa reciclável.', '88956231569', true, true, true, 'Smart', '43UQ7500', 'Smart TV LG 43 Polegadas LED 4K UHD, 3 HDMI, 1 USB, Wi-Fi, Bluetooth, HDR, ThinQAI, compatível com Smart Magic, Google, Alexa - 43UQ7500', 6, '2023-01-27 13:08:11.35427', 0, 2, 0, '2023-01-27 13:08:11.354312', 12, 13, 23, 7, 7);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (8, 'E070428', '1 x Console Xbox Series X de 1TB
1 x controle sem fio Xbox;
1 x Cabo HDMI;
1 x Cabo de alimentação', 'Console nova geração Microsoft Xbox Series X 1TB - Preto', '7898573298404', true, true, true, 'Series X', 'Series X', 'Console nova geração Microsoft Xbox Series X 1TB - Preto', 6, '2023-01-27 13:18:51.218573', 0, 2, 0, '2023-01-27 13:18:51.220107', 12, 10, 7, 8, 8);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (9, 'W086786', '- Console Xbox Series S
- Controle sem fio Xbox
- Cabo HDMI de alta velocidade
- Cabo de alimentação', 'Obtenha o Xbox Series S, nosso Xbox menor e totalmente digital, em uma versão especial limitada: pacote Fortnite, Rocket League e Fall Guys. Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos Xbox One, Xbox 360 e Xbox Original.', '7898573298404', true, true, true, 'Series S', 'RRS-00076', 'Console Microsoft Xbox Series S, 512GB, Com Pacote Fortnite + Rocket + League Fall Guys (Digital Para Download), Branco - RRS-00076', 6, '2023-01-27 13:25:58.795997', 0, 2, 0, '2023-01-27 13:25:58.796013', 12, 10, 7, 9, 9);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (10, 'A015369', '- Placa de Vídeo Gigabyte GeForce RTX 3060 Gaming OC 12G
- Guia rápido', 'Placa de Vídeo Gigabyte GeForce RTX 3060 Gaming OC 12G (rev. 2.0) LHR Sistema de Refrigeração Windforce 3X: O sistema de resfriamento WINDFORCE 3X possui 3 ventiladores de lâmina exclusivos de 80 mm, rotação alternada, 3 tubos de calor de cobre composto com GPU de toque direto, ventilador ativo 3D e resfriamento de tela, que juntos fornecem dissipação de calor de alta eficiência. Fluxo De Ar ??Suave: A GIGABYTE gira os ventiladores adjacentes na direção oposta, de forma que a direção do fluxo de ar entre os dois ventiladores seja a mesma, reduzindo a turbulência e aumentando a pressão do fluxo de ar. Ventilador Ativo 3D: O 3D Active Fan fornece resfriamento semipassivo, e os ventiladores permanecerão desligados quando a GPU estiver em um jogo de baixa carga ou baixo consumo de energia. Ventilador de Lâmina ÚNica: O fluxo de ar é derramado pela borda triangular do leque e guiado suavemente pela curva da faixa 3D na superfície do leque. Graphene Nano Lubricant: O nano lubrificante de grafeno pode estender a vida útil do ventilador em 2,1 vezes, perto da vida útil do rolamento de esferas duplo, e é mais silencioso. RGB FUSION 2.0: Com 16,7 milhões de opções de cores personalizáveis ??e vários efeitos de iluminação, você pode escolher os efeitos de iluminação ou sincronizar com outros dispositivos AORUS. Placa de Proteção de Metal Traseira: A placa traseira de metal não apenas fornece um formato estético, mas também aprimora a estrutura da placa gráfica para fornecer proteção completa.', '7898573298404', true, true, true, 'RTX 3060', 'GV-N3060GAMING ', 'Placa de Video RTX 3060 Gaming OC Gigabyte GeForce, 12 GB GDDR6, LHR, Ray Tracing - GV-N3060GAMING OC-12GD (rev 2.0)', 6, '2023-01-27 14:19:53.164535', 0, 2, 0, '2023-01-27 14:19:53.164566', 12, 20, 29, 10, 10);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (11, 'D049303', '- Console PlayStation 5 com SSD de 825GB
- Controle sem fio DualSense
- Base
- Cabo HDMI
- Cabo de energia AC
- Cabo USB
- Materiais impressos (idioma Português)
- ASTRO’s PLAYROOM (jogo pré-instalado)*', 'Desfrute do carregamento do seu PS5, extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation. Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.

Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados. Maravilhe-se com os gráficos incríveis e experimente os recursos do novo PS5. "Ray Tracing" (Rastreamento de raios) Mergulhe em mundos com um nível inédito de realismo enquanto os raios de luz são simulados individualmente, criando sombras e reflexos realistas em jogos compatíveis com Playstation 5. Jogos para TVs 4K Curta seus jogos favoritos do PS5 na sua incrível TV 4K. Até 120 fps com saída em 120 Hz Desfrute da fluidez e taxa de quadros de até 120 fps em jogos compatíveis, com suporte a saída de 120 Hz em telas 4K. Com uma TV HDR, os jogos compatíveis do PS5 exibem uma variedade de cores inacreditavelmente vibrantes e realistas. Saída em 8K Os consoles PS5 oferecem suporte à saída 8K, para que você possa jogar na sua tela com resolução de 4320p. Mergulhe em palcos sonoros que farão você acreditar que os sons estão vindo de todas as direções. Seja com seus fones de ouvido ou os alto-falantes de sua TV, seu ambiente ganhará vida com o Tempest 3D AudioTech em jogos compatíveis.', '7898573298404', true, true, true, 'PlayStation 5', 'PlayStation 5', 'Console Sony PlayStation 5 Digital Edition', 6, '2023-01-27 14:29:23.668002', 0, 2, 0, '2023-01-27 14:29:23.668763', 24, 11, 7, 11, 11);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (12, 'J092569', '- Nintendo Switch Oled
- Controles Joy-Con
- Cabo de força
- Cabo HDMI', 'Jogue em casa na TV ou em qualquer lugar com uma tela OLED vibrante de 7" com o console Nintendo Switch Oled branco. Além de uma nova tela com cores vivas e contraste nítido, ele inclui um amplo acessório de suporte ajustável que permite ângulos de visualização mais confortáveis, uma base com porta para cabo LAN para o modo TV (cabo LAN vendido separadamente), HD com 64GB de armazenamento interno e áudio aprimorado nos modos portátil e semiportátil usando os alto-falantes do console. Acompanha 2 controles Joy-Con.', '88956231569', true, true, true, 'Oled', 'Switch', 'Nintendo Switch Oled 64GB Branco 2 Controles', 6, '2023-01-27 14:37:33.370094', 0, 2, 0, '2023-01-27 14:37:33.370106', 12, 12, 7, 12, 12);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (13, 'R030570', '- SSD Kingston NV2 500 GB', 'O NV2 PCIe 4.0 NVMe SSD da Kingston é uma solução substancial de armazenamento de última geração alimentada por um controlador Gen 4x4 NVMe. O NV2 oferece velocidades de leitura/gravação de até 3.500/2.100 MB/s com menores requisitos de energia e menor aquecimento para ajudar a otimizar o desempenho do seu sistema e agregar valor sem sacrifícios. O design compacto de face única M.2 2280 (22x80mm) expande o armazenamento em 500GB enquanto economiza espaço para outros componentes, tornando o NV2 ideal para notebooks mais finos, sistemas de formato pequeno (SFF) e placas-mãe DIY.
Instalar um SSD (Disco de estado sólido) M.2 é fácil e aumentará significativamente o desempenho do seu computador. Siga esses passos abaixo para acelerar seu dispositivo e aumentar o espaço livre de armazenamento. Disponível em capacidades de 500 GB para oferecer todo o espaço necessário para aplicativos, documentos, fotos, vídeos e muito mais.
Integra-se facilmente em modelos com conectores M.2. Perfeito para laptops finos e PCs de formato pequeno.', '7898573298404', true, true, false, 'NV2', 'SNV2S/500G', 'SSD 500 GB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/500G', 6, '2023-01-27 14:42:46.665485', 0, 2, 0, '2023-01-27 14:42:46.665778', 36, 4, 26, 13, 13);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (14, 'Z039867', '- SSD Kingston', 'A unidade de estado sólido A400 da Kingston aumenta drasticamente a resposta do seu computador com tempos incríveis de inicialização, carregamento e transferência, comparados a discos rígidos mecânicos. Reforçado com uma controladora de última geração para velocidades de leitura e gravação de até 500MB/s e 450MB/s, este SSD é 10x mais rápido do que um disco rígido tradicional para melhor desempenho, resposta ultrarrápida em multitarefas e um computador mais rápido de modo geral. Também mais confiável e durável do que um disco rígido, o A400 é feito com memória Flash. O SSD Kingston A400, não existem partes móveis, com menor probabilidade de falhas do que um disco rígido mecânico. Também é mais frio e mais silencioso e sua resistência a choques e vibração torna-o ideal para notebooks e outros dispositivos móveis de computação. O A400 está disponível em diversas capacidades de 480GB oferecendo todo o espaço que você precisa para aplicativos, vídeos, fotos e outros documentos importantes. Você também pode substituir seu disco rígido ou um SSD menor por uma unidade grande o suficiente para conter todos os seus arquivos. SSD confiável e durável para melhor desempenho do computador e respostas ultrarrápidas em multitarefas.', '7898573298404', true, true, false, 'SATA', 'SA400S37/480G', 'SSD 480 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 450MB/s - SA400S37/480G', 6, '2023-01-27 14:47:38.458794', 0, 2, 0, '2023-01-27 14:47:38.459183', 12, 4, 26, 14, 14);
INSERT INTO public.products (id, code, content_packaging, details, ean_code, free_delivery, is_active, just_released, line, model, name, number_of_raters, offered_at, product_condition, rating_average, sold_units, updated_at, warranty, brand_id, category_id, measurements_id, pricing_id) VALUES (15, 'F065288', '- Placa-Mãe Gigabyte B660 Gaming', 'Com uma interface de usuário intuitiva integrada, o RGB Fusion 2.0 fornece uma solução melhor para personalizar os efeitos de iluminação em todos os dispositivos suportados. De placas-mãe, placas gráficas a produtos periféricos, você pode personalizar seu equipamento de jogos com seu próprio estilo e mostrar sua construção compartilhando os perfis.
O EasyTune™ da GIGABYTE é uma interface simples e fácil de usar que permite aos usuários ajustar as configurações do sistema ou ajustar os clocks e tensões do sistema e da memória em um ambiente Windows.', '7898573298404', true, true, false, ' GAMING', ' B660M GAMING D', 'Placa Mãe Gigabyte B660 Gaming, Intel LGA 1700, mATX, DDR4, RGB - B660M GAMING DDR4', 6, '2023-01-27 14:58:04.348786', 0, 2, 0, '2023-01-27 14:58:04.348796', 12, 20, 25, 15, 15);


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (1, 1000, false, 'AMD Radeon RX 6700-4.jpg', 'dd9cc382-2521-4336-93ef-f3c9b7ff03a1', 82209, 'http://res.cloudinary.com/dt4bynswk/image/upload/dd9cc382-2521-4336-93ef-f3c9b7ff03a1', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (2, 1000, false, 'AMD Radeon RX 6700-3.jpg', '376ed36f-f989-4ea3-a8ac-cf08a34cc00d', 56950, 'http://res.cloudinary.com/dt4bynswk/image/upload/376ed36f-f989-4ea3-a8ac-cf08a34cc00d', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (3, 1000, false, 'AMD Radeon RX 6700-2.jpg', '44dda024-53d2-4300-8340-04f458e5ebad', 60206, 'http://res.cloudinary.com/dt4bynswk/image/upload/44dda024-53d2-4300-8340-04f458e5ebad', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (4, 1000, false, 'AMD Radeon RX 6700-5.jpg', '8b7156e6-4029-4688-8ed6-4df6610a2e22', 28522, 'http://res.cloudinary.com/dt4bynswk/image/upload/8b7156e6-4029-4688-8ed6-4df6610a2e22', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (5, 1000, true, 'AMD Radeon RX 6700-1.jpg', '5ca4ce5f-37ce-444f-9005-d4c8cd7bf0b8', 107772, 'http://res.cloudinary.com/dt4bynswk/image/upload/5ca4ce5f-37ce-444f-9005-d4c8cd7bf0b8', 1000, 1);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (6, 356, false, 'dualsense-ps5-black-3.jpg', '469a60a0-a675-4504-925d-ec99047f78de', 18248, 'http://res.cloudinary.com/dt4bynswk/image/upload/469a60a0-a675-4504-925d-ec99047f78de', 924, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (7, 607, true, 'dualsense-ps5-black-1.jpg', '2779d359-671c-42c1-9010-962808804ab1', 30193, 'http://res.cloudinary.com/dt4bynswk/image/upload/2779d359-671c-42c1-9010-962808804ab1', 860, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (8, 508, false, 'dualsense-ps5-black-4.jpg', '53206b0c-c2b1-4535-8465-0f2cc5c35c3f', 22796, 'http://res.cloudinary.com/dt4bynswk/image/upload/53206b0c-c2b1-4535-8465-0f2cc5c35c3f', 893, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (9, 786, false, 'dualsense-ps5-white-3.jpg', '243fe125-dc89-42e3-b8fa-73bfcd3b794b', 59297, 'http://res.cloudinary.com/dt4bynswk/image/upload/243fe125-dc89-42e3-b8fa-73bfcd3b794b', 1500, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (10, 817, false, 'dualsense-ps5-black-2.jpg', '225d5136-c3d7-4a77-8bee-e5c2a9af05bc', 30790, 'http://res.cloudinary.com/dt4bynswk/image/upload/225d5136-c3d7-4a77-8bee-e5c2a9af05bc', 908, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (11, 570, false, 'dualsense-ps5-white-1.jpg', '7847e805-3f7a-4f00-b7d8-7fefa3ec3443', 24021, 'http://res.cloudinary.com/dt4bynswk/image/upload/7847e805-3f7a-4f00-b7d8-7fefa3ec3443', 859, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (12, 836, false, 'dualsense-ps5-white-2.jpg', 'fedf822e-4926-479c-8265-0ab0a886123a', 50604, 'http://res.cloudinary.com/dt4bynswk/image/upload/fedf822e-4926-479c-8265-0ab0a886123a', 1500, 2);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (13, 570, false, 'dualsense-ps5-white-1.jpg', '7847e805-3f7a-4f00-b7d8-7fefa3ec3443', 24021, 'http://res.cloudinary.com/dt4bynswk/image/upload/7847e805-3f7a-4f00-b7d8-7fefa3ec3443', 859, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (14, 836, false, 'dualsense-ps5-white-2.jpg', 'fedf822e-4926-479c-8265-0ab0a886123a', 50604, 'http://res.cloudinary.com/dt4bynswk/image/upload/fedf822e-4926-479c-8265-0ab0a886123a', 1500, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (15, 508, false, 'dualsense-ps5-black-4.jpg', '53206b0c-c2b1-4535-8465-0f2cc5c35c3f', 22796, 'http://res.cloudinary.com/dt4bynswk/image/upload/53206b0c-c2b1-4535-8465-0f2cc5c35c3f', 893, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (16, 817, false, 'dualsense-ps5-black-2.jpg', '225d5136-c3d7-4a77-8bee-e5c2a9af05bc', 30790, 'http://res.cloudinary.com/dt4bynswk/image/upload/225d5136-c3d7-4a77-8bee-e5c2a9af05bc', 908, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (17, 356, false, 'dualsense-ps5-black-3.jpg', '469a60a0-a675-4504-925d-ec99047f78de', 18248, 'http://res.cloudinary.com/dt4bynswk/image/upload/469a60a0-a675-4504-925d-ec99047f78de', 924, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (18, 786, false, 'dualsense-ps5-white-3.jpg', '243fe125-dc89-42e3-b8fa-73bfcd3b794b', 59297, 'http://res.cloudinary.com/dt4bynswk/image/upload/243fe125-dc89-42e3-b8fa-73bfcd3b794b', 1500, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (19, 607, true, 'dualsense-ps5-black-1.jpg', '2779d359-671c-42c1-9010-962808804ab1', 30193, 'http://res.cloudinary.com/dt4bynswk/image/upload/2779d359-671c-42c1-9010-962808804ab1', 860, 3);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (20, 1000, true, 'controle-xbox-0.jpg', 'a3875492-80f5-4bf6-96e7-373f53ca9799', 45088, 'http://res.cloudinary.com/dt4bynswk/image/upload/a3875492-80f5-4bf6-96e7-373f53ca9799', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (21, 1000, false, 'controle-xbox-1.jpg', '7fb10be6-5eb8-48f7-8196-87c2f5afa937', 46955, 'http://res.cloudinary.com/dt4bynswk/image/upload/7fb10be6-5eb8-48f7-8196-87c2f5afa937', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (22, 1000, false, 'controle-xbox-4.jpg', '82eca4b5-48e1-4c87-acf5-7d5e5a0207f5', 42175, 'http://res.cloudinary.com/dt4bynswk/image/upload/82eca4b5-48e1-4c87-acf5-7d5e5a0207f5', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (23, 1000, false, 'controle-xbox-3.jpg', 'c486a6a5-115a-4f29-b2d8-821c818dd813', 31555, 'http://res.cloudinary.com/dt4bynswk/image/upload/c486a6a5-115a-4f29-b2d8-821c818dd813', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (24, 1000, false, 'controle-xbox-5.jpg', '75d9f51f-f31c-486b-858b-7625b4dcb3b4', 40242, 'http://res.cloudinary.com/dt4bynswk/image/upload/75d9f51f-f31c-486b-858b-7625b4dcb3b4', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (25, 1000, false, 'controle-xbox-6.jpg', 'b69f47cd-033b-4d2f-af8a-703e2d249d07', 43222, 'http://res.cloudinary.com/dt4bynswk/image/upload/b69f47cd-033b-4d2f-af8a-703e2d249d07', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (26, 1000, false, 'controle-xbox-2.jpg', '0281d9cb-8f29-49ce-90f6-40615ac546b2', 51531, 'http://res.cloudinary.com/dt4bynswk/image/upload/0281d9cb-8f29-49ce-90f6-40615ac546b2', 1000, 4);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (27, 1000, true, 'iphone11-1.jpg', 'de72717e-df9e-4336-9556-98c7e5416498', 86237, 'http://res.cloudinary.com/dt4bynswk/image/upload/de72717e-df9e-4336-9556-98c7e5416498', 1000, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (28, 1000, false, 'iphone-11-0.jpg', '2d58552e-3022-4cb9-afd8-b4511f08fc18', 60930, 'http://res.cloudinary.com/dt4bynswk/image/upload/2d58552e-3022-4cb9-afd8-b4511f08fc18', 1000, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (29, 1000, false, 'iphone-11-3.jpg', 'c785462d-8847-4113-9bc5-5d06e1cbd0dd', 47831, 'http://res.cloudinary.com/dt4bynswk/image/upload/c785462d-8847-4113-9bc5-5d06e1cbd0dd', 1000, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (30, 1000, false, 'iphone-11-1.jpg', '9f6d37f9-c77c-463b-99c2-59eed9dcdbfb', 68135, 'http://res.cloudinary.com/dt4bynswk/image/upload/9f6d37f9-c77c-463b-99c2-59eed9dcdbfb', 1000, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (31, 1144, false, 'iphone-11-3.jpeg', '504fe119-325e-4154-9427-1120ac4983f4', 77338, 'http://res.cloudinary.com/dt4bynswk/image/upload/504fe119-325e-4154-9427-1120ac4983f4', 1144, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (32, 1000, false, 'iphone-11-2.jpg', '2745035b-3342-4211-80f7-6d4e0504ff2b', 55090, 'http://res.cloudinary.com/dt4bynswk/image/upload/2745035b-3342-4211-80f7-6d4e0504ff2b', 1000, 5);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (33, 1000, false, 'notebook-asus-vivobook-15-0.jpg', '790355a7-aa7d-4aa7-b49e-a17a97f95531', 60337, 'http://res.cloudinary.com/dt4bynswk/image/upload/790355a7-aa7d-4aa7-b49e-a17a97f95531', 1000, 6);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (34, 1000, false, 'notebook-asus-vivobook-15-2.jpg', '8821919c-cf75-4bfd-933c-d2ffa35a068f', 74549, 'http://res.cloudinary.com/dt4bynswk/image/upload/8821919c-cf75-4bfd-933c-d2ffa35a068f', 1000, 6);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (35, 1000, true, 'notebook-asus-vivobook-15-1.jpg', 'effe9777-c153-4799-a946-1cd16fbdcab0', 53687, 'http://res.cloudinary.com/dt4bynswk/image/upload/effe9777-c153-4799-a946-1cd16fbdcab0', 1000, 6);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (36, 1000, false, 'notebook-asus-vivobook-15-3.jpg', 'c5d66844-de95-45b4-b6a1-6e8ed98b8c52', 19533, 'http://res.cloudinary.com/dt4bynswk/image/upload/c5d66844-de95-45b4-b6a1-6e8ed98b8c52', 1000, 6);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (37, 1000, false, 'smart-tv-lg-1.jpg', 'abd4423f-d854-4a6e-a6a8-38509b202a43', 27137, 'http://res.cloudinary.com/dt4bynswk/image/upload/abd4423f-d854-4a6e-a6a8-38509b202a43', 1000, 7);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (38, 1000, false, 'smart-tv-lg-3.jpg', '46f7c5b6-dc0e-42e9-84d1-9c2d0eee89dd', 14944, 'http://res.cloudinary.com/dt4bynswk/image/upload/46f7c5b6-dc0e-42e9-84d1-9c2d0eee89dd', 1000, 7);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (39, 1000, false, 'smart-tv-lg-2.jpg', '9e12fd70-b010-42a8-aee3-c511cb861467', 41675, 'http://res.cloudinary.com/dt4bynswk/image/upload/9e12fd70-b010-42a8-aee3-c511cb861467', 1000, 7);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (40, 1000, true, 'smart-tv-lg-0.jpg', '445338be-20b9-4291-bc23-3feb86d4477e', 165745, 'http://res.cloudinary.com/dt4bynswk/image/upload/445338be-20b9-4291-bc23-3feb86d4477e', 1000, 7);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (41, 1000, true, 'xbox-series-x-3.jpg', 'efb77516-c896-4be8-b1d8-3956a4419030', 54391, 'http://res.cloudinary.com/dt4bynswk/image/upload/efb77516-c896-4be8-b1d8-3956a4419030', 1000, 8);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (42, 1000, false, 'xbox-series-x-4.jpg', 'd40b4890-c308-48c2-aa5e-05f182e24753', 40295, 'http://res.cloudinary.com/dt4bynswk/image/upload/d40b4890-c308-48c2-aa5e-05f182e24753', 1000, 8);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (43, 1000, false, 'xbox-series-x-2.jpg', 'a48a48aa-89af-46ca-bb71-15fb2f53c8f7', 95285, 'http://res.cloudinary.com/dt4bynswk/image/upload/a48a48aa-89af-46ca-bb71-15fb2f53c8f7', 1000, 8);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (44, 1000, false, 'xbox-series-x-0.jpg', 'ecdb9bf7-dc4f-4679-9139-40ff8a49b4e4', 33833, 'http://res.cloudinary.com/dt4bynswk/image/upload/ecdb9bf7-dc4f-4679-9139-40ff8a49b4e4', 1000, 8);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (45, 1000, false, 'xbox-series-s-0.jpg', '6a30e8a0-bf2f-4a2d-be33-523564d96413', 57470, 'http://res.cloudinary.com/dt4bynswk/image/upload/6a30e8a0-bf2f-4a2d-be33-523564d96413', 1000, 9);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (46, 1000, true, 'xbox-series-s-2.jpg', 'd1ea15c3-2dbc-4772-aa3c-55c4bcfcf208', 90840, 'http://res.cloudinary.com/dt4bynswk/image/upload/d1ea15c3-2dbc-4772-aa3c-55c4bcfcf208', 1000, 9);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (47, 1000, false, 'xbox-series-s-1.jpg', '13e955de-ea18-4e37-8f57-841f6903d1e8', 19152, 'http://res.cloudinary.com/dt4bynswk/image/upload/13e955de-ea18-4e37-8f57-841f6903d1e8', 1000, 9);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (48, 1000, false, 'xbox-series-s-3.jpg', '99a28c27-2558-4ce5-8291-3b6c50a34302', 186667, 'http://res.cloudinary.com/dt4bynswk/image/upload/99a28c27-2558-4ce5-8291-3b6c50a34302', 1000, 9);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (49, 1000, false, 'rtx-3060-2.jpg', '856c1e63-fd70-4d08-8e68-07a388c85996', 67183, 'http://res.cloudinary.com/dt4bynswk/image/upload/856c1e63-fd70-4d08-8e68-07a388c85996', 1000, 10);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (50, 1000, false, 'rtx-3060-3.jpg', 'e67792a2-f8a5-41c9-943f-c494a03c848d', 25720, 'http://res.cloudinary.com/dt4bynswk/image/upload/e67792a2-f8a5-41c9-943f-c494a03c848d', 1000, 10);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (51, 1000, false, 'rtx-3060-5.jpg', '4dc77842-018a-46da-b8ad-fe48ab81c3d3', 46494, 'http://res.cloudinary.com/dt4bynswk/image/upload/4dc77842-018a-46da-b8ad-fe48ab81c3d3', 1000, 10);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (52, 1000, false, 'rtx-3060-4.jpg', '0d0f4246-103c-4bea-adea-bcfb2caff04f', 25720, 'http://res.cloudinary.com/dt4bynswk/image/upload/0d0f4246-103c-4bea-adea-bcfb2caff04f', 1000, 10);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (53, 1000, true, 'rtx-3060-1.jpg', '23144476-20db-4a3e-a122-69c319c870e9', 113939, 'http://res.cloudinary.com/dt4bynswk/image/upload/23144476-20db-4a3e-a122-69c319c870e9', 1000, 10);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (54, 1000, false, 'ps5-2.jpg', '2f18640c-354c-41ef-88e0-6541c927b457', 18657, 'http://res.cloudinary.com/dt4bynswk/image/upload/2f18640c-354c-41ef-88e0-6541c927b457', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (55, 1000, false, 'ps5-3.jpg', '859d2b5a-9758-43bf-b138-b7cf487fec50', 32968, 'http://res.cloudinary.com/dt4bynswk/image/upload/859d2b5a-9758-43bf-b138-b7cf487fec50', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (56, 1000, false, 'ps5-4.jpg', '61cca81c-58d6-4473-87f7-1f07440af756', 45473, 'http://res.cloudinary.com/dt4bynswk/image/upload/61cca81c-58d6-4473-87f7-1f07440af756', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (57, 1000, false, 'ps5-1.jpg', 'e44aace1-88b3-49fe-973f-37995a402411', 30512, 'http://res.cloudinary.com/dt4bynswk/image/upload/e44aace1-88b3-49fe-973f-37995a402411', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (58, 1000, true, 'ps5-0.jpg', '967ee1ce-1e8e-4267-95c1-42c93737da0c', 34098, 'http://res.cloudinary.com/dt4bynswk/image/upload/967ee1ce-1e8e-4267-95c1-42c93737da0c', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (59, 1000, false, 'ps5-6.jpg', 'df117be8-2a3a-4af7-b271-142e8a8a2e69', 44951, 'http://res.cloudinary.com/dt4bynswk/image/upload/df117be8-2a3a-4af7-b271-142e8a8a2e69', 1000, 11);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (60, 1000, false, 'nintendo-switch-oled-4.jpg', '8de587d7-c435-471c-b4b4-a640d1326e47', 47814, 'http://res.cloudinary.com/dt4bynswk/image/upload/8de587d7-c435-471c-b4b4-a640d1326e47', 1000, 12);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (61, 1000, true, 'nintendo-switch-oled-0.jpg', '86a7e575-2ffb-4678-bffa-5cb971edffb0', 47473, 'http://res.cloudinary.com/dt4bynswk/image/upload/86a7e575-2ffb-4678-bffa-5cb971edffb0', 1000, 12);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (62, 1000, false, 'nintendo-switch-oled-1.jpg', '80fda34a-c859-4b84-b8f1-422021d822fc', 34937, 'http://res.cloudinary.com/dt4bynswk/image/upload/80fda34a-c859-4b84-b8f1-422021d822fc', 1000, 12);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (63, 1000, false, 'nintendo-switch-oled-3.jpg', '43f1e3a2-d994-4307-ac02-85a5ef3683eb', 44450, 'http://res.cloudinary.com/dt4bynswk/image/upload/43f1e3a2-d994-4307-ac02-85a5ef3683eb', 1000, 12);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (64, 1000, false, 'nintendo-switch-oled-2.jpg', '126868dc-655f-4089-9673-f438e563cb4a', 30411, 'http://res.cloudinary.com/dt4bynswk/image/upload/126868dc-655f-4089-9673-f438e563cb4a', 1000, 12);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (65, 1000, false, 'ssd-kingston-2.jpg', 'ac244476-b04e-4ff3-8171-dea1f33fa209', 44080, 'http://res.cloudinary.com/dt4bynswk/image/upload/ac244476-b04e-4ff3-8171-dea1f33fa209', 1000, 13);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (66, 1000, true, 'ssd-kingston-0.jpg', 'f338c9b8-0374-49ec-8e68-45aa8197f4bd', 49085, 'http://res.cloudinary.com/dt4bynswk/image/upload/f338c9b8-0374-49ec-8e68-45aa8197f4bd', 1000, 13);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (67, 1000, false, 'ssd-kingston-1.jpg', 'dfc6cc56-af53-47f7-ba65-4a35f4817e26', 49891, 'http://res.cloudinary.com/dt4bynswk/image/upload/dfc6cc56-af53-47f7-ba65-4a35f4817e26', 1000, 13);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (68, 1000, false, 'ssd-kingston-3.jpg', '6fd1904d-ab72-41c7-ac4c-7adde2f550cb', 24569, 'http://res.cloudinary.com/dt4bynswk/image/upload/6fd1904d-ab72-41c7-ac4c-7adde2f550cb', 1000, 13);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (69, 1000, false, 'ssd-sata-kingston-1.jpg', 'e15eb66e-272a-4582-a101-fd43c89f7a49', 57209, 'http://res.cloudinary.com/dt4bynswk/image/upload/e15eb66e-272a-4582-a101-fd43c89f7a49', 1000, 14);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (70, 1000, true, 'ssd-sata-kingston-3.jpg', '9643eb49-db31-48f0-b1e7-0eeeaa39d504', 53303, 'http://res.cloudinary.com/dt4bynswk/image/upload/9643eb49-db31-48f0-b1e7-0eeeaa39d504', 1000, 14);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (71, 1000, false, 'ssd-sata-kingston-2.jpg', 'd42a87ce-fe43-4357-a5f8-5d82b29be6a8', 113070, 'http://res.cloudinary.com/dt4bynswk/image/upload/d42a87ce-fe43-4357-a5f8-5d82b29be6a8', 1000, 14);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (72, 1000, false, 'ssd-sata-kingston-0.jpg', '7f694b12-baf0-45b1-af9b-4e3bbe6f3010', 99687, 'http://res.cloudinary.com/dt4bynswk/image/upload/7f694b12-baf0-45b1-af9b-4e3bbe6f3010', 1000, 14);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (73, 1000, false, 'placa-mae-gigabyte-3.jpg', '7a847a19-8c88-458a-8f61-4b16b3c4906f', 151217, 'http://res.cloudinary.com/dt4bynswk/image/upload/7a847a19-8c88-458a-8f61-4b16b3c4906f', 1000, 15);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (74, 1000, false, 'placa-mae-gigabyte-4.jpg', '2be5b0ce-6d09-4727-a5e2-36c80cfa0c7f', 99634, 'http://res.cloudinary.com/dt4bynswk/image/upload/2be5b0ce-6d09-4727-a5e2-36c80cfa0c7f', 1000, 15);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (75, 1000, true, 'placa-mae-gigabyte-0.jpg', '292bedff-f7fc-406c-aa43-8373b2ecb616', 119441, 'http://res.cloudinary.com/dt4bynswk/image/upload/292bedff-f7fc-406c-aa43-8373b2ecb616', 1000, 15);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (76, 1000, false, 'placa-mae-gigabyte-5.jpg', '86f18fc0-6811-4335-93a0-793db75648cb', 52329, 'http://res.cloudinary.com/dt4bynswk/image/upload/86f18fc0-6811-4335-93a0-793db75648cb', 1000, 15);
INSERT INTO public.product_images (id, height, is_main, original_name, random_name, size, url, width, product_id) VALUES (77, 1000, false, 'placa-mae-gigabyte-1.jpg', 'fb60b6f1-baf3-40d2-b9d9-30b330b905e3', 82824, 'http://res.cloudinary.com/dt4bynswk/image/upload/fb60b6f1-baf3-40d2-b9d9-30b330b905e3', 1000, 15);


--
-- Data for Name: stock; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.stock (id, available_units, updated_at) VALUES (1, 30, '2023-01-27 14:55:49.803');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (2, 15, '2023-01-27 15:10:07.141');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (3, 10, '2023-01-27 15:10:00.766');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (4, 10, '2023-01-27 15:27:43.494');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (5, 10, '2023-01-27 15:27:49.597');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (6, 10, '2023-01-27 15:28:09.011');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (7, 10, '2023-01-27 15:28:01.502');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (8, 10, '2023-01-27 15:27:57.312');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (9, 12, '2023-01-27 15:34:14.334');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (10, 15, '2023-01-27 15:34:25.846');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (11, 15, '2023-01-27 15:34:20.082');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (12, 12, '2023-01-27 15:34:03.417');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (13, 12, '2023-01-27 15:34:09.458');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (14, 25, '2023-01-27 15:43:23.503');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (15, 10, '2023-01-27 16:03:29.231');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (16, 50, '2023-01-27 16:16:03.658');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (17, 20, '2023-01-27 16:22:58.177');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (18, 20, '2023-01-27 17:15:58.384');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (19, 20, '2023-01-27 17:24:46.39');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (20, 40, '2023-01-27 17:34:26.35');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (21, 50, '2023-01-27 17:40:51.427');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (22, 25, '2023-01-27 17:45:09.086');
INSERT INTO public.stock (id, available_units, updated_at) VALUES (23, 30, '2023-01-27 17:53:52.226');


--
-- Data for Name: product_versions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (1, 1, 1, 1);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (2, 2, 3, 2);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (3, 1, 3, 3);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (4, 1, 4, 4);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (5, 8, 4, 5);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (6, 10, 4, 6);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (7, 2, 4, 7);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (8, 4, 4, 8);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (9, 10, 5, 9);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (10, 2, 5, 10);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (11, 6, 5, 11);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (12, 8, 5, 12);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (13, 1, 5, 13);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (14, 20, 6, 14);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (15, 1, 7, 15);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (16, 1, 8, 16);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (17, 2, 9, 17);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (18, 1, 10, 18);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (19, 2, 11, 19);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (20, 2, 12, 20);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (21, 4, 13, 21);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (22, 1, 14, 22);
INSERT INTO public.product_versions (id, color_id, product_id, stock_id) VALUES (23, 1, 15, 23);


--
-- Data for Name: specifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.specifications (id, name, _value, product_id) VALUES (1, 'Processo tecnológico', '7 nm', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (2, 'Tamanho da memória', '12 GB', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (3, 'Processamento Gráfico', 'Radeon RX 6700XT', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (4, 'DirectX', '12 final', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (5, 'Barramento de cartão', 'PCI-E 4.0 x 16', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (6, 'Clock de memória', '16000 MHz', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (7, ' Barramento de Memória', '192 bits', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (8, 'Tipo de memória', 'GDDR6', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (9, 'Saída', '2x DisplayPort 1.4a; 2x HDMI 2.1', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (10, 'Fonte de alimentação recomendada', '650 W', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (11, ' Processadores de fluxo', '2560', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (12, 'Resolução máxima digital', '7680 x 4320', 1);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (13, 'Touch Pad ', '2 Point Touch Pad  - Capacitive Type  - Click', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (14, 'Sensor de Movimento', 'Sistema sensor de movimento com 6 eixos (giroscópio de 3 eix', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (15, 'Capacidade da bateria', ' 1560mAh', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (16, 'Resposta', ' Efeitos de gatilho (nos botões R2/L2); ', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (17, 'Voltagem da bateria', 'DC 3.65V', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (18, 'Microfone embutido', 'Sim', 2);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (19, 'Capacidade da bateria', ' 1560mAh', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (20, 'Sensor de Movimento', 'Sistema sensor de movimento com 6 eixos (giroscópio de 3 eix', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (21, 'Voltagem da bateria', 'DC 3.65V', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (22, 'Resposta', ' Efeitos de gatilho (nos botões R2/L2); ', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (23, 'Touch Pad ', '2 Point Touch Pad  - Capacitive Type  - Click', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (24, 'Microfone embutido', 'Sim', 3);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (25, 'É sem fio', 'Sim', 4);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (26, 'Direcional', 'Híbrido', 4);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (27, 'Mapeamento personalizado de botões', 'Sim', 4);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (28, 'Sistemas compatíveis', 'Windows, Consoles Xbox e Android', 4);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (29, 'Capacidade', '64 Gb', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (30, 'Câmera principal', '(ultra-angular e grande-angular) de 12 MP', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (31, 'Face ID', ' Reconhecimento facial pela câmera TrueDepth', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (32, 'Sistema Operacional', 'IoS Mobile', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (33, 'Tela', 'Tela Liquid Retina HD', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (34, 'Câmera frontal', '12 MP', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (35, 'Resolução', '792 x 828 pixels a 326 ppp', 5);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (36, 'Câmera', 'HD 720p', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (37, 'Processador', 'AMD Ryzen 7 4800H', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (38, 'Sistema operacional', 'Windows 11 Home', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (39, 'Rede e Comunicação', 'Wi-Fi 5(802.11ac)+Bluetooth 4.1 (Dual band)', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (40, 'Tela', '15,6'''', FHD (1920 x 1080) ', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (41, 'RAM', '16 GB DDR4', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (42, 'Armazenamento', ' 256 GBPCIe NVMe 3.0 x2 M.2 SSD', 6);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (43, 'Tamanho', '43 Polegadas', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (44, 'HDR10', 'Sim', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (45, 'Conexões', '3 x HDMI 2.0; 1x Saída Digital óptica;', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (46, 'Resolução', '4k', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (47, ' Sistema Operacional', 'webOS 22', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (48, 'TV digital', 'Sim', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (49, 'Alexa integrado', 'Sim', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (50, 'Processador', 'α5 Gen5 AI Processor', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (51, 'Google Assistente integrado', 'Sim', 7);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (52, 'Wi-Fi', '5G', 8);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (53, 'Capacidade', '1 Tb', 8);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (54, 'Conexões', 'HDMI-In/Out, Wi-Fi embutido, Blu-ray', 8);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (55, 'Leitor de discos', 'Sim', 8);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (56, 'Memória RAM', '10 Gb GDDR6 128 bits', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (57, 'Armazenamento interno', 'SSD NVME personalizado de 512 GB', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (58, 'Resolução de jogos', '1440p', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (59, ' Meta de desempenho', 'Até 120 FPS', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (60, 'Portas e Conectividade', ' HDM; USB; Ethernet', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (61, 'CPU', 'CPU Zen 2 3,6 GHz (3,4 GHz com SMT)', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (62, ' GPU', '4 TFLOPS, 20 CUs @1.565 GHz', 9);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (63, ' Processamento de Gráficos', 'GeForce RTX 3060', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (64, 'CUDA Cores', '3584', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (65, 'Conectores de energia', '8 pinos', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (66, 'Fonte recomendada', '550 w', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (67, ' Core Clock', '1837 MHz', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (68, 'Memória gráfica', '12Gb GDDR6 192 bits', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (69, 'Clock da memória', '15000MHz', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (70, 'Resolução máxima', '7680 x 4320 pixels', 10);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (71, 'Mídia', 'Física', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (72, 'Frequência da CPU', '3,5 Ghz', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (73, 'Saída de vídeo', 'Suporte a TVs de 120Hz 4K, TVs 8K, VRR', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (74, 'CPU', 'x86-64-AMD Ryzen “Zen 2”', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (75, 'RAM', '16GB GDDR6', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (76, 'Armazenamento', '825GB SSD', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (77, 'Disco de Jogos', 'Ultra HD Blu-ray', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (78, 'Núcleos de CPU', '8 cores e 16 Threads', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (79, 'GPU', ' AMD Radeon RDNA 2', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (80, 'Frequência da CPU', '2,33 Ghz', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (81, 'Ray Tracing', 'Sim', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (82, 'Tensão de alimentação', '100-240V 1.65-0.75A 50/60Hz 350W', 11);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (83, 'Capacidade', '64 Gb', 12);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (84, 'Suporte com ajuste de ângulo', 'Sim', 12);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (85, 'Tela', 'Oled vibrante de 8 polegadas', 12);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (86, 'Áudio aprimorado', 'Sim', 12);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (87, ' Leitura/Gravação Sequencial', '3.500/2.100 MB/s', 13);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (88, ' Interface', 'PCIe 4.0 x4 NVMe', 13);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (89, 'Capacidades', '500GB', 13);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (90, ' Fator de forma', 'M.2 2280', 13);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (91, ' Resistência (Total de Bytes Gravados)', '160 TB', 13);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (92, ' Formato', '2,5 pol ', 14);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (93, ' Capacidades', '480GB', 14);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (94, ' Performance de referência', 'até 500MB/s para leitura e 450MB/s para gravação', 14);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (95, ' Interface', ' SATA Rev. 3.0 (6Gb/s)', 14);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (96, 'Áudio', 'CODEC de áudio Realtek', 15);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (97, 'Slots RAM', '2 Slots DDR4 de até 5000Mhz', 15);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (98, 'Suporte', 'CPU Intel core 13ª gen', 15);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (99, 'Soquete', 'LGA1700', 15);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (100, 'Sistemas operacionais', 'Windows 10, Windows 11 64 bits', 15);
INSERT INTO public.specifications (id, name, _value, product_id) VALUES (101, 'Expansão', '1 x PCI Express x16; 1 x PCI Express x1', 15);


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_id_seq', 21, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 38, true);


--
-- Name: colors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.colors_id_seq', 22, true);


--
-- Name: departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departments_id_seq', 7, true);


--
-- Name: installment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.installment_id_seq', 128, true);


--
-- Name: pricing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pricing_id_seq', 15, true);


--
-- Name: product_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_images_id_seq', 77, true);


--
-- Name: product_measurements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_measurements_id_seq', 15, true);


--
-- Name: product_versions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_versions_id_seq', 23, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 15, true);


--
-- Name: specifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.specifications_id_seq', 101, true);


--
-- Name: stock_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stock_id_seq', 23, true);


--
-- PostgreSQL database dump complete
--

