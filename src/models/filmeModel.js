// Importar a configuração do banco
const { pool } = require('../config/database');

class FilmeModel {
  
  static async buscarTodos() {
    try {

      const connection = await pool.getConnection();


      const [filmes] = await connection.query(
  
        'SELECT id, titulo, sinopse, genero, ano_lancamento, diretor, duracao_minutos, poster_url FROM filmes ORDER BY titulo'
      );

      connection.release();

      return filmes;

    } catch (error) {

      throw new Error(`Erro ao buscar filmes: ${error.message}`);
    }
  }

  /**
   * Buscar UM filme pelo ID
   * 
   * @param {number} id - ID do filme
   * @returns {Promise<Object|null>} Filme encontrado ou null
   */
  static async buscarPorId(id) {
    try {
      const connection = await pool.getConnection();


      const [filmes] = await connection.query(
        'SELECT id, titulo, sinopse, genero, ano_lancamento, diretor, duracao_minutos, poster_url FROM filmes WHERE id = ?',
        [id]
      );

      connection.release();

      if (filmes.length === 0) {
        return null;
      }

      return filmes[0];

    } catch (error) {
      throw new Error(`Erro ao buscar filme por ID: ${error.message}`);
    }
  }

  /**
   * Filtrar filmes por NOME ou SINOPSE
   * 
   * @param {string} termo - Termo de busca
   * @returns {Promise<Array>} Array com filmes encontrados
   * 
   * Exemplo: filtrarPorNome('Senhor')
   * Encontra: "O Senhor dos Anéis"
   */
  static async filtrarPorNome(termo) {
    try {
      const connection = await pool.getConnection();

      const termoBusca = `%${termo}%`;

      const [filmes] = await connection.query(
        `SELECT id, titulo, sinopse, genero, ano_lancamento, diretor, duracao_minutos, poster_url 
         FROM filmes 
         WHERE LOWER(titulo) LIKE LOWER(?) 
            OR LOWER(sinopse) LIKE LOWER(?)
         ORDER BY titulo`,
        [termoBusca, termoBusca]
      );

      connection.release();
      return filmes;

    } catch (error) {
      throw new Error(`Erro ao filtrar filmes: ${error.message}`);
    }
  }

  static async contar() {
    try {
      const connection = await pool.getConnection();

      const [resultado] = await connection.query('SELECT COUNT(*) as total FROM filmes');

      connection.release();
      return resultado[0].total;

    } catch (error) {
      throw new Error(`Erro ao contar filmes: ${error.message}`);
    }
  }
}

module.exports = FilmeModel;