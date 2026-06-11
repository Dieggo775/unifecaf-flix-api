-- database/schema.sql

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS unifecaf_flix_db;

-- Usar o banco criado
USE unifecaf_flix_db;

-- Criar tabela de filmes
CREATE TABLE IF NOT EXISTS filmes (
  -- Coluna: id
  -- Tipo: INT (número inteiro)
  -- AUTO_INCREMENT: incrementa automaticamente (1, 2, 3...)
  -- PRIMARY KEY: identificador único de cada filme
  id INT AUTO_INCREMENT PRIMARY KEY,

  -- Coluna: titulo
  -- Tipo: VARCHAR(255) = texto até 255 caracteres
  -- NOT NULL: obrigatório (não pode ser vazio)
  titulo VARCHAR(255) NOT NULL,

  -- Coluna: sinopse
  -- Tipo: TEXT = texto longo (pode ter muito conteúdo)
  -- NOT NULL: obrigatório
  sinopse TEXT NOT NULL,

  -- Coluna: genero
  -- Tipo: VARCHAR(100) = texto até 100 caracteres
  -- Exemplos: Ficção Científica, Drama, Ação, etc
  genero VARCHAR(100) NOT NULL,

  -- Coluna: ano_lancamento
  -- Tipo: INT
  -- Exemplo: 2001, 2010, 2019
  ano_lancamento INT NOT NULL,

  -- Coluna: diretor
  diretor VARCHAR(255) NOT NULL,

  -- Coluna: duracao_minutos
  -- Exemplo: 178 minutos
  duracao_minutos INT NOT NULL,

  -- Coluna: poster_url
  -- URL da imagem do filme
  poster_url VARCHAR(500),

  -- Coluna: data_criacao
  -- TIMESTAMP: data e hora
  -- DEFAULT CURRENT_TIMESTAMP: valor padrão = agora
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  -- Coluna: data_atualizacao
  -- ON UPDATE CURRENT_TIMESTAMP: atualiza automaticamente
  data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- ÍNDICES
  -- O que é índice?
  -- - Acelera buscas (como índice de livro)
  -- - Sem índice, procura em toda tabela
  -- - Com índice, encontra rápido

  -- Índice para buscas por título
  INDEX idx_titulo (titulo),

  -- Índice para buscas por gênero
  INDEX idx_genero (genero)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============ INSERIR DADOS DE EXEMPLO ============

INSERT INTO filmes (titulo, sinopse, genero, ano_lancamento, diretor, duracao_minutos, poster_url) VALUES

-- Filme 1
('O Senhor dos Anéis: A Sociedade do Anel', 
 'Um jovem hobbit recebe um anel mágico de seu tio e descobre que ele é perigoso. Com a ajuda de amigos, ele deve levar o anel a um vulcão distante para destruí-lo antes que caia nas mãos erradas.',
 'Fantasia',
 2001,
 'Peter Jackson',
 178,
 'https://via.placeholder.com/300x450?text=Senhor+dos+Anéis'),

-- Filme 2
('Matrix',
 'Um hacker descobre a verdade sobre sua realidade e seu verdadeiro potencial dentro da simulação conhecida como Matrix.',
 'Ficção Científica',
 1999,
 'Lana Wachowski, Lilly Wachowski',
 136,
 'https://via.placeholder.com/300x450?text=Matrix'),

-- Filme 3
('Interestelar',
 'Um grupo de astronautas viaja através de um buraco de minhoca perto de Saturno em busca de um novo lar para a humanidade.',
 'Ficção Científica',
 2014,
 'Christopher Nolan',
 169,
 'https://via.placeholder.com/300x450?text=Interestelar'),

-- Filme 4
('Pulp Fiction',
 'Várias histórias interconectadas de criminosos, gangsters, boxeadores e uma gangster molls em Los Angeles.',
 'Crime',
 1994,
 'Quentin Tarantino',
 154,
 'https://via.placeholder.com/300x450?text=Pulp+Fiction'),

-- Filme 5
('O Rei Leão',
 'Um jovem leão príncipe foge para o exílio após a morte de seu pai, apenas para descobrir a verdade sobre sua morte.',
 'Animação',
 1994,
 'Roger Allers, Rob Minkoff',
 88,
 'https://via.placeholder.com/300x450?text=Rei+Leão'),

-- Filme 6
('Inception',
 'Um ladrão especializado em roubar segredos corporativos do inconsciente durante o sono é oferecido a oportunidade de ter sua vida de volta.',
 'Ficção Científica',
 2010,
 'Christopher Nolan',
 148,
 'https://via.placeholder.com/300x450?text=Inception'),

-- Filme 7
('Forrest Gump',
 'As décadas passam e experiências não convencionais testemunham as mudanças históricas e sociais nos EUA.',
 'Drama',
 1994,
 'Robert Zemeckis',
 142,
 'https://via.placeholder.com/300x450?text=Forrest+Gump'),

-- Filme 8
('Gladiador',
 'Um ex-general romano se torna um escravo lutador e procura por vingança contra o imperador que assassinou sua família.',
 'Ação',
 2000,
 'Ridley Scott',
 155,
 'https://via.placeholder.com/300x450?text=Gladiador'),

-- Filme 9
('Titanic',
 'Um artista pobre e uma mulher rica caem um pelo outro quando embarcam no navio que se presume ser insinkável.',
 'Romance',
 1997,
 'James Cameron',
 194,
 'https://via.placeholder.com/300x450?text=Titanic'),

-- Filme 10
('Avatar',
 'Um humano paraplégico viaja para o exótico planeta Pandora e se torna libertador de um dos povos indígenas.',
 'Ficção Científica',
 2009,
 'James Cameron',
 162,
 'https://via.placeholder.com/300x450?text=Avatar'),

-- Filme 11
('Vengadores: Endgame',
 'Os heróis restantes viajam no tempo em uma última tentativa de reverter o declínio de Thanos.',
 'Ação',
 2019,
 'Anthony Russo, Joe Russo',
 181,
 'https://via.placeholder.com/300x450?text=Avengers'),

-- Filme 12
('A Lista de Schindler',
 'Na Polônia, um empresário alemão consegue salvar mais de mil judeus poloneses durante o regime nazista.',
 'Drama',
 1993,
 'Steven Spielberg',
 195,
 'https://via.placeholder.com/300x450?text=Schindler');