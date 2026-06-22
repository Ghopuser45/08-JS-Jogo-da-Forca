# 08-JS-Jogo-da-Forca

## Nome: Gustavo Henrique Oliveira Pestana

## Regras do Jogo

O jogador deve descobrir uma palavra secreta pertencente a uma categoria específica.

A cada rodada, o jogador tenta adivinhar letras da palavra.

O jogador pode usar uma dica, mas essa ação resulta na perda de 1 tentativa.

Cada letra incorreta reduz o número de tentativas restantes.

O jogador vence ao descobrir todas as letras da palavra antes de esgotar as tentativas.

O jogador perde caso alcance o número máximo de erros.

## Como Jogar

- Acesse a pasta do projeto 08-JS-Jogo-da-Forca via terminal.
- Execute o jogo pelo terminal (CMD) no Windows ou Bash (Shell) no Linux usando o comando npm start.
- Escolha uma das categorias disponíveis.
- Digite uma letra por vez para tentar descobrir a palavra secreta.
- Caso precise de ajuda, digite "dica" para receber uma pista sobre a palavra.
- O uso da dica consome uma tentativa.
- O jogador vence ao descobrir todas as letras da palavra antes de atingir o limite de erros.
- Ao final da partida será exibida a pontuação obtida.
- O jogador poderá iniciar uma nova rodada ao término da partida.

## Como executar

### Pré-requisitos

Antes de executar o jogo, é necessário ter o Node.js instalado no computador.

### Passo 1 - Clonar o repositório

Abra um terminal e execute:

git clone https://github.com/Ghopuser45/08-JS-Jogo-da-Forca.git

Depois acesse a pasta do projeto:

cd 08-JS-Jogo-da-Forca

### Passo 2 - Instalar as dependências

Execute o comando abaixo para instalar a biblioteca utilizada pelo projeto:

npm install

ou

npm install prompt-sync

### Passo 3 - Executar o jogo

Com as dependências instaladas, execute:

npm start

O jogo será iniciado no terminal.

## Personalizações do jogo

- A pontuação é calculada com base nas tentativas restantes.
- O jogador pode errar no máximo 6 vezes.
- O jogo normaliza todas as letras para minúsculas.
- Letras repetidas não são aceitas.
- Todas as palavras estão sem espaços e sem acentos para evitar problemas no jogo.
- O jogador escolhe a categoria antes da partida.
- Sistema de dicas disponível (com penalidade de 1 tentativa).
- O jogo permite várias partidas seguidas (modo replay).
- Representação visual da forca em ASCII que vai sendo completado conforme o número de erros aumenta.


## Créditos

Este projeto foi desenvolvido como atividade acadêmica da disciplina de WEB I sobre o conteúdo de JavaScript.

Referências utilizadas:

- Material de aula e conteúdos disponibilizados pelo professor.
- Documentação oficial do Node.js.
- Documentação da biblioteca prompt-sync.
- MDN Web Docs (Mozilla Developer Network) para consulta da linguagem JavaScript.
- ChatGPT (OpenAI) para esclarecimento de dúvidas sobre JavaScript, Node.js e estruturação do projeto.

## Licença do projeto

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
