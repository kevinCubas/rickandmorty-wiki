## Teste de Frontend

Fala, dev! Tudo bem?

Queremos alguém que saiba trabalhar em equipe e que possa colaborar e ajudar seus colegas ao longo das tarefas, e além disso esteja disposto a aprender.

Este teste tem como objetivo avaliar e desafiar você. **Não é obrigatório realizá-lo completamente (nem dominar todos os frameworks)**, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

## O Desafio

Sua missão é criar uma landing page (página estática) para buscar, listar e detalhar personagens, usando a API [The Rick and Morty API](https://rickandmortyapi.com)

O layout inteiro é livre, mas a lista deverá conter no mínimo **nome** e **imagem** do personagem.

Sobre a busca, ela poderá ser feita digitando o nome do personagem e retornando o personagem correspondente.

Seria interessante ordenar a lista também. Pensamos em pelo menos dois tipos: por ID do Personagem (padrão) ou por nome (ordem alfabética).

Mas nossa listagem não seria muito útil só com nome e foto de cada personagem. Então sugerimos que, ao clicar em um item da lista, abra um modal ou página, com mais detalhes e características dele (fica a seu critério se será um modal ou qualquer outro layout para exibir esses detalhes, inclusive os dados que serão exibidos são de sua escolha também).

## Consigo fazer?

Consegue sim! Só precisa saber (ou aprender) um pouco sobre as seguintes tecnologias:

- HTML

- CSS

- Javascript

- Git

- Consumo de APIs Rest

Você está livre para usar bibliotecas css como Ant Design, Chakra UI, Boostrap, Material e etc..

## Regras

Nem tudo são flores e, por conta disso, esse desafio possui algumas regras básicas:

- Na parte de JS, deve utilizar algum framework (ex.: ReactJS, VueJS...). Lembrando que ReactJS é diferencial, pois o utilizamos aqui na docgsx. Você não precisa saber todos, escolha um e seja feliz!

- Utilizar pelo menos uma função assíncrona nessas requisições da API.

- Pelo menos uma chamada na RickMortyAPI deve ser armazenada no **localStorage**, assim você pode utilizar os dados que a chamada à API te retornou, sem ter que chamar várias vezes a mesma rota.

**Ex**: É feita uma requisição para pegar a listagem inicial dos personagens; coloca-se o resultado em cache e posteriormente quando entrar nessa mesma tela ela não deve fazer a requisição outra vez, e deve então utilizar o que está armazenado no nosso querido **localStorage**).

## Como eu entrego?

Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos identificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch 'main' do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?

Só!

É isso e boa sorte!

## O que eu fiz

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
- [x] Busca digitando o nome do personagem e retornando o personagem correspondente.
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
