#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始构建 Water UI 组件库...\n');

// 构建所有包
const packages = [
  'packages/core',
  'packages/themes',
  'packages/utils'
];

packages.forEach(pkg => {
  console.log(`📦 构建 ${pkg}...`);
  try {
    execSync('pnpm build', { 
      cwd: path.resolve(pkg), 
      stdio: 'inherit' 
    });
    console.log(`✅ ${pkg} 构建完成\n`);
  } catch (error) {
    console.error(`❌ ${pkg} 构建失败:`, error.message);
    process.exit(1);
  }
});

console.log('🎉 所有包构建完成！');
console.log('\n🎊 Water UI 组件库构建完成！');
console.log('📂 各包输出目录: packages/*/dist/');
console.log('🌐 可以在 examples/index.html 中查看示例'); 