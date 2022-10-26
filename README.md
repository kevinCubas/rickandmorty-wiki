# O Projeto

- Hook personalizado para fazer requisição, com uso do hook "useCallback" para retornar uma versão memorizada da requisição, que só muda se o id passado for diferente. 
Otimizando componentes, que dependem do estado de referência para evitar renderizações. As requisições são assíncronas;

- Criei um array com todos os ids de personagens, e o passei como parâmetro da primeira requisição para pegar a listagem de todos os personagens em uma única requisição. A listagem é salva no localStorage. 

- Para os elementos em tela, utilizei o React Memo para evitar renderização de cards após a primeira renderização, e quando os filtros são aplicados.

- Os filtros: Criei constantes para cada filtro, evitando criar mais estados. É possível filtrar por ID (padrão), nome ou status (vivo, morto ou desconhecido).
- A busca é feita por nome, só funciona ao digitar dois caracteres ou mais.

- Adicionei o efeito de scroll infinito, utilizando a Intersection Observer API, useRef e useEffect hook para observar alteração dos elementos em tela, e adicionar mais personagens. Utilizei do método slice para a lista de personagens que aparecem em tela e um estado que aumenta a quantidade de personagens. Método map para criar componentes para cada item dessa lista.

- Adicionei uma página personalizada de erro ao entrar em uma rota inexistente.

### tecnologias e ferramentas utilizadas

- Vite <a href="https://vitejs.dev/guide/" rel="noopener noreferrer">Docs</a>;
- React <a href="https://reactjs.org/docs/getting-started.html" rel="noopener noreferrer">Docs</a>;
- Styled-components <a href="https://styled-components.com/docs" target="_blank" rel="noopener noreferrer">Docs</a>
- React-Select <a href="https://react-select.com/home" rel="noopener noreferrer">Docs</a>
- React-Router <a href="https://reactrouter.com/" rel="noopener noreferrer">Docs</a>
#
- [x] A lista contém nome, imagem do personagem e status.
- [x] Barra de busca digitando o nome do personagem.
- [x] Ordenar a lista por: ID do Personagem (padrão), nome (ordem alfabética) e status.
- [x] Ao clicar em um item da lista, abre uma página com mais detalhes e características dele.
- [x] Chamada RickMortyAPI armazenada no localStorage.

## 🏃‍♂️ Rodar o projeto

Clone o repositório

Use **yarn** ou **npm install** para instalar dependências.

Então, inicie o servidor.

```cl
npm run dev
```
