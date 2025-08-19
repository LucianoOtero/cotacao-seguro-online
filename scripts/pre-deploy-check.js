#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificação Pré-Deploy - Seguros Imediato\n');

let errors = 0;
let warnings = 0;

function checkFile(filePath, description, required = true) {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description}`);
    return true;
  } else {
    if (required) {
      console.log(`❌ ${description} - OBRIGATÓRIO`);
      errors++;
    } else {
      console.log(`⚠️  ${description} - RECOMENDADO`);
      warnings++;
    }
    return false;
  }
}

function checkDirectory(dirPath, description, required = true) {
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    console.log(`✅ ${description} (${files.length} itens)`);
    return true;
  } else {
    if (required) {
      console.log(`❌ ${description} - OBRIGATÓRIO`);
      errors++;
    } else {
      console.log(`⚠️  ${description} - RECOMENDADO`);
      warnings++;
    }
    return false;
  }
}

console.log('📋 Verificando arquivos essenciais...');
checkFile('package.json', 'package.json');
checkFile('next.config.ts', 'next.config.ts');
checkFile('tailwind.config.ts', 'tailwind.config.ts');
checkFile('tsconfig.json', 'tsconfig.json');

console.log('\n📁 Verificando estrutura de diretórios...');
checkDirectory('src', 'Diretório src/');
checkDirectory('src/app', 'Diretório src/app/');
checkDirectory('src/components', 'Diretório src/components/');
checkDirectory('src/lib', 'Diretório src/lib/');
checkDirectory('public', 'Diretório public/');

console.log('\n🎨 Verificando assets...');
checkDirectory('public/images', 'Imagens públicas');
checkDirectory('public/fonts', 'Fontes');
checkFile('public/favicon.ico', 'Favicon', false);

console.log('\n📄 Verificando páginas principais...');
checkFile('src/app/page.tsx', 'Homepage');
checkFile('src/app/layout.tsx', 'Layout principal');
checkFile('src/app/seguro-auto/page.tsx', 'Página Seguro Auto');
checkFile('src/app/blog/page.tsx', 'Página Blog');

console.log('\n🔧 Verificando APIs...');
checkFile('src/app/api/lead/route.ts', 'API de Leads');
checkFile('src/app/api/collect/route.ts', 'API de Coleta');
checkFile('src/app/sitemap.ts', 'Sitemap dinâmico');
checkFile('src/app/robots.ts', 'Robots.txt');

console.log('\n⚙️  Verificando componentes...');
checkFile('src/components/Header.tsx', 'Header');
checkFile('src/components/Footer.tsx', 'Footer');
checkFile('src/components/Hero.tsx', 'Hero');
checkFile('src/components/LeadForm.tsx', 'Formulário de Lead');

console.log('\n📊 Verificando configurações...');
checkFile('middleware.ts', 'Middleware');
checkFile('env.example', 'Exemplo de variáveis de ambiente', false);

// Verificar package.json
if (fs.existsSync('package.json')) {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  console.log('\n📦 Verificando dependências...');
  const requiredDeps = ['next', 'react', 'react-dom', 'tailwindcss'];
  requiredDeps.forEach(dep => {
    if (pkg.dependencies?.[dep] || pkg.devDependencies?.[dep]) {
      console.log(`✅ ${dep}`);
    } else {
      console.log(`❌ ${dep} - OBRIGATÓRIO`);
      errors++;
    }
  });
  
  console.log('\n📜 Verificando scripts...');
  const requiredScripts = ['dev', 'build', 'start'];
  requiredScripts.forEach(script => {
    if (pkg.scripts?.[script]) {
      console.log(`✅ npm run ${script}`);
    } else {
      console.log(`❌ npm run ${script} - OBRIGATÓRIO`);
      errors++;
    }
  });
}

console.log('\n' + '='.repeat(50));
console.log('📊 RESUMO DA VERIFICAÇÃO');
console.log('='.repeat(50));

if (errors === 0 && warnings === 0) {
  console.log('🎉 PERFEITO! Projeto pronto para deploy!');
} else if (errors === 0) {
  console.log(`✅ APROVADO! ${warnings} avisos encontrados (não críticos)`);
} else {
  console.log(`❌ REPROVADO! ${errors} erros críticos encontrados`);
  console.log(`⚠️  ${warnings} avisos adicionais`);
}

console.log('\n📝 Próximos passos:');
if (errors === 0) {
  console.log('1. Execute: npm run build');
  console.log('2. Teste: npm run start');
  console.log('3. Deploy na Vercel/Netlify');
  console.log('4. Configure domínio personalizado');
  console.log('5. Configure variáveis de ambiente');
} else {
  console.log('1. Corrija os erros críticos listados acima');
  console.log('2. Execute este script novamente');
  console.log('3. Prossiga com o deploy quando aprovado');
}

process.exit(errors > 0 ? 1 : 0);
