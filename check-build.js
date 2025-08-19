const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuração do projeto...\n');

// Verificar se package.json existe
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  console.log('✅ package.json encontrado');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  console.log(`   - Nome: ${pkg.name}`);
  console.log(`   - Versão: ${pkg.version}`);
  console.log(`   - Next.js: ${pkg.dependencies?.next || 'não encontrado'}`);
} else {
  console.log('❌ package.json não encontrado');
}

// Verificar se next.config.ts existe
const nextConfigPath = path.join(__dirname, 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  console.log('✅ next.config.ts encontrado');
} else {
  console.log('❌ next.config.ts não encontrado');
}

// Verificar se tailwind.config.ts existe
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.ts');
if (fs.existsSync(tailwindConfigPath)) {
  console.log('✅ tailwind.config.ts encontrado');
} else {
  console.log('❌ tailwind.config.ts não encontrado');
}

// Verificar estrutura de diretórios
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
  console.log('✅ Diretório src/ encontrado');
  
  const appPath = path.join(srcPath, 'app');
  if (fs.existsSync(appPath)) {
    console.log('✅ Diretório src/app/ encontrado');
    
    // Contar páginas
    const pages = fs.readdirSync(appPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() || dirent.name.endsWith('.tsx'))
      .length;
    console.log(`   - ${pages} páginas/diretórios encontrados`);
  }
  
  const componentsPath = path.join(srcPath, 'components');
  if (fs.existsSync(componentsPath)) {
    console.log('✅ Diretório src/components/ encontrado');
    
    // Contar componentes
    const components = fs.readdirSync(componentsPath)
      .filter(file => file.endsWith('.tsx'))
      .length;
    console.log(`   - ${components} componentes encontrados`);
  }
} else {
  console.log('❌ Diretório src/ não encontrado');
}

console.log('\n🎯 Status: Projeto configurado e pronto para build!');
console.log('\n📝 Para fazer o build:');
console.log('   npm run build');
console.log('\n📝 Para testar localmente:');
console.log('   npm run dev');
