# Projeto de Estudo: THREE.JS com Cadeira Escorpião Gamer
## Descrição
### Este projeto é um estudo de utilização da biblioteca THREE.JS para renderização 3D na web. O foco principal foi a criação de uma cena interativa que apresenta uma cadeira escorpião gamer. A cadeira foi modelada no Blender e exportada diretamente para o projeto em formato compatível com o THREE.JS.

### Tecnologias Utilizadas
 - THREE.JS: Biblioteca JavaScript para criação de gráficos 3D.
 - Blender: Software de modelagem 3D utilizado para criar e exportar a cadeira escorpião gamer.
 - JavaScript: Linguagem de programação principal para manipulação da cena e dos objetos.
 - HTML/CSS: Estrutura e estilo da página web que exibe a cena 3D.

### Funcionalidades
Importação e Carregamento de Objetos 3D:

A cadeira escorpião gamer foi modelada no Blender e exportada em formato GLTF/GLB.
Utilização do GLTFLoader do THREE.JS para carregar o modelo 3D na cena.
Iluminação Completa:

Várias fontes de luz foram adicionadas para criar uma iluminação realista e destacar os detalhes da cadeira.
Utilização de AmbientLight, DirectionalLight e PointLight para diferentes efeitos de iluminação.
Interatividade:

Implementação de controles de câmera para permitir que o usuário visualize a cadeira de diferentes ângulos.
Adição de animações simples para demonstrar as capacidades interativas do THREE.JS.
Estrutura do Projeto
```bash
/estudos3JS
│
├── /
│   ├── index.html       # Estrutura HTML da página
│   ├── css/style.css        # Estilos CSS
│   ├── js/script.js          # Script principal em JavaScript
│   ├── /model          # Diretório contendo o modelo 3D exportado do Blender
│
├── /node_modules        # Dependências instaladas via npm
│
├── package.json         # Configurações e dependências do projeto
│
└── README.md            # Documentação do projeto
```

Como Executar o Projeto
Clone o Repositório:

```bash
git clone https://github.com/seu-usuario/meu-projeto-threejs.git
cd meu-projeto-threejs
```
Instale as Dependências:

```bash
npm install
Inicie o Servidor de Desenvolvimento:
```
```bash
npm start
O projeto estará disponível em http://localhost:8080.
```

### Fontes e Referências
 - THREE.JS Documentation
 - Blender Documentation
 - FBX Loader THREE.JS


## Conclusão
Este projeto demonstrou a capacidade do THREE.JS em criar cenas 3D interativas na web, utilizando um modelo 3D complexo como a cadeira escorpião gamer. 
A integração com o Blender para a criação e exportação de objetos 3D facilita o fluxo de trabalho, permitindo que modelos detalhados sejam rapidamente visualizados e manipulados na web.
