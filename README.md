# SecGuard CLI 🛡️

CLI educacional em TypeScript e Node.js para fazer uma verificação superficial de arquivos potencialmente sensíveis em um diretório local.

## Funcionalidades

- recebe o diretório a ser analisado pela linha de comando;
- procura, no primeiro nível da pasta, nomes que contenham `.env` ou `key`;
- destaca achados no terminal;
- informa quando o diretório não existe ou quando nenhum risco imediato é encontrado.

> O SecGuard CLI é uma ferramenta de apoio para estudos. Ele não faz busca recursiva, análise de conteúdo, validação de segredos nem substitui scanners profissionais.

## Tecnologias

- TypeScript
- Node.js
- Commander.js

## Como executar

Pré-requisito: Node.js e npm instalados.

```bash
npm install
npx ts-node src/index.ts ./pasta-para-analisar
```

Exemplo de saída:

```text
[+] Iniciando scan de segurança em: /projeto
[ALERTA] Arquivo sensível exposto encontrado: .env
```

## Como funciona

O caminho informado é convertido para um caminho absoluto. Se a pasta existir, o programa lê seus itens imediatos e sinaliza nomes compatíveis com os padrões definidos no código.

## Próximas evoluções

- busca recursiva opcional;
- padrões configuráveis;
- testes automatizados;
- níveis de severidade e saída em JSON;
- respeito a arquivos de exclusão, como `.gitignore`.

## Uso responsável

Execute a ferramenta somente em diretórios próprios ou em ambientes nos quais você tenha autorização. Um alerta indica apenas um nome potencialmente sensível e deve ser validado manualmente.
