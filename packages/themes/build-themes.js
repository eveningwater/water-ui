const fs = require('fs');
const path = require('path');

// 确保dist目录存在
const distDir = path.join(__dirname, 'dist');
const themesDir = path.join(distDir, 'themes');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// 复制CSS文件到dist/themes目录
const themes = [
  { src: 'src/default.css', dest: 'dist/themes/theme-light.css' },
  { src: 'src/dark.css', dest: 'dist/themes/theme-dark.css' },
  { src: 'src/pixel.css', dest: 'dist/themes/theme-pixel.css' }
];

themes.forEach(theme => {
  const srcPath = path.join(__dirname, theme.src);
  const destPath = path.join(__dirname, theme.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied ${theme.src} to ${theme.dest}`);
  } else {
    console.error(`❌ Source file not found: ${theme.src}`);
  }
});

console.log('🎨 Theme CSS files built successfully!'); 