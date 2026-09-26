# SecGuard CLI

Exercício educacional em TypeScript e Node.js que verifica nomes de arquivos no primeiro nível de um diretório e sinaliza ocorrências de `.env` ou `key`.

## Objetivo

O projeto foi criado para praticar:

- argumentos de linha de comando;
- leitura de diretórios;
- funções pequenas e tipagem básica em TypeScript;
- mensagens de retorno no terminal.

## Limites

Esta ferramenta faz apenas uma verificação superficial por nome de arquivo. Ela não analisa conteúdo, não percorre subpastas, não identifica vulnerabilidades e não substitui ferramentas de segurança ou revisão humana.

## Executar

```bash
npm install
npm run build
node dist/index.js caminho/do/diretorio
```

## Próximos passos

- adicionar testes automatizados;
- permitir busca recursiva opcional;
- documentar regras de exclusão;
- separar códigos de saída para sucesso, alerta e erro de uso.
