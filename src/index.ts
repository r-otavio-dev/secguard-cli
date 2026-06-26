import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI de Auditoria de Segurança para Devs')
  .argument('<diretorio>', 'Diretório a ser analisado')
  .action((diretorio) => {
    const targetPath = path.resolve(diretorio);
    console.log(`\x1b[32m[+] Iniciando scan de segurança em: ${targetPath}\x1b[0m`);
    
    if (fs.existsSync(targetPath)) {
      const files = fs.readdirSync(targetPath);
      let vulnerabilidades = 0;

      files.forEach(file => {
        if (file.includes('.env') || file.includes('key')) {
          console.log(`\x1b[31m[ALERTA] Arquivo sensível exposto encontrado: ${file}\x1b[0m`);
          vulnerabilidades++;
        }
      });

      if (vulnerabilidades === 0) {
        console.log('\x1b[34m[OK] Nenhum risco imediato encontrado nos arquivos superficiais.\x1b[0m');
      }
    } else {
      console.log('Diretório não encontrado.');
    }
  });

program.parse(process.argv);