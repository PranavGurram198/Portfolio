const fs = require('fs');
const path = require('path');

console.log('=== Tailwind Diagnostic ===\n');

// Check if tailwind.config.js exists
const tailwindConfig = path.join(process.cwd(), 'tailwind.config.js');
console.log('1. Checking tailwind.config.js...');
if (fs.existsSync(tailwindConfig)) {
  console.log('   ✅ tailwind.config.js found');
  const content = fs.readFileSync(tailwindConfig, 'utf8');
  console.log('   Content paths:', content.match(/content:\s*\[([\s\S]*?)\]/)?.[1]);
} else {
  console.log('   ❌ tailwind.config.js NOT FOUND');
}

// Check if globals.css exists and has @tailwind directives
const globalsCSS = path.join(process.cwd(), 'app', 'globals.css');
console.log('\n2. Checking app/globals.css...');
if (fs.existsSync(globalsCSS)) {
  console.log('   ✅ app/globals.css found');
  const content = fs.readFileSync(globalsCSS, 'utf8');
  const hasTailwindBase = content.includes('@tailwind base');
  const hasTailwindComponents = content.includes('@tailwind components');
  const hasTailwindUtilities = content.includes('@tailwind utilities');
  console.log('   @tailwind base:', hasTailwindBase ? '✅' : '❌');
  console.log('   @tailwind components:', hasTailwindComponents ? '✅' : '❌');
  console.log('   @tailwind utilities:', hasTailwindUtilities ? '✅' : '❌');
} else {
  console.log('   ❌ app/globals.css NOT FOUND');
}

// Check postcss.config.js
const postcssConfig = path.join(process.cwd(), 'postcss.config.js');
console.log('\n3. Checking postcss.config.js...');
if (fs.existsSync(postcssConfig)) {
  console.log('   ✅ postcss.config.js found');
} else {
  console.log('   ❌ postcss.config.js NOT FOUND');
}

// Check if layout.tsx imports globals.css
const layoutFile = path.join(process.cwd(), 'app', 'layout.tsx');
console.log('\n4. Checking app/layout.tsx...');
if (fs.existsSync(layoutFile)) {
  console.log('   ✅ app/layout.tsx found');
  const content = fs.readFileSync(layoutFile, 'utf8');
  const importsGlobals = content.includes("'./globals.css'") || content.includes('"./globals.css"');
  console.log('   Imports globals.css:', importsGlobals ? '✅' : '❌');
} else {
  console.log('   ❌ app/layout.tsx NOT FOUND');
}

console.log('\n=== End Diagnostic ===');