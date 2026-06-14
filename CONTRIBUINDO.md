# Como Contribuir

## Adicionando Novos Endpoints

### Exemplo: Criar endpoint POST para adicionar filme

#### Passo 1: Adicionar método no Model

```javascript
// src/models/filmeModel.js
static async criar(dadosFilme) {
  const connection = await pool.getConnection();
  const [resultado] = await connection.query(
    'INSERT INTO filmes (titulo, sinopse, ...) VALUES (?, ?, ...)',
    [dadosFilme.titulo, dadosFilme.sinopse, ...]
  );
  connection.release();
  return resultado.insertId;
}
```

#### Passo 2: Adicionar método no Controller

```javascript
// src/controllers/filmeController.js
static async criar(req, res) {
  // Validar parâmetros
  // Chamar Model
  // Retornar resposta
}
```

#### Passo 3: Registrar Rota

```javascript
// src/routes/filmeRoutes.js
router.post('/filme', FilmeController.criar);
```

## Padrão de Código

- Use camelCase para variáveis
- Use snake_case para colunas do banco
- Sempre valide entrada
- Sempre use try/catch
- Retorne status HTTP apropriado

## Status HTTP Padrão

- 200 = Sucesso
- 400 = Erro de validação
- 404 = Não encontrado
- 500 = Erro no servidor