// Importar o Model
const FilmeModel = require('../models/filmeModel');

class FilmeController {
  /**
   * GET /v1/controle-filmes/filme
   * 
   * @param {Object} req - Requisição HTTP
   * @param {Object} res - Resposta HTTP
   */
  static async listarTodos(req, res) {
    try {

      const filmes = await FilmeModel.buscarTodos();

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Filmes listados com sucesso',
        total: filmes.length,
        dados: filmes
      });

    } catch (error) {

      console.error('Erro ao listar filmes:', error.message);

      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao listar filmes',
        erro: error.message
      });
    }
  }

  static async buscarPorId(req, res) {
    try {

      const { id } = req.params;

      if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
        // Retorna erro 400 = Bad Request (entrada inválida)
        return res.status(400).json({
          sucesso: false,
          mensagem: 'ID inválido. Deve ser um número inteiro positivo',
          dados: null
        });
      }

      const filme = await FilmeModel.buscarPorId(id);


      if (!filme) {

        return res.status(404).json({
          sucesso: false,
          mensagem: `Filme com ID ${id} não encontrado`,
          dados: null
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Filme encontrado com sucesso',
        dados: filme
      });

    } catch (error) {
      console.error('Erro ao buscar filme:', error.message);

      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao buscar filme',
        erro: error.message
      });
    }
  }

  static async filtrar(req, res) {
    try {

      const { nome } = req.query;

      if (!nome || nome.trim() === '') {

        return res.status(400).json({
          sucesso: false,
          mensagem: 'Parâmetro "nome" é obrigatório e não pode estar vazio',
          dados: null
        });
      }

      if (nome.trim().length < 2) {
        return res.status(400).json({
          sucesso: false,
          mensagem: 'O termo de busca deve ter pelo menos 2 caracteres',
          dados: null
        });
      }

      const filmes = await FilmeModel.filtrarPorNome(nome);

      if (filmes.length === 0) {
        return res.status(404).json({
          sucesso: false,
          mensagem: `Nenhum filme encontrado com o termo "${nome}"`,
          dados: []
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: 'Filmes encontrados com sucesso',
        total: filmes.length,
        termo_busca: nome,
        dados: filmes
      });

    } catch (error) {
      console.error('Erro ao filtrar filmes:', error.message);

      return res.status(500).json({
        sucesso: false,
        mensagem: 'Erro ao filtrar filmes',
        erro: error.message
      });
    }
  }
}

module.exports = FilmeController;